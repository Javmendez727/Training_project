import React, { Component } from 'react';
import {connect} from 'react-redux';


class Userform extends Component {
  render() {
  return (
    <div>
        
      <h2>{this.props.post.name}</h2>
      <h2>{this.props.post.lastname}</h2>
      <h2>{this.props.post.email}</h2>
      <h2>{this.props.post.amount}</h2>

    </div>
  );
 }
 
}

const mapStateToProps = (state) => {
    return {
        post: state
    }
}
const connector = connect(mapStateToProps);

export default connector(Userform);