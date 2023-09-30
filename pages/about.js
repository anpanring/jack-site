import Date from '../components/date';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.scss';
import styles from '../styles/about.module.scss';
import Layout from '../components/layout';
import babyPic from '../public/images/baby.jpeg';

export default function About() {
    return (
        <Layout page="About">
            <Head>
                <title>About</title>
            </Head>
            <section className={`${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Who?</h2>
                <p>Jack Dempsey is currently a senior at NYU studying computer science and psychology. He would like to use technology and design to help humans however he can.</p>
            </section>
            <section className={`${utilStyles.padding1px} ${styles.socials}`}>
                <div>
                    <h3 className={utilStyles.headingMd}>Socials</h3>
                    <div className={styles.list}>
                        <Link className={styles.socialLink} href='https://github.com/anpanring/' target='_blank'>Github</Link>
                        <Link className={styles.socialLink} href='https://www.linkedin.com/in/jack-dempsey-4a37621b2/' target='_blank'>LinkedIn</Link>
                        <Link className={styles.socialLink} href='https://www.instagram.com/jakcdempsey/' target='_blank'>Instagram</Link>
                        <Link className={styles.socialLink} href='https://open.spotify.com/user/anpanring?si=f801ccaca5b94119' target='_blank'>Spotify</Link>
                    </div>
                </div>
                <Image src={babyPic} className={styles.baby} width={160} height={120} alt="picture of young Jack" placeholder="blur"></Image>
            </section>
            <p>You can also find me at the alias <strong>anpankid</strong> on various sites.</p>
        </Layout >
    )
}