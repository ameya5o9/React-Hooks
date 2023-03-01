import React, { useRef, useState } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")

    function handleSubmit(event) {
      event.preventDefault();
      console.log(inputRef.current.value);
      setValue(inputRef.current.value);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} onChange={e=>setValue2(e.target.value)}/>
        <button type="submit">Submit</button>
        <div>{value}<br/>{value2}</div>
      </form>
    );
}

export default UseRef

