import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

export const About = () => {
  return (
   <section id="about">


<div className="About_me">
    <img src={assets.Vector_141} alt="" />
<h1>About <span>me</span></h1>
<img src={assets.lightbulbe} alt=""  className='ampoule'/>
<p>Développement Web (2024-2025)
<li>École Internationale de Graphisme du Bénin (EIG Bénin)</li> <br /><br />

En tant que développeur Full-stack <br />je me spécialise dans le développement web <br />et l'architecture logicielle. Depuis janvier 2024, <br /> j'ai travaillé sur divers projets, notamment la conception d'un site <br /> de vente de tickets pour un événement de mode, la création d'un site  <br />pour un restaurant, ainsi que le développement d'un quiz interactif avec <br /> React.js. <br /> <br />  <br />

Mes compétences incluent la maîtrise des langages de programmation, <br /> la gestion de bases de données relationnelles,ainsi que la résolution <br /> de problèmes complexes liés au développement web. <br /> Je suis également axé sur la sécurité et la protection des données,<br /> assurant des solutions robustes et sécurisées pour les applications que <br /> je développe. <br /><br />

En dehors de mon travail, je suis passionné par le codage créatif, <br /> explorant des projets personnels pour repousser les limites de la programmation. <br /> J'apprécie également une grande variété de genres musicaux et suis un fervent amateur <br /> de jeux vidéo  et de séries, ce qui enrichit ma créativité et ma perspective <br /> dans le développement web.

</p>
<img src={assets.Vector_189} alt="" />
</div>


<div className="imagess">
<img src={assets.Group_62} className='about_piture' alt="" />
<img src={assets.doodle_items} className='second' style={{width: '500px'}} alt="" />

</div>

   </section>
  )
}
