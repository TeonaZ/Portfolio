import React from 'react'
import{useParams} from 'react-router-dom'

export default function Hero() {

    const {name,apple} = useParams()
    console.log(apple)
  return (
    <div>
        <div>
            Teona Zaalishvili
        </div>
        <div>
            Software Developer
        </div>
        <button><a href="https://www.linkedin.com/in/teona-zaalishvili-181653264/">Contact Me!</a></button>
    </div>
  )
}
