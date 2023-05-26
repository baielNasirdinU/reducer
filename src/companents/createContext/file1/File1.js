import React, { useContext } from 'react'
import { contentContext } from '../Countext'
const File1 = () => {
    const count=useContext(contentContext)
  return (
    <div>File1
        <h1>{count}</h1>
    </div>
  )
}

export default File1