import React from 'react'
import img from '../img/maliLogo.png';

function Zaglavlje() {
  return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">IT oprema
            <img src={img} width="30" height="30" className="d-inline-block align-top" alt="" />
        </a>
</nav>
  )
}

export default Zaglavlje
