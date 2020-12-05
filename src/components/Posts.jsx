import React from 'react';
import Post from './Post'

function Posts({posts}) {
    if (!posts.length) {
        return <p className="text-center">Постов пока Нет</p>
    }
    return posts.map((post, index) => <Post post = {post} key={index}  />)
}

export default Posts
