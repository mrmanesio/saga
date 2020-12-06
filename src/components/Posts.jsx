import React from 'react';
import { connect } from 'react-redux'
import Post from './Post'

function Posts({ syncPosts }) {
    if (!syncPosts.length) {
        return <p className="text-center">Постов пока Нет</p>
    }
    return syncPosts.map((post, index) => <Post post = {post} key={index}  />)
}

const mapStateToProps = state => {
    console.log(state);
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null) (Posts)
