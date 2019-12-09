import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  CardText
} from "react-mdl";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <div className='Projects'>
          {/*project1*/}
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/1200/1*jDIj2SKAE-Bp32owLoHDjw.png) center / cover"
              }}
            >
              Project React #1
            </CardTitle>
            <CardText>
              The purpose of a paragraph is to express a speaker’s thoughts on a
              particular point in a clear way that is unique and specific to
              that paragraph. In other words,
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {" "}
              <a href='https://github.com/yahiachames/ecommerce'>
                {" "}
                <IconButton name='share'> </IconButton>{" "}
              </a>{" "}
            </CardMenu>
          </Card>

          {/*project2*/}
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/1200/1*jDIj2SKAE-Bp32owLoHDjw.png) center / cover"
              }}
            >
              Project React #2
            </CardTitle>
            <CardText>
              The purpose of a paragraph is to express a speaker’s thoughts on a
              particular point in a clear way that is unique and specific to
              that paragraph. In other words,
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {" "}
              <a href='https://github.com/yahiachames/Elearning'>
                {" "}
                <IconButton name='share'> </IconButton>{" "}
              </a>
            </CardMenu>
          </Card>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Home;
