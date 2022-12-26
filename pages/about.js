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
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>About</h2>

            </section>
        </Layout>
    )
}