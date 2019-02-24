import fetch from 'isomorphic-unfetch';
import Layout from '../src/components/Layout';

const Post: any = (props: any) => {
    return (
        <>
            <Layout>
                <h1>{props.show.name}</h1>
                <p>{props.show.summary}</p>
                <img src={props.show.image.medium} />
            </Layout>
        </>
    )
};

Post.getInitialProps = async (context: any) => {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    
    return { show };
}

export default Post;