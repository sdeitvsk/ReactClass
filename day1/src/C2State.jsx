import React, { useState } from 'react'

function C2State() {
   const [age, setAge] = useState(18) 
   const [name, setName] = useState() 
   
   
  return (
    <div >
        <h1>Use State </h1>
        <label htmlFor="">Age</label>
        
        <input value={age}  type='number'
                 onChange={(e) => setAge(e.target.value) }
                 />
        <h3>Age is {age} Years</h3>
        

        <label htmlFor="">name</label>
        <input value={name} 
                onChange={(e) => setName(e.target.value) }/>

        <h3>Name : {name} </h3>
    </div>
  )
}

export default C2State