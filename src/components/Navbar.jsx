import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-8 w-20' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/kevin-xandé-martínez-haro-72b921209"><FaLinkedin /></a>
            <a href="https://github.com/Transa1"><FaGithub /></a>
            <a href="https://t.me/ZZReiko"><FaTelegram /></a>
            <a href="https://www.instagram.com/zzkevinmtz/"><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar
