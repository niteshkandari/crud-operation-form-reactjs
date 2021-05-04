import React,{ Fragment } from 'react';
import Data from '../Data/Data';
import { useSelector } from 'react-redux';
import DataColForm from '../DataColForm/DataColForm';
export default function MainPage() {
  const showData = useSelector(state => state.data.showData);
  // const heading = useSelector(state => state.data.heading)
  return (
    <Fragment>
    <div className='mt-36 mx-64 border-2 md:mx-8'>
    {!showData ? <DataColForm/> : <Data/>}
    </div>
   </Fragment>
  )
}
 