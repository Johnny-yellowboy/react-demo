import $css from './users.module.scss'
import React, { Component } from 'react';

const data = ['hello','hi']
class users extends Component {
  render() {
    return (
      <div className={$css.user}>
        <ul className={$css.userlist}>
          {
            data.map((item,index) => {
             return  <li key={index}>{ item }</li>
            })
          }
        </ul>
        <h3>users</h3>
        <input type="text" />
        <input type="button" value="按钮"/>
      </div>
    );
  }
}

export default users;