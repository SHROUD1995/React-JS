import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return <h4> This is Arkam and my first componenet </h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root')); 