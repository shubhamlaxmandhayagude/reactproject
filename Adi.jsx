import React from "react";
import STYLE from "./adi.module.css"
const Adi=()=>{
    return(
        <div>
            <nav>
                <ul className={STYLE.list}>
                    <li>
                        <a href="logo">Logo</a>
                    </li>
                    <li>
                        <a href="home">Home</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                    <li>
                        <a href="">SignUp</a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}
export default Adi;