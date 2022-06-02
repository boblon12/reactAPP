
import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { AuthContext } from './components/hooks/context';
import Login from './components/login/Login';
import About from './components/pages/About';
import PostPage from './components/pages/PostPage';
import Posts from './components/pages/Posts';
import Button from './components/UI/Button';
import './syles/App.scss'





function App() {

  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };


  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
     if (localStorage.getItem('auth')) {
       setAuth(true);
     }
  }, [])
  
  const logut = () => {
    setAuth(false);
    localStorage.setItem('auth', 'false ')
  }

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        <BrowserRouter>
          <nav className='navigation'>
            <Button onClick={logut}>Выйти</Button>
            <div className='navigation__item'>
              <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/posts'>
                Posts
              </NavLink>
            </div>
            <div className='navigation__item'>
              <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to='/about'>
                About
              </NavLink>
            </div>
          </nav>
          {
            isAuth ?
              <Routes>
                <Route element={<Posts />} exact path="/posts" />
                <Route path="/posts/:id" element={<PostPage />}></Route>
                <Route element={<About />} path="/about" />
                <Route element={<Posts />} path="/*" />
              </Routes>
              :
              <Routes>
                <Route element={<Login />} exact path='/login' />
                <Route element={<Login />} exact path='/*' />
              </Routes>
          }



        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );

}

export default App;
