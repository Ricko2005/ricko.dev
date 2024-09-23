import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'





export const Header = () => {
  return (
    <section id="header">


    <div className="profession">
      <h1>Developper  <br /><span>Full-stack</span></h1>

      <img src={assets.Vector_187} className='vector' alt="" />
      <div className="flex">
      <h3>Suivez moi</h3>
      <h3>Telecharger mon Cv <ion-icon name="cloud-download-outline"></ion-icon></h3>
      </div>
    </div>

    <div className="images">
    <img src={assets.profil} className='premiere' alt="" />
    <img src={assets.doodle_items} className='second' style={{width: '450px'}} alt="" />
    </div>
  
    </section>
  )
}
