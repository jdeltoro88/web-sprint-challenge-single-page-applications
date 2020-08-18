import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'


const Navigation = () => {



  return (
    <div>
      <Nav tabs>

        <NavItem>
          <Link to={'./'}>
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>

        <NavItem>
          <Link to={'./help'}>
            <NavLink>Help</NavLink>
          </Link>
        </NavItem>

        <NavItem>
          <Link to={'./pizza'}>
            <NavLink>Order</NavLink>
          </Link>
        </NavItem>

      </Nav>
      <div className='lambda-eats'>
        Lambda Pizza
      </div>
    </div >
  )
}


export default Navigation