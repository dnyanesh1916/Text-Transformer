import React from 'react'

export default function About(props) {
  return (
    <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About</div>
  )
}
