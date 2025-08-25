import Gender from "./Gender";

function Card(props){

    return (
         <div className="Card">
           <div > Name : {props.name}</div>  
           {props.email && <div > email : {props.email}</div>  }           
           {props.age && <div > age : {props.age}</div>  }
            <Gender gender={props.gender}/> 
            <div>
                {props?.add1?.line} <br />
                {props?.add1?.dist} <br />
                {props?.add1?.State}
            </div>
         </div>

    )
}

export default Card;