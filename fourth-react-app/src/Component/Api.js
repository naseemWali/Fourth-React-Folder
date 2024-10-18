import React from 'react';
import { useEffect,useState } from 'react';
import './Style.css';

export default function Api() {
 const[state,setState]=useState([]);
 
 const f=async() => {
  const res=await fetch("https://reqres.in/api/users");
  const json=await res.json();
  

   setState(json.data);
  
 console.log(json);
  
 }
  useEffect(()=>{
   f();
   console.log('i am useEffect');
   
  },[state])
  
  
  return (

          <div className='Appy'>
          <h3>Working with <span>React</span>API</h3>
          {/* { Button to trigger API call } */}
      {/* <button onClick={f}>Fetch Users</button>  it  is used to check without useEffect */}

          <div className="widget">
           {
           state.length && 
           state.map((user)=>(
           <div className="box" > {/* Return JSX here */}
           <img key={user.avatar} src={user.avatar}/>
           <h2><b>{user.first_name}</b></h2> 
           <h2>{user.email}</h2>
           
          </div>
            
          
      
            ))
            }

        
      
        </div>
        </div>
  )
}
