import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Projects extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/projects/" + projects.image;

      return (
        <div key={id++} className="projects-item">
          <div className="item-wrap" style={{ marginTop: "5px", borderRadius: "4px" }}>
            <a href={projects.url} target="blank"><img alt={projects.title} src={projectImage} width="60%" style={{ marginTop: "5px", borderRadius: "4px" }} /></a>
            <div style={{ textAlign: "center", margin: "2px" }}>
              <span style={{ fontWeight: "bolder" }}>{projects.title}</span>
              <br></br>
              <p>{projects.description}</p>
              </div>
              <br></br>
          </div>
        </div>
      );
    });

    return (
      <section id="projects">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed text-center">
              <h1>Check Out Some of My Projects!</h1>

              <div
                id="projects-wrapper"
                className="bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Projects;
