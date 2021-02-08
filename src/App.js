import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './App.scss';

function App() {
  const [cardsCount, setCardsCount] = useState(3);
  const getCard = ({ title, content, date }, index) => {
    return (
      <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} className="card-col">
      <Card >
        <Card.Body>
        <p>{date}</p>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>

        </Card.Body>
        <Card.Footer>
          <button type="button" className="card-btn btn btn-outline-primary">READ MORE</button>
        </Card.Footer>
      </Card>
      </Col>
    )
  }
  
  const cards = [
    {
      title: "Love of learning, art keys to a great year for Gwen",
      content: "Nunc nec scelerisque felis. Nam porta eros odio, sit amet pretium lectus dapibus a. Nam in venenatis dolor. Etiam ac fringilla purus. Ut consequat. ",
      date: '30 Sep, 2020'
    },
    {
      title: "Curious mind leads the way for carer Jill",
      content: "Sed gravida tempor justo, accumsan suscipit ex pulvinar et. Mauris mi lorem, tempor sit amet feugiat in, efficitur eu mauris. Nulla facilisi. ",
      date: '23 Sep, 2020'
    },
    {
      title: "Celebrating our volunteers",
      content: "Curabitur ornare nisl quis pharetra tincidunt. Cras congue leo metus, eu accumsan ex vulputate vel. Proin elementum varius sapien, sit amet eleifend nunc iaculis eu eu accumsan ex vulputate.",
      date: '12 Sep, 2020'
    },
    {
      title: "A great birthday present",
      content: "Nulla commodo tincidunt lectus varius semper. Aenean interdum justo sit amet fringilla ullamcorper. Nulla pharetra ipsum nulla, sed ornare orci tincidunt et. ",
      date: '30 Jan, 2020'
    },
    {
      title: "A journey to nowhere",
      content: "Curabitur gravida ligula vitae pretium pellentesque. Curabitur ullamcorper, nibh non tempor laoreet, purus orci posuere tortor.",
      date: '23 Dec, 2020'
    },
    {
      title: "Amazing restaurants",
      content: "Aliquam pharetra arcu a ligula aliquam viverra. Proin sollicitudin nulla eros, eu varius tortor tincidunt vel. Sed vitae metus dolor.",
      date: '30 Nov, 2020'
    }
  ]
  return (
    <Container>
      <div className="header-container">
        <h1 className="display-4 header">Related Articles</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis lectus, lobortis vel eros nec, vulputate sodales quam. Aenean ultricies viverra dui nec ullamcorper. Integer ultricies sodales ex quis gravida. Integer quis risus hendrerit, faucibus libero sit amet, egestas elit. Etiam porta lectus malesuada dolor tempor, et tristique risus pulvinar. </p>
      </div>
      <Row>
        <Col>
          <CardDeck>
            <Row>
            {cards.slice(0, cardsCount).map((card, index) => getCard(card, index))}
            </Row>
          </CardDeck></Col>
      </Row>
      <div className="readmore-btn">
  <button type="button" className="btn btn-outline-danger" 
  onClick={()=> {
    cardsCount === 3 ? setCardsCount(6) : setCardsCount(3);
   }}>{cardsCount === 3 ? 'READ MORE' : 'SHOW LESS'}</button>
      </div>
    </Container>
  );
}

export default App;
