import Rainbow from "../hoc/Rainbow";

const About = (props) => {
    console.log('About props', props);

    return (
        <div>
            <h1>This is About page</h1>
        </div>
    );
}

export default Rainbow(About);
