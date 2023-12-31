import React from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import Numbers from '../Numbers/Numbers'
import Content from '../Content/Content'
import AnotherContent from '../AnotherContent/AnotherContent'
import Background from '../Background/Background'
import ExploreFoods from '../ExploreFoods/ExploreFoods'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <>
    <NavBar/>
    <Header />
    <Numbers />
    <Content/>
    <AnotherContent />
    <Background />
    <ExploreFoods />
    <FAQ />
    <Footer />
    </>
  )
}
