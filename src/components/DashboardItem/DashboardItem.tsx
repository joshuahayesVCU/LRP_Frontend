import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

import './DashboardItem.css'

// import pantry from "../../assets/cabellPantry.png";
// import webcamMock from "../../assets/webcam-mock.png";

type item = {
  pantry_exterior_url: string;
  latest_contents_url: string;
  campus: string;
  facility: string;
  floor: string;
  hours: string;
  directions: string;
  date_last_opened: string;
  time_last_opened: string;
  public_key: string
};

const api = "http://ec2-18-227-24-155.us-east-2.compute.amazonaws.com:8080/";


function DashboardItem({ item }: { item: item }) {
  const [showImage, setShowImage] = useState(false);
  const [buttonText, setButtonText] = useState("See The Pantry")

  const handleButtonClick = () => {
    setShowImage(!showImage); // Toggles the state
    setButtonText(showImage ? "See The Pantry" : "See The Food");
  };

  return (
      <Card>
        {showImage ? (
            <Card.Img className="cardImage" src={api + "exteriors/" + item.pantry_exterior_url} alt={"An image of the LRP at " + item.facility} />
          ) : (
            <Card.Img className="cardImage" src={api + "latest/" + item.latest_contents_url} alt="Image of food" />
          )} 
        <Card.Body>
          <Card.Text className="info-container">
            {!showImage ? (
              <ul className="info-list">
                <li id="campus"> {item.campus} </li>
                <li id="facility"> {item.facility} </li>
                <li id="floor"> {item.floor} floor </li>
              </ul>
              ) : (
              <ul className="info-list">
                <li id="campus"> This pantry is located </li>
                <li id="facility"> {item.directions} </li>
                <li id="floor"> {"open: " + item.hours} </li>
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
