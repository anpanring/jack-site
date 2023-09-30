import Date from '../../components/date';
import Head from 'next/head';
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.scss';

export default function Post({ postData }) {
    return (
        <Layout page="Blog">
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h2 className={utilStyles.headingLg}>{postData.title}</h2>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            </article>
        </Layout >
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}