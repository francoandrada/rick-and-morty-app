import React from "react"
import styles from "./Card.module.css"
 // foto y nombre del personaje 

 function Card (props) {
    const {name, img} = props
     return 
  <div> 
      <span> {name}</span>
      <img src={`http://${img}`}/>
  </div>







 }