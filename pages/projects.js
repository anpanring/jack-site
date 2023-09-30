import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.scss';

export default function Projects() {
    return (
        <Layout page="Projects">
            <Head>
                <title>Projects</title>
            </Head>
            <section className={utilStyles.padding1px}>
                <h2 className={utilStyles.headingLg}>Projects</h2>
            </section>
        </Layout>
    )
}