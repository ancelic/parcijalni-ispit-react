import React, { Component } from 'react';
import './css/UserInfo.css';

class UserInfo extends Component {
  render() {
    const { avatar_url, name, location, bio } = this.props.gitHubUser;

    return (
      <div className='user-info'>
       <div style={{display: 'inline-flex'}}> <div style={{marginRight: '-30%'}}><img src={avatar_url} alt="GitHub Avatar" width='60%' height='70%'/> </div><div style={{fontSize: '50px', marginTop: '6%'}}>{name}</div></div>
        <p><strong>BIO:</strong> {bio}</p>
        <p><strong>LOCATION: </strong>{location}</p>
      </div>
    );
  }
}

export default UserInfo;