import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions';

class Posts extends Component {

    handleClick = (e) => {
        const id = e.target.getAttribute('postid');
        console.log(e);
        this.props.deletePost(id);
    }

    addPost = (e) => {
        const id = Math.random();
        this.props.addPost({
            id,
            title: 'new added'
        })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                This is POST list:
                <ul>
                    {
                        this.props.posts.map(post => {
                            return (<li key={post.id}>
                                {post.title}
                                <button postid={post.id} onClick={this.handleClick}>delete</button>
                            </li>)
                        })
                    }
                </ul>
                <button onClick={this.addPost}>Add Post</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({ type: 'DELETE_POST', id });
        },
        addPost: (post) => {
            dispatch(addPost(post));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);