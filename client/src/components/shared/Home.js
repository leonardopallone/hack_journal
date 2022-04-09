// import { ContainerMain } from '../styles/shared';
// import  {P}  from '../styles/shared';

// import { ContainerMain } from 'react-bootstrap';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import { ContainerMain, MainTitle, Title } from '../styles/shared';
// import {IMG} from '../styles/shared';
import {Row,Col,Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { ContainerHome, CardTitle, CardText} from '../styles/shared';

const Home = () => (
  <>
   <ContainerMain>
   
    <ContainerHome> 

      <MainTitle> Welcome!  </MainTitle>

      
    </ContainerHome>
   <br />
   <br />
   <br />
    <Title> Meet The Team </Title>
   <Row>
    <Col>
    <Card style={{ width: '18rem', marginLeft:'59px', borderRadius:'30px'}}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius:'30px'}} />
  <Card.Body>
    <CardTitle>Austen</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    
  </Card.Body>

</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem', marginLeft:'59px', borderRadius:'30px'}}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius:'30px'}} />
  <Card.Body>
    <CardTitle>Alex</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    
  </Card.Body>
</Card>
     </Col>
     
    <Col>
    <Card style={{ width: '18rem', marginLeft:'59px', borderRadius:'30px'}}>
  <Card.Img variant="top" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{borderRadius:'30px'}} />
  <Card.Body>
    <CardTitle>Leo</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    
  </Card.Body>

</Card>
    </Col>
     
    
  </Row>
    
    </ContainerMain>
   
  </>
)

export default Home;