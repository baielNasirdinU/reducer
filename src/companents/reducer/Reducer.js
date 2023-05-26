import React ,{useReducer}from 'react'

const Reducer = () => {
    const reducer=(state,action)=>{
        switch(action.type){
case '+':return state+1;
case '-':return state-1;
default: return state
        }

    }
    const [count  ,dispatch]=useReducer(reducer,0)
  return (
    <div>
        <button onClick={()=>dispatch({type:'-'})}>- add</button>
        reducer 
        {count}
        
        
        <button onClick={()=>dispatch({type:'+'})}>+add</button></div>
  )
}

export default Reducer