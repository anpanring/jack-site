import styles from '../styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            {/* <Image priority src="/images/spinnylogo.gif" height={40} width={40} alt="" /> */}
            <Link className={styles.navItem} href="/">Home</Link>
            <Link className={styles.navItem} href='/about'>About</Link>
            <Link className={styles.navItem} href="/projects">Projects</Link>
            <Link className={styles.navItem} href='/blog'>Blog</Link>
        </div>
    );
}

function dropdown() {
    // document.getElementById('dropdownContent').classList.toggle("show");
    console.log('hovered');
}