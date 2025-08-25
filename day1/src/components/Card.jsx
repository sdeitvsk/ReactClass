import Gender from "./Gender";

function Card(props){

    return (
         <div className="Card">
           <div > Name : {props.name}</div>  
           <div > email : {props.email}</div>  
           <div > age : {props.age}</div>  
           <Gender gender={props.gender}/>

         </div>

    )
}

export default Card;