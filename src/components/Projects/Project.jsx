import React from 'react'
import './Project.css'
import { assets } from '../../assets/assets'

export const Project = () => {
  return (
    <section className="project">
       <img src={assets.Projects} alt="" /> 
       <h1>Mes<span>projects</span></h1>
       <h4 className='flexible'>
        <h2>Tout</h2>
        <h2>PHP</h2>
        <h2>Laravel</h2>
        <h2>React</h2>
       </h4>

       <div className="work">
     <br /> 
     
     <div className="cards">
     
     <div className="card">
  <img src={assets.Gax} alt="" style={{ maxWidth: '120px', height: 'auto' }} />
</div>
<div className="card"> <img src={assets.Macbook} alt="" style={{ maxWidth: '400px', height: 'auto' }} /></div>
<div className="card"> <img src={assets.Galaxi} alt="" style={{ maxWidth: '170px', height: 'auto' }} /></div>



    </div>    

    <div className="boxes">
      <div className="box"><img src={assets.Air} alt="" style={{ maxWidth: '400px', height: 'auto' }} /></div>
      <div className="box"><img src={assets.Task} alt="" style={{ maxWidth: '130px', height: 'auto' }}  className='task'/>/</div>
      <div className="box"><img src={assets.js} alt="" style={{ maxWidth: '320px', height: 'auto' }}  className='tasks'/></div>

      </div>
       </div>

       
    </section>
  )
}
