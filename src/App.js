import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Books from './components/Books';
import Challenges from './components/Challenges';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Blog1 from './components/blogs/Blog1';
import Blog2 from './components/blogs/Blog2';
import Blog5 from './components/blogs/Blog5';
import Blog4 from './components/blogs/Blog4';
import Blog3 from './components/blogs/Blog3';
import ScrollTop from './components/ScrollTop';

function App() {

  return (
    <div className='flex flex-col gap-10'>
    <Header />
    <Main />
    <About />
    <Blogs />
    <Books />
    <Challenges />
    <Contact />
    <Footer />
    {/*
    
     */}
    </div>
  )
}

export default App;
