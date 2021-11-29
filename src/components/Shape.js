import React from 'react'
import './Shape.css'

export default function Shape(props) {
  console.log(props)
  const classes = `shape ${props.color} ${props.type}`

  return (
    <>
      <div className={classes}>
        This is a {props.color} {props.type}
      </div>
      <img height="100" src={`${process.env.PUBLIC_URL}/shapes/happy-${props.type}.jpeg`} />
    </>
  )
}
