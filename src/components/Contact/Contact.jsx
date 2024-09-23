import React from 'react'
import "./Contact.css"
import { assets } from '../../assets/assets'
export const Contact = () => {
  return (
<section className="contact">


<div className="left">
<h1>Avez vous un project en <span>tête?</span></h1>
<img src={assets.Group_2372} alt="" />
<img src={assets.Vector_186} className='vectors' alt="" />
</div>


<div className="right">
    <img src={assets.keyboard} alt=""  className='keyboard'/>
<form action="">

<div className="All">

<div className="div">
    <label htmlFor="">Nom</label>
<input type="text" placeholder='Enter votre nom' required />

</div>

<div className="mail">
    <label htmlFor="">Adresse-mail</label>
<input type="email" name="" id="" placeholder='Entrer votre mail' required /><br />
</div>



</div>

<div className="area">
    <label htmlFor="">Votre message</label>
<textarea name="" id="" rows={15} cols={70} required></textarea>

</div>
<button type='submit'> Envoyer  votre message  <img src={assets.send} alt="" placeholder="Entrer votre message" width={20} /></button>
</form>
<img src={assets.mail} alt=""  className='maile'/>
</div>

</section>
  )
}
