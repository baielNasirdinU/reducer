import React, { useState,createContext} from 'react'
import File1 from './file1/File1';

export const contentContext=createContext(0)
const Context = () => {
    const [count, setCount]= useState(0);
  return (
    <contentContext.Provider value={count}>
      <h2>{count}</h2>

        <button onClick={()=>setCount(count+1)}>add</button>
        <File1 />
    </contentContext.Provider>
  )
}

export default Context