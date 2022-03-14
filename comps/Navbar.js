import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/Home.module.css'

const Navbar = () => {
  return ( 
    <nav>
      <div className={style.logo}>
        <Link href='/'>
          <Image src="/logo.png" width='100px' height='100px'></Image>
        </Link>
      </div>
      <div className={style.links}>
        <Link href="/skills"><a>Skills</a></Link>
        <Link href="/work"><a>Work</a></Link>
        <Link href="/about"><a>About</a></Link>
        <a href='./resume.pdf' download>Resume</a>
      </div>
      <div></div>
    </nav>
   );
}
 
export default Navbar;