import styles from '../styles/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const pages = ["Home", "About", "Projects", "Blog"];

export default function Navbar({ page }) {
    return (
        <div className={styles.navbar}>
            <div className={styles.linkGroup}>
                {/* <Image priority src="/images/spinnylogo.gif" height={40} width={40} alt="" /> */}
                {pages.map((pageLink) => {
                    return page === pageLink ? <NavItem page={pageLink} selected key={pageLink} /> : <NavItem page={pageLink} key={pageLink} />
                })}
            </div>
        </div>
    );
}

function NavItem({ page, selected }) {
    const href = page === "Home" ? "/" : `/${page.toLowerCase()}`;
    return selected
        ? <Link className={`${styles.navItem} ${styles.selected}`} href={href}>{page}</Link>
        : <Link className={styles.navItem} href={href}>{page}</Link>
}

function dropdown() {
    // document.getElementById('dropdownContent').classList.toggle("show");
    console.log('hovered');
}

// selected page
// store selected page in state?
