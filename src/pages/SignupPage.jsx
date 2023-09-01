import React from 'react'
import Header from '../components/Header/Header'
import SignUp from '../components/signup/SignUp'

const SignupPage = () => {
  return (
    <>
     <header><Header/></header>
     <section>
       <SignUp/>
     </section>
    </>
  )
}

export default SignupPage