import React from 'react';
import { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';

const Students = () => {
  const history=useHistory();
    const[data,setData]=useState([]);
    const[error,setError]=useState(null);
    const[isLoaded,setIsloaded]=useState(false);
    const clickHandler=()=>{
      history.push("/addStudent");
    }
    useEffect(() => {
        fetch("")
          .then(res=>res.json())
          .then(
            (result)=>{
              setIsloaded(true);
              setData(result);
            },
            (error)=>{
              setIsloaded(true);
              setError(error);
            }
          )
      },[])
      if(error)
      return <div>errror is {error.message}</div>
      else if(!isLoaded)
      return <div>Loading...</div>
      else
      {
        return (
          <>
            <div>
            
              <table>
              <button onClick={clickHandler}>Add Student</button>
                <thead>
                  <tr>
                    <th>ORDER</th>
                    <th>PRODUCT</th>
                    <th>DATE </th>
                    <th>TOTAL</th>
                    <th>STATUS</th>
                    <th>PAYMENT METHOD</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item,i) =>( 
                      <tr key={i}>
                        <td>{item.order}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.total}</td>
                        <td>{item.status}</td>
                        <td>{item.paymenttmethod}</td>
                        <td><span class="glyphicon glyphicon-edit"></span></td>
                        <td> <span class="glyphicon glyphicon-trash"></span></td>
                      </tr>
                    ))
      
                  }
                </tbody>
              </table>
            </div>
          </>
        )
      
      }
    }
    
    export default Students
    