
import { Route, Routes } from 'react-router-dom';
import AddPostPage from '../../pages/AddPostPage';
import AllPostsPage from '../../pages/AllPostsPage';
import FullPostPage from '../../pages/FullPostPage';
import Header from '../Header';
import './app.module.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<AllPostsPage/>}/>
        <Route path='/add' element={<AddPostPage/>}/>
        <Route path='/post/:id' element={<FullPostPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
