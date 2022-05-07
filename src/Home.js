import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Posts from "./components/Posts";
import License from "./components/License";
import ThemedComponent from "./components/ThemedComponent";
import CountryHome from "./components/countries";
import CountryPage from "./components/countries/countryPage";
import Calculator from "./components/calculator/calculator";
import ContextHookTesting from "./components/ContextHookTesting";
import ParentChildComponent from "./components/ParentChildComponent";
import ReduxContainer from "./components/ReduxTests/ReduxContainer";
import BootstrapTest from "./components/BootstrapComponents/BootstrapTest";
import BudgetWrapper from "./components/BootstrapComponents/BudgetWrapper";
import HigherOrderPage from "./pages/HigherOrderPage";
import RandomTest from "./pages/Tests/RandomTest";
import AprilTest from "./pages/Tests/AprilTest";
import ControlTest from "./pages/Tests/ControlTest";
import TodoList from "./pages/Interviews/TodoList";
import FlippingClock from "./pages/Widgets/FlippingClock";
import GlobalModalUsage from "./pages/Tests/GlobalModalTest";

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
        <Route path="/parentchild" component={ParentChildComponent} />
        <Route path="/redux-test" component={ReduxContainer} />
        <Route path="/bootstrap-test" component={BootstrapTest} />
        <Route path="/budget" component={BudgetWrapper} />
        <Route path="/higherorder" component={HigherOrderPage} />
        <Route path="/pages/random-page" component={RandomTest} />
        <Route path="/pages/april-test-page" component={AprilTest} />
        <Route path="/pages/control-test-page" component={ControlTest} />
        <Route path="/pages/interviews/todo-list" component={TodoList} />
        <Route path="/pages/widget/flipping-clock" component={FlippingClock} />
        <Route path="/pages/global-modal-page" component={GlobalModalUsage} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Home;
