import React, { Component } from 'react'

class Post extends Component {
    myRef = React.createRef();
    childRef = React.createRef();

    state = {
        id: null
    }

    componentDidMount() {
        const id = this.props.match.params.postId;
        this.setState({
            id
        });
    }

    handleClick = () => {
        this.myRef.current.innerText = 'My Ref text';
        this.childRef.current.innerText = 'forworded ref';
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                Hello, post id is: {this.state.id}
                <div>
                    <h3 ref={this.myRef}>Test H3</h3>
                    <Child
                        ref={this.childRef}
                        handleClick={this.handleClick} />
                </div>
            </div>
        )
    }
}

const Child = React.forwardRef((props, ref) => {
    return (<>
        <span ref={ref}>this is child</span>
        <button onClick={() => props.handleClick()}>Change</button>
    </>);
});

export default Post;