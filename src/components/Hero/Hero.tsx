import Stack from "react-bootstrap/Stack";

import "./Hero.css"

function Hero () {

  return (
    <div className="hero-container">
      <Stack gap={3} className="col-md-5 mx-auto" id="custom-stack">
        <div className="header">
          <h1> Free Food Pantries. </h1>
        </div>
        <div className="subtext">
          <h3> 15 locations across both VCU campuses. </h3> 
          <h3> Help youself to anything. </h3>
        </div>
      </Stack>
    </div>
)};

export default Hero;


