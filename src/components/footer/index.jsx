import { Link } from 'react-router-dom'
import { FaTelegramPlane,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare } from 'react-icons/fa'
import classNames from 'classnames'
import styles from './footer.module.scss'

function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className={classNames('container',styles.footer)}>
      <Link to='/' className={styles.footer__logo}><span>•</span> NIKE <span>•</span></Link>
      <p className={styles.footer__date}>&copy; All rights, it is reserved {date}</p>
      <div className={styles.footer__social}>
        <Link to='#!' target='_blank'><FaTelegramPlane /></Link>
        <Link to='#!' target='_blank'><FaFacebookSquare /></Link>
        <Link to='#!' target='_blank'><FaTwitterSquare /></Link>
        <Link to='#!' target='_blank'><FaInstagramSquare /></Link>
      </div>
    </footer>
  )
}

export default Footer