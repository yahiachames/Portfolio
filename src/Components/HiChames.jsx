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
              <h1>Research and Development Engineer</h1>
              <hr />
              <p>Web && Mobile && Artificial intelligence </p>
              <div className='social-links'>
                {/* freeCodeCamp*/}
                <a
                  href='https://www.linkedin.com/in/chames-yahia-822647196/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class="fa fa-linkedin-square" ></i>
                  {/* <i className='fa fa-free-code-camp' aria-hidden='true' /> */}
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
