import React from 'react';
import { authActions } from '../../store/index';
import { useDispatch,useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';
import './Navbar.module.css';
const { Header } = Layout;


export default function Navbar() {
  const dispatch = useDispatch();
  const show = useSelector(state => state.auth.isAuthenticated)
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
return(
  <Layout>
  <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="logo">FORM & REDUX</div>
    <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">News Letter</Menu.Item>
      {show && <Menu.Item key="4">Acoout</Menu.Item>}
      {show && <Menu.Item key="5">Cart</Menu.Item>} 
      {show && <Menu.Item key="6" onClick={logoutHandler}>Log Out</Menu.Item>}
    </Menu>
  </Header>

</Layout>
);
};