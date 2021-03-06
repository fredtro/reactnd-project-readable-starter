import React from 'react';
import Nav from '../../nav';
import PostForm from './components/post-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { doFetchPost, doUpdatePost } from '../../../actions/post';
import NotFound from './components/notfound';

class EditPost extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.post;
    if (postId) {
      this.props.doFetchPost(postId);
    }
  }

  handleSubmit = post => {
    this.props.doUpdatePost(post).then((post) => {
      this.props.history.push(`/${post.category}/${post.id}`);
    });
  };

  render() {
    const { post } = this.props;
    return (

      <div>
        <Nav />
        {post && !post.error  ?
          (<div className="container">
          <div className="row">
            <div className="col-sm">
              <PostForm
                post={post}
                onSubmit={post => this.handleSubmit(post)}
              />
            </div>
          </div>
          </div>) : (<NotFound />)}
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => ({ post });
const mapDispatchToProps = { doFetchPost, doUpdatePost };
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditPost)
);
