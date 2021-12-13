import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Post from './components/Post'
import Posts from './components/Posts'
import License from './components/License';
import ThemedComponent from './components/ThemedComponent';
import  CountryHome  from './components/countries';
import CountryPage from './components/countries/countryPage';
import Calculator from './components/calculator/calculator';
import ContextHookTesting from './components/ContextHookTesting';

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
            </div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/post/:postId" component={Post} />
                <Route path="/posts/" component={Posts} />
                <Route path="/license/" component={License} />
                <Route path="/theme/" component={ThemedComponent} />
                <Route path="/countries/" component={CountryHome} />
                <Route path="/country/:countryCode" component={CountryPage} />
                <Route path="/calculator" component={Calculator} />
                <Route path="/contexthook" component={ContextHookTesting} />
            </Switch>
        </BrowserRouter>
    );
}

export default Home;
