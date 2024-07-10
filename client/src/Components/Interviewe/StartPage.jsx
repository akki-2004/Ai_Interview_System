import React , { useEffect }from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Layout/Header";
// import NavigationBar from "./Navbar/Header";

export default function StartPage() {
    useEffect(() => {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
          document.documentElement.msRequestFullscreen();
        }
      }, []);
  const handleAskQuestions = () => {
    alert('Interviewer: What is your name?');
  };
  const handleAskQuestionAnswer = () => {
    alert('Thank You');
  };
  const handleAskQuestion = () => {
    alert('Please answer');
  };

  return (
    <>
    <Header/>
      {/* <NavigationBar/> */}
      <Container fluid className="bg-white pb-5" style={{  position:"relative",top:"80px" , height:"80vh" , width:"80vw" , borderRadius:"50px"}}>
     
      <Row className="justify-content-center mt-5">
        <Col md="auto" className="text-center" style={{ position:"relative",top:"0px",left:"90px"}}>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a7341d17b9dc3a54c6a45f4b80f61c11432730d85b5e1741cef2a662a425bfb?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=2000"
            className="img-fluid"
            style={{ width: '600px' ,height:"600px"}}
          />
        </Col>
        <Col md="auto" className="d-flex align-items-center">
          <Card className="p-3" style={{ border: '1px solid black', backgroundColor: '#f8f9fa', maxWidth: '300px' }}>
            <Card.Body className="text-center">
              <Card.Text className="font-weight-bold" style={{ fontSize: '1.5rem',left:"70px" }}>Hi John Doe!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}
