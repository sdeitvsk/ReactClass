import Gender from "./Gender";
import Rating from "./Rating";

function Card({name,email,age, gender,add1, rating, children}){

    return (
        <>
         <div className="Card">
           <div > Name : {name}</div>  
           {email && <div > email : {email}</div>  }           
           {age && <div > age : {age}</div>  }
            <Gender gender={gender}/> 
            <div>
                {add1?.line} <br />
                {add1?.dist} <br />
                {add1?.State}
            </div>
            <div>{rating}</div> 
             <Rating rating={rating}/>
         </div>

            {children}
         
        </>
        

    )
}

export default Card;