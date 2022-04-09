import { Link } from 'react-router-dom';
import { Row, Col, Container, Accordion } from 'react-bootstrap';


const Home = () => (
  <>
    <h1>Home Page</h1>
  

<h3>FAQ</h3>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Why keeping a journal is important</Accordion.Header>
    <Accordion.Body>
      It's important to remember stuff
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Why you should set goals</Accordion.Header>
    <Accordion.Body>
      You don't want to be a loser like me
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Why vision boards are cool</Accordion.Header>
    <Accordion.Body>
      Pictures are fun
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</>
)

export default Home;