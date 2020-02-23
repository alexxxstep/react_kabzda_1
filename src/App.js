import React, { Component } from "react";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://react.semantic-ui.com/logo.png"></img>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

      <div className="content">
        <div>
          <img src="https://theawesomedaily.com/wp-content/uploads/2017/09/beach-background-1-1.jpeg"></img>
        </div>
        <div>
          ava + discr
          <img src=""></img>
        </div>

        <div>
          My Posts
          <div>New post</div>
          <div>
            <div>post1</div>
            <div>post2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
