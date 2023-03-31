
import { Route, Routes } from 'react-router-dom';
import AddPostPage from '../../pages/AddPostPage';
import AllPostsPage from '../../pages/AllPostsPage';
import Header from '../Header';
import './app.module.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<AllPostsPage/>}/>
        <Route path='/add' element={<AddPostPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
