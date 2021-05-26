import Layout from "../composents/Layout"
import React from 'react'
import Post from "../composents/Post"
import {getAllPostsData} from "../lib/posts"

const Blog = ({posts}) => {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts && posts.map(
                    (post) => <Post key={post.id} post={post}></Post>
                )}
            </ul>
        </Layout>
    );
}

export default Blog

export async function getStaticProps(){
    const posts = await getAllPostsData();
    return {
        props: {posts},
    }
}
