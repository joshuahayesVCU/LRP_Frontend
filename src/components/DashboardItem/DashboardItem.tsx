import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

import './DashboardItem.css'

// import pantry from "../../assets/cabellPantry.png";
import webcamMock from "../../assets/webcam-mock.png";

type pantryJson = {
  name: string;
  facility: string;
  pantry_exterior_url: string;
  latest_contents_url: string;
  campus: string;
  floor: string;
  hours: string;
  directions: string;
  date_last_opened: string;
  time_last_opened: string;
  public_key: string
};

// static link to the server
// const api = "http://ec2-18-227-24-155.us-east-2.compute.amazonaws.com:8080/api/";
const api= "http://localhost/api/";
// <Card.Img className="cardImage" src={api + "latest/" + pantryJson.latest_contents_url} alt="Image of food" />


function DashboardItem({ pantryJson }: { pantryJson: pantryJson}) {
  const [showImage, setShowImage] = useState(false);
  const [buttonText, setButtonText] = useState("See The Pantry")

  const handleButtonClick = () => {
    setShowImage(!showImage); // Toggles the state
    setButtonText(showImage ? "See The Pantry" : "See The Food");
  };

  // not having contorol flow inside the jxs
    // Use different state 
  // setting list outside return might make more legible 

  // info container and list could be their own container
  // don't do until you need to reuse

  // useEffet could be used here, possible hydration issues

  return (
      <Card>
        {showImage ? (
            <Card.Img className="cardImage" src={api + "exteriors/" + pantryJson.pantry_exterior_url} alt={"An image of the LRP at " + pantryJson.facility} />
          ) : (
            <Card.Img className="cardImage" src={webcamMock} alt="Image of food" />
          )} 
        <Card.Body>
          <Card.Text className="info-container">
            {!showImage ? (
              <ul className="info-list">
                <li id="campus"> {pantryJson.campus} </li>
                <li id="facility"> {pantryJson.facility} </li>
                <li id="floor"> {pantryJson.floor} floor </li>
              </ul>
              ) : (
              <ul className="info-list">
                <li id="campus"> This pantry is located </li>
                <li id="facility"> {pantryJson.directions} </li>
                <li id="floor"> {"open: " + pantryJson.hours} </li>
              </ul>
              )} 
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-grid"> 
          <Button onClick={handleButtonClick} variant="primary" className="btn-custom" size="lg" > {buttonText} </Button> 
        </Card.Footer>
      </Card>
  );
}

export default DashboardItem;
