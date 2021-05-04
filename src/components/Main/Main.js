import React,{ Fragment } from 'react';
import Data from '../Data/Data';
import { useSelector } from 'react-redux';
import DataColForm from '../DataColForm/DataColForm';
export default function MainPage() {
  const showData = useSelector(state => state.data.showData);
  // const heading = useSelector(state => state.data.heading)
  return (
    <Fragment>
    <div className='my-36 md:mx-auto border-2 border-collapse md:max-w-5xl p-2'>
    {!showData ? <DataColForm/> : <Data/>}
    </div>
   </Fragment>
  )
}
 