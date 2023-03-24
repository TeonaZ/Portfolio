import React from 'react'
import{useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Hero() {

    const heroStyles={backgroundColor:'rgb(206,130,255)', height:"100vh"}
   
  return (
    <div style={heroStyles}>
        <div >
            Teona Zaalishvili
        </div>
        <div>
            Software Developer
        </div>
       
        <Button variant="outline-warning"><a href="https://www.linkedin.com/in/teona-zaalishvili-181653264/">Contact Me!</a></Button>{' '}
    </div>
  )
}
