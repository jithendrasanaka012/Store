import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Cards(){

  let navigate = useNavigate();
let [s,ss] = useState("")
let [api,setapi] = useState([])
const [counts, setCounts] = useState({}); 

useEffect(()=>{
        let api = fetch("https://fakestoreapi.com/products")
        // console.log(api);
        api.then(x=>x.json()).then(y=>{
            // console.log(y);
            setapi(y)
      const initialCounts = y.reduce((acc, product) => {
        acc[product.id] = 0; 
        return acc;
      }, {});
      setCounts(initialCounts);
            
        })
        .catch(err => console.log('error', err));
},[])
let value = (e)=>{
    ss(e.target.value);
}

const increment = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts, 
      [id]: prevCounts[id] + 1  
    }));
  };

  const decrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
    [id]: prevCounts[id] > 0 ? prevCounts[id] - 1 : 0 
    }));
  };
    return(
            <>
                    
                <div>
                  <div id="search1">

                  <input id="ss" type="text" onChange={value}></input>
                  
                  </div>
                  <div id="mcard">
                  {api.filter(x=>x.title.toLowerCase().includes(s)).map(y=>{
                    return(
                       

                        <div key={y.id} id="card">
                            <img src={y.image} alt="image"></img>
                            <p id="id">{y.id}</p>
                            <p id="rating">Rating <br/> {y.rating.rate}</p>
                            <p id="count">Count <br/> {y.rating.count}</p>
                            <p id="cat">Category : {y.category}  <span id="price">Price: ₹{y.price}</span></p> <br/>
                            <p id="tit">Title : <span id="titletag">{y.title}</span>  </p> <br/>
                            <p id="des">Description :</p>
                            <span id="dd">{y.description}</span>
                            <button id="cart">Add-Cart</button>
                            <button onClick={()=>navigate('/buy',{state:{y}})} id="buy">Buy Now</button>
                            <h1 id="cn">{counts[y.id]}</h1> 
                            <button id="pluss" onClick={() => increment(y.id)}>+</button> 
                            <button id="minuss" onClick={() => decrement(y.id)}>-</button>
                            
                        </div>
                      
                    )
                    
                  })}
                  </div>
                </div>


            </>
    )
} 
export default Cards;