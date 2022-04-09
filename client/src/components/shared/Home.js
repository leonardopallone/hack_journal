// import { ContainerMain } from '../styles/shared';
// import  {P}  from '../styles/shared';

// import { ContainerMain } from 'react-bootstrap';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import { ContainerMain, MainTitle, Title } from '../styles/shared';
import {IMG} from '../styles/shared';
import {Row,Col} from 'react-bootstrap';
import { ContainerHome} from '../styles/shared';

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
  <IMG src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'></IMG>
    </Col>
    <Col>
    <IMG src='https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></IMG>
     </Col>
     <Col>
     
    <Col>
  <IMG src='https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></IMG>
    </Col>
     
     </Col>
  </Row>
    
    </ContainerMain>
   
  </>
)

export default Home;