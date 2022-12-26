import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.navItem} href="/">Home</a>
            <Link className={styles.navItem} href='/about'>About</Link>
            <a className={styles.navItem} href="/projects">Projects</a>
            <Link className={styles.navItem} href='/blog'>Blog</Link>
            <a className={styles.navItem} href="/drawings">Drawings</a>
            <a className={styles.navItem} href="/music">Music I Like</a>
        </div >
    );
}

function dropdown() {
    // document.getElementById('dropdownContent').classList.toggle("show");
    console.log('hovered');
}