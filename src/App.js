
import { useState, useMemo } from 'react';
import FindPost from './components/findPost/findPost';
import Form from './components/Form';
import PostList from './components/PostList';
import MySelect from './components/select/MySelect';
import './syles/App.css'

function App() {

  const [posts, setPosts] = useState([{ id: 1, title: 'title', body: 'value' }]);
  const [sortSelected, setSelectedSort] = useState('');
  const [found, setfoundPosts] = useState('');

  const sortPosts = (selector) => {
    setSelectedSort(selector)
    console.log(sortSelected)
  }

  const sortedPosts = useMemo( () => {
    console.log('Use MEmo')
    if (sortSelected) {
      return[...posts].sort((a, b) => a[sortSelected].localeCompare(b[sortSelected]))
    }
    else
      return posts;
  }, [sortSelected, posts])



  const findPost = (post) => {
    if (post === '') { setfoundPosts('') }
    else setfoundPosts([...posts].filter(oldPost => oldPost.title.startsWith(post) || oldPost.body.startsWith(post)))
  }


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }



  console.log('delete')

  return (
    <div className='App'>
      <Form create={createPost} />
      <hr className='hr-line' />
      <MySelect defaltvalue={'Сортировка по'} options={[
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' }
      ]} onChangeValue={sortPosts} value={sortSelected} />
      <FindPost findPost={findPost} />
      <PostList deletePost={deletePost} posts={sortedPosts} /> : <h1>Поля пустые</h1>) : <PostList deletePost={deletePost} posts={found} />}
    </div>
  );
}

export default App;
