import React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";


const PostList = ({ posts, deletePost }) => {


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                СПИСОК ПОСТОВ
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="post"
                    >

                        <PostItem deletePost={deletePost} number={index + 1} post={post} key={post.id} />

                    </CSSTransition>
                )}
            </TransitionGroup>
        </div >
    );
}


export default PostList;