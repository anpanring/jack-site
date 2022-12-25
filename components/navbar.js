import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.navItem} href="/">Home</a>
            <a className={styles.navItem} href="/about">About</a>
            <a className={styles.navItem} href="/projects">Projects</a>
            <a className={styles.navItem} href="/blog">Blog</a>
            <a className={styles.navItem} href="/drawings">Drawings</a>
            <a className={styles.navItem} href="/music">Music I Like</a>
        </div >
    );
}

function dropdown() {
    // document.getElementById('dropdownContent').classList.toggle("show");
    console.log('hovered');
}