import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/Home.module.css'

const Navbar = () => {
  return ( 
    <menu>
      <div className={style.logo}>
        <Link href='/'>
          <Image src="/logo.png" width='100px' height='100px'></Image>
        </Link>
      </div>
      <nav className={style.links}>
        <Link href="/skills"><a>Skills</a></Link>
        <Link href="/work"><a>Work</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
      </nav>
      <div></div>
    </menu>
   );
}
 
export default Navbar;