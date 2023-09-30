import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/layout.module.scss';
import Navbar from './navbar';
import { changeMode } from '../lib/toggleMode';

const name = 'Jack Dempsey';
export const siteTitle = 'Jack Dempsey';

export default function Layout({ children, home }) {
    const [color, setColor] = useState('Dark');

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Jack Dempsey's personal website." />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <main className={styles.container}>{children}</main>
            <footer className={styles.footer}>
                <button onClick={() => setColor(changeMode() === 'dark' ? 'Light' : 'Dark')}
                    className={styles.toggleModeButton}>{color} mode</button>
            </footer >
        </>
    );
}

// function draw() {
//     const canvas = document.getElementById("leftCanvas");
//     if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");

//         ctx.fillStyle = "rgb(200, 0, 0)";
//         ctx.fillRect(10, 10, 50, 50);

//         ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//         ctx.fillRect(30, 30, 50, 50);
//     }
// }
