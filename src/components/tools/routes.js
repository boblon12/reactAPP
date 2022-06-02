import Login from "../login/Login";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const publicRoute = [
    {path: '/login', element: Login, exact: true}
]

export const privateRoute = [
    {path: '/posts', element: Posts, exact: true},
    {path: '/posts/:id', element: PostPage, exact: false},
    {path: '/about', element: About, exact: true}
]