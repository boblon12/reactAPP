import '../syles/App.scss';
import Button from "./UI/Button";
import { Link, NavLink, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const router = createBrowserHistory({ window });



const PostItem = ({ post, ...props }) => {



    return (
        <div className="post__item">
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            <div className="bttns">
                <Button onClick={() => props.deletePost(post)}>Удалить пост</Button>
                <Button><Link to={`/posts/${post.id}`} style={{ textDecoration: 0, visited: 0}}>Открыть</Link></Button>
            </div>
        </div>
    );
}


export default PostItem;