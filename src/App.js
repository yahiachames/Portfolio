import React, { Component } from "react";
import { Layout, Navigation, Drawer, Header, Content } from "react-mdl";
import Main from "./Components/Main";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="icon"
          href="https://www.shareicon.net/download/2016/08/01/640324_logo_512x512.png"
          type="image/gif"
          sizes="16x16"
        />
        <div className="demo-big-content">
          <Layout>
            <Header
              className="Header-color"
              title={
                <Link to="/" className="DevPro-mod">
                  DevPro
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link to="/Projects">Projects</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/Resume">Resume</Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <Link style={{ color: "black" }} to="/" className="DevPro-mod">
                  DevPro
                </Link>
              }
            >
              <Navigation>
                <Link to="/Projects">Projects</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/Resume">Resume</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
