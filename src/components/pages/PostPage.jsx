import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Service from '../API/Service';
import { useFetchng } from '../hooks/useFetching';
import Loader from '../loader/Loader';


function PostPage() {
  const [info, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const [fetchingUser, isLoaded, error] = useFetchng(async () => {
    const response = await Service.getUser(id)
    setData(response.data);
  })


  useEffect(() => {
    fetchingUser(id);
    fetchingComments(id)
  }, [id])


  const [fetchingComments, commentsisLoaded] = useFetchng(async () => {
    const response = await Service.getCommentsById(id)
    setComments(response.data);
  })

  console.log(comments);
  
  return (
    <div>
      {isLoaded ? <Loader /> :
        <>
          <h1> Айди пользователя {id} </h1>
          <br />
          <h3>Название статьи - {info.title}</h3>
          <br />
          <p>{info.body}</p>
          <br />
        </>
      }
      <h1>Комментарии </h1>
      {commentsisLoaded ? <Loader /> :
      <div>
        {comments.map(comm => 
          <div style={{marginTop: 10}}>
            <h5>{comm.email}</h5>
            <h6>{comm.body}</h6>
          </div>
          )}
      </div>
      }
    </div>
  )
}

export default PostPage