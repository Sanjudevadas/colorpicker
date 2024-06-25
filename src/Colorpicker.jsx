
import React,{useState} from "react"
function Colorpicker(){

    const [color , setColor]=useState("#FFFF")

    const Handlechange = (e)=>setColor(e.target.value)
    return(
      <div className="colorpicker">
        <h1>Color Picker</h1>
        <div className="display" style={{backgroundColor:color}}>
        <p>{color}</p>
        </div>
       <p>Select a color</p>
        <input type="color" value ={color} onChange={Handlechange}/>
      </div>
    )
}

export default Colorpicker