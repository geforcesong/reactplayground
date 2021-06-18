import Rainbow from "../hoc/Rainbow";
import UseStateTestHook from "./UseStateTestHook";
import useFetch from "../hooks/useFetch";

const About = (props) => {
    console.log('About props', props);
    const { data, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/users')


    return (
        <div>
            <h1>This is About page</h1>
            <UseStateTestHook />

            {data && data.map((d)=>{
                return (<p key={d.id}>{d.name}</p>)
            })}
        </div>
    );
}

export default Rainbow(About);
