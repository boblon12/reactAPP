
import Button from "./UI/Button";


const PostItem = ({post, ...props}) => {

 

    return (
            <div className="post__item">
                <strong>{props.number}. {post.title}</strong>
                <div>{post.body}</div>
                <div className="bttns">
                    <Button onClick={() => props.deletePost(post)}>Удалить пост</Button>
                </div>
            </div>
    );
}


export default PostItem;