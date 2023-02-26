import React, {useState} from 'react'
import styled from 'styled-components'


const UseState = () => {
    
    const [count, setCount] = useState(0)
    const [theme, setTheme] =useState("blue")

    

    const decrement =()=>{
        
        setCount( count - 1) ;
        setTheme( "green")
    }

    const increment =()=>{
        
        setCount(count + 1) ;
        setTheme( "red")

    }
  return (
    <Wrapper>
        <button onClick={decrement} style={{background: theme}} >-</button>
        <div>{count}</div>
        <button onClick={increment} style={{background: theme}}>+</button>
      
    </Wrapper>
  )
}

export default UseState

const Wrapper= styled.div`
 background-color: Theme;
`