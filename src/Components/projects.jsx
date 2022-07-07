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
      activeTab: 0,
      data : [
        {
          backgroundImage : "https://cdn-images-1.medium.com/max/1200/1*jDIj2SKAE-Bp32owLoHDjw.png",
          title : "Mobile charity app",
          description : "this app helps creating a community that serve the poor prople , you can take a photo and locate a poor zone and other people will come help",
          uri : "https://github.com/yahiachames/aawen"
        } , 
        {
                   backgroundImage : "https://cdn-images-1.medium.com/max/1200/1*jDIj2SKAE-Bp32owLoHDjw.png",
          title : "Web E-learning application",
          description : "this app connect students with teachers to evaluate their performance ",
          uri : "https://github.com/yahiachames/Elearning"
        }, {
           backgroundImage : "https://imageio.forbes.com/specials-images/dam/imageserve/1096227330/0x0.jpg?format=jpg&width=1200",
          title : "Intelligent character recognition",
          description : "This algorithm segments the characters and recognizes them independently of the handwriting with an accuracy of 55%.",
          uri : "https://github.com/yahiachames/Elearning"
        }
      ]
    };
  }

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <div className='Projects'>
          {/*project1*/}
         { this.state.data.map(el => (
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                `url(${el.backgroundImage}) center / cover`
                 
              }}
            >
             {el.title}
            </CardTitle>
            <CardText>
              {el.description}
            </CardText>
            <CardActions border>
              <Button colored onClick={(e) => {
                  e.preventDefault();
      window.location.href=el.uri;
              }} >GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
     
        
              
            </CardMenu>
          </Card>
         )) }

          {/*project2*/}
     
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
          <Tab>All</Tab>
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
