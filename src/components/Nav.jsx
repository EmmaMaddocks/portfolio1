import { HashLink } from 'react-router-hash-link';


const Nav = () => {


    return (
  <nav className='nav'>
    <ul className='nav-links'>
      <li><HashLink smooth to="#about">About</HashLink></li>
      <li><HashLink smooth to="#experience">Experience</HashLink></li>
      <li><HashLink smooth to="#projects">Projects</HashLink></li>
      <li><HashLink smooth to="#contact">Contact</HashLink></li>
      </ul>
  </nav>
    )
}

export default Nav