import React from 'react'
import { useLocation } from 'react-router-dom'
const Buy = () => {
    let loc = useLocation();
    // console.log(loc);
    let details = loc.state.y
    
  return (
    <div style={{height:"100vh",width:"100%"}} >
                            <div style={{height:"700px", width:"600px", border:"solid 2px", position:"relative"}}>
                            <img style={{height:"400px",width:"500px"}} src={details.image} alt='image'></img>
                            <p id="cat">Category : {details.category}  <span style={{position:"absolute", right:"180px", color:"red"}} >Price: ₹{details.price}</span></p> <br/>
                            <p id="tit">Title : <span id="titletag">{details.title}</span>  </p> <br/>
                            <p id="des">Description :</p>
                            <span id="dd">{details.description}</span>
                            <button style={{padding:"10px 10px", color:"white", background:"black", borderRadius:"15px", position:"absolute", bottom:"10px", right:"15px"}}>Buy</button>
                            </div>
    </div>
  )
}

export default Buy
