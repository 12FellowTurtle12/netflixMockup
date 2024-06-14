import React from 'react';
import homePageBackgroundImage from './assets/images/homePageBackgroundImage.jpg';
import promotion1 from './assets/images/promotion1.gif';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import "./App.css";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer/Footer';

const StyledEmailInput = styled(Form.Control)`
  height: 40px; /* Adjust the height as needed */
  font-size: 16px; /* Adjust the font size as needed */
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const StyledHeader = styled.header`
  background-image: url(${homePageBackgroundImage});
  background-size: 100% auto;
  background-position: center;
  height: 50vh;
  width: 100vw;
  box-sizing: border-box;
  border: none;
  position: absolute; /* Add this line */
  top: 0; /* Add this line */
  left: 0; /* Add this line */
`;

const StyledContainer = styled(Container)`
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;
const StyledSectionFirst = styled.section`
  margin-top: 105vh;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20;
  h2, p {
    margin: 0; /* Add this line */
  }
`;

const StyledSection = styled.section`
  border-bottom: 1px solid #ccc;
  padding-bottom: 20;
  margin-bottom: 20; /* Add this line */
  h2, p {
    margin: 0;
  }
`;



export const Ul = styled.ul`
  list-style: none;
`;



const Home = () => {
  const history = useHistory();

const handleGetStarted = () => {
    history.push('/login');
  };

  return (
    <div>
      <StyledHeader style={{ backgroundImage: `url(${homePageBackgroundImage})` }}>
        <StyledContainer>
          <Row>
            <Col>
              <h1>Unlimited movies, TV shows, and more</h1>
              <p>Watch anywhere. Cancel anytime. Ready to watch? Enter your email to create or restart your membership.</p>
              <Form>
            <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
              <StyledEmailInput type="email" placeholder="Email address" style={{ flex: 1, maxWidth: 250 }} />
              <Button variant="danger" style={{ backgroundColor: 'red' }} onClick={handleGetStarted}>Get Started</Button>
            </Form.Group>
          </Form>


            </Col>
          </Row>
        </StyledContainer>
      </StyledHeader>

      
      <StyledSectionFirst>
    <Container>
        <Row>
            <Col xs={12}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'left', marginRight: '20px' }}>
                        <h2>Watch everywhere</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div>
                        <img src={promotion1} alt="Promotional Image" style={{ width: '50%' }} />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</StyledSectionFirst>

<StyledSection style={{ marginBottom: '20px' }}>
    <Container>
        <Row>
            <Col xs={12}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div>
                        <img src={promotion1} alt="Promotional Image" style={{ width: '50%' }} />
                    </div>
                    <div style={{ textAlign: 'left', marginLeft: '20px' }}>
                        <h2>Subscribe once, watch everywhere</h2>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</StyledSection>

<StyledSection style={{ marginBottom: '20px' }}>
    <Container>
        <Row>
            <Col xs={12}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{ textAlign: 'left', marginRight: '20px' }}>
                        <h2>Download your shows to watch offline</h2>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div>
                        <img src={promotion1} alt="Promotional Image" style={{ width: '50%' }} />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</StyledSection>

    </div>
    
  );
};

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
      <Footer />
    </Router>
);
};

export default App;
