import React, { useState, useEffect } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    Person: {
      fullName: "pizza berguer",
      bio: "checkin berguer: italien pizza",
      imgSrc:
        "https://lh3.googleusercontent.com/proxy/rBMwS4_NmLcKnau6kWFLT64q9YAIOrvhOxJj-J-V-OcPizOX5qiHOFvzyJzZb4vYhOrs-xf4JoAhPUPeS0zB0SxXyrqcftZfvssXBwCCiBWkpqmJ_AdGl081qvuBT4pEFjkjobe4DXK0_HwfHrIckLBMPyHT",
      profession: "chef",
    },
    Activity: false,
  };
  handleClick = () =>
    this.state.Activity === false
      ? this.setState({ Activity: true })
      : this.setState({ Activity: false });

  render() {
    if (this.state.Activity === true) {
      return (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10vh auto",
              backgroundColor: "black",
              width: "40vw",
              color: "white",
              textAlign: "center",
              borderRadius: "100%",
            }}
          >
            <button onClick={this.handleClick} style={{ marginTop: "5vh" }}>
              hide
            </button>
            <img
              src={this.state.Person.imgSrc}
              alt=""
              style={{ width: "15vw", paddingTop: "5vh" }}
            />
            <p>{this.state.Person.fullName}</p>
            <p>{this.state.Person.bio}</p>
            <p>{this.state.Person.profession}</p>
            <h5>{this.state.counter}</h5>
          </div>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={this.handleClick}
            style={{ margin: "20vh auto", display: "block", fontSize: "50px" }}
          >
            Show 
          </button>
        </>
      );
    }
  }
}

export default App;