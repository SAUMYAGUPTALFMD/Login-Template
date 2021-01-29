import React from "react";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Heading</h1>
    <p className="lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu viverra
      diam. Praesent convallis metus dolor, non consectetur leo finibus et.{" "}
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/"
      >
        A Link
      </a>
    </p>
  </div>
);

export default Hero;