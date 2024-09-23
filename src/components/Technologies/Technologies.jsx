import React from 'react'
import './Technologies.css'
import { assets } from '../../assets/assets'

export const Technologies = () => {
  return (
  <section className="Technologies">

    <div className="languages">
    <h1>LANGUAGES</h1>
    <h2>HTML</h2>
    <h2>CSS</h2>
    <h2>JavaScript</h2>
    <h2>PHP</h2>

    <img src={assets.html} className='html' alt="" />
   
    
    <h2>Git/Github (Outil de versioning)</h2>
    </div>

    <div className="framework">
        <h1 className='animate__bounce'>FRAMEWORKS</h1>
    <h2>Bootstrap</h2>
    <h2>Laravel</h2>
    <h2>React js</h2>


    {/* <div className="boule" >
        <span >
            </span>
            <span ></span>
            <span ></span>
            <span></span>
    </div> */}
    </div>

    
  </section>
  )
}
