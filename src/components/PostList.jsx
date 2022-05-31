import React from "react";
import PostItem from "./PostItem";


const PostList = ({posts, deletePost}) => {


    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                СПИСОК ПОСТОВ
            </h1>
            {posts.map((post, index) => <PostItem deletePost={deletePost} number={index+1} post={post} key={post.id}/>)}
        </div>
    );
}


export default PostList;