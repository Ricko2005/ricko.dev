import React from 'react'
import { Header } from '../../components/Header/Header'
import { About } from '../../components/About/About'
import { Technologies } from '../../components/Technologies/Technologies'
import { Project } from '../../components/Projects/Project'
import { Contact } from '../../components/Contact/Contact'
import { Footer } from '../../components/Footer/Footer'
import { Desactive } from '../../components/Desactive/Desactive'

export const Home = () => {
  return<>
  <Header/>
  <About/>
  <Technologies/>
  <Project/>
  <Contact/>
  <Footer/>
  <Desactive/>
  </>

  
}

