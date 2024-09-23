import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
   <section className="footer">

    <div className="foot">
    <div className="nav">
<h1>Home <ion-icon name="home-outline"></ion-icon></h1>
<h1>About <ion-icon name="person-outline"></ion-icon></h1>
<h1>Contact<ion-icon name="call-outline"></ion-icon></h1>

</div>

<div className="sociaux">
<a href="https://www.linkedin.com/feed/"><ion-icon  name="logo-linkedin" className ="animate__bounce"></ion-icon></a>
<a href="https://github.com/"><ion-icon name="logo-github" ></ion-icon></a>
<a href="https://www.facebook.com/junior.dekhalifa.1?locale=fr_FR"><ion-icon name="logo-facebook" ></ion-icon></a>
<a href="https://wa.me/+22962880263"><ion-icon name="logo-whatsapp" ></ion-icon></a>
</div>

</div>
<div className="terme">
    <h2>romarictolofon7@gmail.com  &copy; 2024 </h2>

    
</div>

   </section>
  )
}
