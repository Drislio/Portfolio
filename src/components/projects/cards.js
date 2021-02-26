import {Card, Button} from 'react-bootstrap'
import ProjectImg from "../../assets/WeatherApp.webp"

const Cards = () =>{
    return(
      <div className="cards">
    <Card style={{ width: '22rem'}}>
  <Card.Img variant="top" src={ProjectImg}/>
  <Card.Body>
    <Card.Title>Weather App</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button id="btnGetcv" variant="outline-dark">View More</Button>
  </Card.Body>
</Card>
</div>
    )
}
export default Cards