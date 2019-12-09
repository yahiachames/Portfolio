import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class HiChames extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className='Landing-Grid'>
          <Cell col={12}>
            <img
              src='https://cdn4.iconfinder.com/data/icons/people-avatar-1-2/512/7-512.png'
              alt='avatar'
              className='avatar-img'
            />
            <div className='banner-text'>
              <h1>Full Stack Mern Junior Dev</h1>
              <hr />
              <p>Html/CSS && JavaScript && React JS </p>
              <div className='social-links'>
                {/* freeCodeCamp*/}
                <a
                  href='https://www.freecodecamp.org/chames'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-free-code-camp' aria-hidden='true' />
                </a>
                {/* CodeWars*/}
                <a
                  href='https://www.codewars.com/users/chamesyahia/completed'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-code-fork' aria-hidden='true' />
                </a>
                {/* GitHub*/}
                <a
                  href='https://github.com/yahiachames'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HiChames;
