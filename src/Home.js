import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
            </div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </BrowserRouter>
    );
}

export default Home;
