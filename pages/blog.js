import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.scss';
import Layout from '../components/layout';

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <section className={utilStyles.padding1px}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <div className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <div key={id} className={utilStyles.listItem}>
                            <Link href={`/posts/${id}`} className={utilStyles.postTitle}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}