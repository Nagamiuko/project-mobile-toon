import React from 'react'
import Header from '../components/Header/Header'
import ListToon from '../components/contents/ListToon/ListToon'
import './Home.css'
const HomePage = () => {
  return (
    <div>
       <header>
          <Header/>
       </header>
       <section>
          <ListToon/>
       </section>
       <footer>

       </footer>
    </div>
  )
}

export default HomePage