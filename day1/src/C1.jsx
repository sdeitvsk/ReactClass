import React from 'react'
import Card from "./components/Card";
function C1() {

    const empdata = [
        { name: "Jhonny", email: "Jhon@gmail.com", age: "25", gender: "m", rating: 4 },
        { name: "Ravi", email: "ravi@gmail.com", age: "35", gender: "m" },
        { name: "sita", email: "sita@outlook.com", age: "35", gender: "f" },
        { name: "Mohan", email: "sita@outlook.com", age: "55" },
        {
            name: "Shiva", email: "shiva@outlook.com", age: "45", gender: 'm',
            add1: {
                line: 'Dr No 40-2-6/1',
                dist: 'Visakhaptam',
                State: 'Andhra Prased'
            }
        },
    ]

    // const add1 = 

    return (

        <div>
            <h1>React Application</h1>

            {
                /* 
                <div className="flex1">
                  <Card name={'Jhon'} email={`Jhon@gmail.com`} age={25}/>
                  <Card name={'Ravi'} age={45} gender={'m'}/>
                  <Card name={'Sita'} gender={'f'}
                        add1 = {{              
                                    line:'Dr No 40-2-6/1',
                                    dist:'Visakhaptam',
                                    State:'Andhra Prased'                      
                              }}
                  /> 
                  
                </div> 
                */
            }

            <hr />

            <div className="flex1">
                {empdata.map(emp => (
                    <Card name={emp.name} email={emp.email}
                        age={emp.age}
                        gender={emp.gender}
                        rating={emp.rating}
                    >

                        <h1> {Object.keys(emp).length} </h1>
                        <img src="https://m.media-amazon.com/images/I/513ugd16C6L._AC_UL320_.jpg" alt="" />

                    </Card>
                ))}
            </div>


        </div>


    );
}

export default C1