import React from 'react'

export default function Name({name}) {
  return (
    <div>
        {name.map(name => {
            return <h1>{name}</h1>
        })}
        
    </div>
  )
}
