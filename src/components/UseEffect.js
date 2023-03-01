import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const [change, setChange] = useState("explore")
    const [width, setWidth] = useState(window.innerWidth)

    const FunChange =()=>{
        setChange("No Posts")
    }

    const Resize =()=>{
        setWidth(window.innerWidth)
    }
    //useEffect()      
    useEffect(
        ()=>{console.log("Show what i clicked") //this runs second
        return ()=>{
             console.log("returned");         //this runs first called as cleanup
        }
       }, []      ,                             //parameter 



       ()=>{window.addEventListener("resized", Resize)
    console.log("clcicked")},
    
   )
  return (
    <div>
      <button onClick={FunChange}> Post </button>
      <button onClick={FunChange}>User</button>
      <button onClick={FunChange}>Commments</button>
      <div>{change}</div>


      <div>Window Width {width}</div>
    </div>
  )
}

export default UseEffect

//https://www.w3schools.com/react/react_useeffect.asp#:~:text=The%20useEffect%20Hook%20allows%20you,function%3E%2C%20)