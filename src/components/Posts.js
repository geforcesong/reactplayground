import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, deleteArticle } from "../redux/";

class Posts extends Component {
  handleDeleteClick = (e) => {
    const id = e.target.getAttribute("postid");
    this.props.deletePost(id);
  };

  handleAddClick = (e) => {
    const id = Math.random();
    this.props.addPost({
      id,
      title: `new added ${id}`,
    });
  };

  render() {
    return (
      <div>
        This is POST list:
        <ul>
          {this.props.posts.map((post) => {
            return (
              <li key={post.id}>
                {post.title}
                <button postid={post.id} onClick={this.handleDeleteClick}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={this.handleAddClick}>Add Post</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    posts: state.article.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deleteArticle(id));
    },
    addPost: (post) => {
      dispatch(addArticle(post));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
