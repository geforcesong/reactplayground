import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Post from './components/Post'
import Posts from './components/Posts'

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
            </div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/post/:postId" component={Post} />
            <Route path="/posts/" component={Posts} />
        </BrowserRouter>
    );
}

export default Home;
