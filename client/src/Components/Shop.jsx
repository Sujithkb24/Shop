import React from "react";
import '/public/Shop.css'
import CardShop from "./CardShop";
function Shop(){
    return(
        <div className="containerShop">
            <div className="item">
            <CardShop/>
            </div>
            <div className="item">
            <CardShop/>
            </div>
            <div className="item">
            <CardShop/>
            </div>
            <div className="item">
            <CardShop/>
            </div>
            <div className="item">
            <CardShop/>
            </div>
            
        </div>
    )
}
export default Shop;