
const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'green', 'black', 'pink', 'orange'];
    const color = colors[Math.floor(Math.random() * 5)];
    const className = `text-${color}`;

    return (props) => {
        const newProps = {...props};
        newProps.abc = 'Hello world!';
        console.log('Rainbow Props:', props);
        return (
            <div className={className} >
                <WrappedComponent {...newProps} />
            </div>
        )
    }
}


export default Rainbow;