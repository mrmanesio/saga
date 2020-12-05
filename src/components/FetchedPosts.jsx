import React from 'react';
import Post from './Post';

function FetchedPosts( {posts} ) {
    if (!posts.length) {
        return <button className="btn btn-primary">Загрузить</button>
    }
    return posts.map((post, index) => <Post post = {post} key={index}  />);
}

export default FetchedPosts
