import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

import './DashboardItem.css'

import pantry from "../../assets/cabellPantry.png";
import webcamMock from "../../assets/webcam-mock.png";

type item = {
  name: string;
  info: string;
  imageUrl: string;
  campus: string;
  facility: string;
  floor: string;
  directions: string;
};

function DashboardItem({ item }: { item: item }) {
  const [showImage, setShowImage] = useState(false);
  const [buttonText, setButtonText] = useState("See The Pantry")

  const handleButtonClick = () => {
    setShowImage(!showImage); // Toggles the state
    setButtonText(showImage ? "See The Pantry" : "See The Food");
  }
  ;

  return (
      <Card>
        {showImage ? (
            <Card.Img className="cardImage" src={pantry} alt={item.name} />
          ) : (
            <Card.Img className="cardImage" src={webcamMock} alt="Image of food" />
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
                <li id="facility"> At the top of the steps </li>
                <li id="floor"> Accessibile from 8-9 </li>
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
