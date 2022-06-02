
import { useState, useEffect } from 'react';
import Service from '../API/Service';
import FindPost from '../findPost/findPost'
import Form from '../Form'
import { useSortedPost } from '../hooks/sortedPosts';
import { useFetchng } from '../hooks/useFetching';
import Loader from '../loader/Loader';
import MyModal from '../Modal/MyModal';
import PostList from '../PostList';
import MySelect from '../select/MySelect';
import { pageCount, pagesArray } from '../tools/PageCount';
import Button from '../UI/Button';
import '../../syles/App.scss'




function Posts() {


  //Тестирую useState
  const [posts, setPosts] = useState([{ id: 1, title: 'title', body: 'value' }]);
  const [sortSelected, setSelectedSort] = useState('');
  const [found, setfoundPosts] = useState('');
  const [visible, setVisible] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setpage] = useState(1)
  const [totalPages, settotalPages] = useState(0);

  

  let pageArray = pagesArray(totalPages);
  

  //Кастомный хук  c использлванием  useMemo для улучшения эффективности работы 
  // при большои кол-ве постов:) 
  const sortedPosts = useSortedPost(sortSelected, posts);
  const [fetching, isLoaded, error] = useFetchng( async() => {

    const response = await Service.getPosts(limit, page);
    const totalCount = response.headers['x-total-count']
    settotalPages(pageCount(totalCount, limit))
    setPosts(response.data);
  })  


  const sortPosts = (selector) => {
    setSelectedSort(selector)
  }

  const findPost = (post) => {
    if (post === '') { setfoundPosts('') }
    else setfoundPosts([...posts].filter(oldPost => oldPost.title.startsWith(post) || oldPost.body.startsWith(post)))
  }

  const createPost = (newPost) => {
    setPosts([newPost,...posts]);
    setVisible(false);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }

  const setInvisible = () => {
    setVisible(false);
  }

  useEffect(() => {
    fetching();
  }, [page])
  

  // Async requests
  

  return (
    <div className='App'>
      <Button style={{ margin: 10, width: 700 }} onClick={() => setVisible(true)}>Добавить пост</Button>
      <MyModal visible={visible} setInvisible={setInvisible}>
        <Form create={createPost} />
      </MyModal>
      <hr className='hr-line' />
      <MySelect defaltvalue={'Сортировка по'} options={[
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' }
      ]} onChangeValue={sortPosts} value={sortSelected} />
      <FindPost findPost={findPost} />
      {isLoaded ?
        <Loader /> :
        ((found.length === 0) ? ((posts.length !== 0) ? <PostList className='PostList' deletePost={deletePost} posts={sortedPosts} /> : <h1>Поля пустые</h1>) : <PostList deletePost={deletePost} posts={found} />)
      }
      <div className='Paginator'>
        {pageArray.map( (e) => <span key = {e} onClick={() => setpage(e)} className={page === e ? 'page__active' : 'page'}>{e}</span>)}
      </div>
      
    </div>
  );
}

export default Posts;
