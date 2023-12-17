import React from 'react'
import Nav from '../components/Nav'
import Summary from '../components/Summary'

const Header = (props) => {
  return (
    <section>
        <Nav showCartHandler = {props.showCartHandler} />
        <Summary />
    </section>
  )
}

export default Header