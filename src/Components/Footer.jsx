import React from "react";
function Footer(){
   
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


            return(

                <div id="footer">
                        <p>For more details mail us -    <span>F_Sstore@gmail.com</span></p>
                        <button onClick={scrollToTop} id="up">UP</button>
                </div>
            )
}
export default Footer;