import Card from "./components/Card";
import './App.css'

function App() {

  const empdata = [
    {name:"Jhon", email:"Jhon@gmail.com", age:"25", gender:"m"},
    {name:"Ravi", email:"ravi@gmail.com", age:"35", gender:"m"},
    {name:"sita", email:"sita@outlook.com", age:"35", gender:"f"},
    {name:"Mohan", email:"sita@outlook.com", age:"55"},
    {name:"Shiva", email:"shiva@outlook.com", age:"45", gender:'m',
      add1:{
        line:'Dr No 40-2-6/1',
        dist:'Visakhaptam',
        State:'Andhra Prased'                      
          }
    },
  ]

  // const add1 = 

  return (
    
    <div>
      <h1>React Application</h1>  
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

      <hr/>
      <div className="flex1">
          {empdata.map(emp => (
              <Card name={emp.name} email={emp.email} 
                     age={emp.age}
                     gender ={emp.gender}
              />
            ))}
      </div>
      
      
     </div>
   

   

  );
}

export default App;
