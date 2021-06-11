const Contact = ({ history }) => {

    function handleClick() {
        history.push('/about')
    }

    return (
        <div>
            <h1>This is Contact page</h1>

            <button onClick={handleClick}>Go to About</button>
        </div>
    );
}

export default Contact;
