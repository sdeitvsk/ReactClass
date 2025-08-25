import Card from "./components/Card";
import './App.css'

function App() {

  return (
    <div>
    <div>
      <h1>React Application</h1>  
      <div className="flex1">
        <Card name={'Jhon'} email={`Jhon@gmail.com`} age={25}/>
        <Card name={'Ravi'} age={45} gender={'m'}/>
        <Card name={'Sita'} gender={'f'}/> 
      </div>
      
     </div>
   

    </div>

  );
}

export default App;
