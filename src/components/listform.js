import React, { Component } from 'react';
import {connect} from 'react-redux';
import Userform from './userform';

class listform extends Component {
  render() {
    return (
    <div>
      <h1>Colaboradores Recientes</h1>
      <Userform />
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(listform);