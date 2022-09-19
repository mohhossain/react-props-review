import React from 'react'
import Name from './Name';


function Welcome({nameList}) {
   
  return (
    <div>
        <h1>Hello <Name name={nameList}></Name>, welcome to React</h1>
        <h1>Very excited to learn React together</h1>
    </div>
  )
}

export default Welcome;
