import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
class Contactus extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            {" "}
            <h2>Chameseddine Yahia</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="icon-img"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
             My name is chameseddine yahia, i'm 22 years old, nice to meet you! {" "}
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      border: "solid"
                    }}
                    className="listContent"
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +21650652481
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton"
                    }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    yahiachames@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton"
                    }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    linkedin.com/in/chames-yahia-822647196
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contactus;
