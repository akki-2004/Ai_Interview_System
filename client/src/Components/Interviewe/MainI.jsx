import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import NavigationBar from '../Navbar/Header'; // Ensure the correct path to NavigationBar component
// import { Button } from 'react-bootstrap';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Header from '../Layout/Header';



export default function Dashboard() {
  const navigate = useNavigate();
  const user = {
    name: "John Doe",
    interviewDetails: "Software Engineer Interview",
    interviewTime: "June 30, 2024 at 10:00 AM"
  };

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn');
  //   if (!isLoggedIn) {
  //     navigate('/');
  //   }
  // }, [navigate]);
  const jlaehnfi={
    backgroundColor:"#3d52a0",
    color:"white"
  }
  return (
    <div>
      {/* <NavigationBar /> */}
      <Header/>
      <Container fluid className="bg-white pb-5">
     
     <Container className="mt-5">
       <Row className="align-items-center">
         <Col md={6} className="d-flex flex-column align-items-start px-4">
           <h1 className="display-1 fw-bold text-dark">
             Hi <span style={{color:"#1560BD"}}>{user.name}!</span>
             <br />
             Let's start
             <br />
             the Interview.
           </h1>
           <Link to="/interviewe/instructions"><button style={jlaehnfi} className="afs mt-4 px-5 py-2 rounded-pill">Start</button></Link>
         </Col>
         <Col md={6}>
           <Image
             loading="lazy"
             src="https://cdn.builder.io/api/v1/image/assets/TEMP/57958f580e05ee2c48a2760ee16fe6d9ed256955ed98c7069f3667ee62c64e1a?apiKey=2a2e623823b0415fbd05deed2eac8bf5&width=800"
             fluid
           />
         </Col>
       </Row>
     </Container>
   </Container>
    </div>
   
  );
}
