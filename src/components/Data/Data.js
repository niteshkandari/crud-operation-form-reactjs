import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/index';
export default function Data() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.data.formArray);
  const [data, setData] = useState(null);
  // const ArrayData = useSelector(state => state.data.formArray);
  // const editArray = useSelector(state => state.data.prefillArray);
  function toggle(index) {
    dispatch(formActions.toggle(index));
    // let id = ArrayData.indexOf(editArray);
    let id = index;
    dispatch(formActions.overRideArray(id));

  }
  function deleteHandler(index) {
    dispatch(formActions.deleteItem(index));
    console.log(`${index} deleted`);
  }
  const navigateHandler = () => {
dispatch(formActions.showData());
  }
  useEffect(() => {
    setData(formData);
    console.log('data changed', formData)
  }, [formData])
  return (
    <React.Fragment>
     <div>
      {data ? (data.map((d, index) => (<table key={index} className=" text-black table-fixed mx-auto">
        <thead>
          <tr>
            <th className="w-1/6">NAME</th>  <th className="w-1/6">EMAIL</th>  <th className="w-1/6">AGE</th>  <th className="w-1/6">Gender</th> <th className="w-1/6">BirthDate</th> <th className="w-1/6">Phone no</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{d.user.name}</td> <td>{d.user.email}</td> <td className="">{d.user.age}</td>  <td>{d.gender}</td>  <td>{d.month}/{d.year}</td> <td>{d.phone}</td>
            <td className="w-1/6"> <button className="outline-none p-1 ring-1 flex justify-center items-center w-full my-4 hover:bg-red-300 hover:text-black transition ease-linear duration-300 bg-red-500 text-white font-bold tracking-wider" onClick={() => toggle(index)}>edit</button></td>
            <td className="w-1/6"> <button className="outline-none p-1 ring-1 flex justify-center items-center w-full my-4 hover:bg-red-300 hover:text-black transition ease-linear duration-300 bg-red-500 text-white font-bold tracking-wider" onClick={() => deleteHandler(index)}>delete</button></td>
          </tr>
        </tbody>
      </table>))) : ('')}
      </div> 
      <button onClick={navigateHandler} className="outline-none p-1 ring-1 flex justify-center items-center w-full my-4 hover:bg-red-300 hover:text-black transition ease-linear duration-300 bg-red-500 text-white font-bold tracking-wider">FORM</button>
    </React.Fragment>
  )
}
// : (<p className="text-4xl tracking-wider text-white bg-gray-600 p-1 ring-2 animate-pulse text-center">NO DATA TO DISPLAY!!!!</p>) }