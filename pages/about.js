import Date from '../components/date';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <section className={`${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>About</h2>
                <p>Jack Dempsey is currently a junior at NYU studying computer science and psychology. He is interested in helping people through the intersection of the internet, art, music, and conversation.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <ul className={utilStyles.list}>
                    <li><Link className={utilStyles.listItem} href='https://github.com/anpanring/' target='_blank'>Github</Link></li>
                    <li><Link className={utilStyles.listItem} href='https://www.linkedin.com/in/jack-dempsey-4a37621b2/' target='_blank'>LinkedIn</Link></li>
                    <li><Link className={utilStyles.listItem} href='https://www.instagram.com/jakcdempsey/' target='_blank'>Instagram</Link></li>
                    <li><Link className={utilStyles.listItem} href='https://open.spotify.com/user/anpanring?si=f801ccaca5b94119' target='_blank'>Spotify</Link></li>
                </ul>
            </section>
        </Layout>
    )
}