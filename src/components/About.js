import Rainbow from "../hoc/Rainbow";
import UseStateTestHook from "./UseStateTestHook";

const About = (props) => {
    console.log('About props', props);

    return (
        <div>
            <h1>This is About page</h1>
            <UseStateTestHook />
        </div>
    );
}

export default Rainbow(About);
