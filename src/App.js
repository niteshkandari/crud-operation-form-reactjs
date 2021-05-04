import React,{Fragment} from 'react'
import Navbar from './components/Navbar/Navbar';
import AuthForm from './components/AuthForm/AuthForm'
import MainPage from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux'; 
export default function App() {
  const show = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
    <Navbar/>
     {/* {show ? <AuthForm/> : <MainPage/>} */}
     <MainPage/>
     {/* <Footer /> */}
     </Fragment>
  )
}
