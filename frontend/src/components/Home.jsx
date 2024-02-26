// import Container from "react-bootstrap/Container";
// import Carousel from "react-bootstrap/Carousel";
// import img1 from "./assets/images/home-library-j0f5epsruiuypf5g.webp";
// import img2 from "./assets/images/home-library-uxfooi9id0mxvzdq.webp";
// import img3 from "./assets/images/home-library-ey7wp5pfmhiy7hof.webp";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";
// // import { useFormik } from "formik";
// // import { loginValidation } from "./LoginValidation";
// // import axios from "axios";
// import { toast } from 'react-toastify'
// // import { useState } from "react";
// import { VITE_BACKEND_URL } from '../App'
// // import { useNavigate } from "react-router-dom";
// // import { useEffect } from "react";
// import  {  useState } from "react";

// // const initialValues = {
// //   email: "",
// //   password: "",
// // };

// function Home() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log(email, password);
//     await fetch(`${VITE_BACKEND_URL}/api/login`, {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data, "userRegister");
//         if (data.status == "ok") {
//           toast.success(`Login successfully`)
//           window.localStorage.setItem("token", data.data);
//           window.localStorage.setItem("loggedIn", true);
//           setTimeout(() => {
//             window.location.href = "./dashboard/dashboard";
//           }, 2000);
//         }else if (data.status == "notlogin") {
//           toast.warning(`Login Failed`)
//           setTimeout(() => {
//             window.location.href = "/";
//           }, 2000);
//         }
//         if (data.status == "error") {
//           toast.error("Login failed")
//         }
//       });
//   }

//   return (
//     <Container>
//       <Row className="mt-4">
//         <Col sm={8}>
//           <div>
//             <Carousel data-bs-theme="dark">
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={img1}
//                   alt="First slide"
//                   style={{ width: "100%", height: "320px" }}
//                 />
//                 <Carousel.Caption className="slide-description">
//                   <h5>Library Slide 1</h5>
//                   <p>
//                     This school library is a great help to us because here we
//                     learn many things by reading different types of books
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={img2}
//                   alt="Second slide"
//                   style={{ width: "100%", height: "320px" }}
//                 />
//                 <Carousel.Caption className="slide-description">
//                   <h5>Library Slide 2</h5>
//                   <p>
//                     This library is for all our fellow students so that we can
//                     advance study.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={img3}
//                   alt="Third slide"
//                   style={{ width: "100%", height: "320px" }}
//                 />
//                 <Carousel.Caption className="slide-description">
//                   <h5>Library Slide 3</h5>
//                   <p>
//                     Its really quiet so you can focus on your studies here in
//                     the library
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </Col>
//         <Col sm={4}>
//           <Card>
//             <Card.Header as="h5">Login User</Card.Header>
//             <Card.Body>
//               {/* <Card.Title>Special title treatment</Card.Title> */}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-1" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="email"
//                     name="email"
//                     autoComplete="off"
//                   />
//                   {/* <Form.Text className="text-muted">
//                     {errors.email && <small>{errors.email}</small>}
//                   </Form.Text> */}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     autoComplete="off"
//                   />

//                   {/* <Form.Text className="text-muted">
//                     {errors.password && <small>{errors.password}</small>}
//                   </Form.Text> */}
//                 </Form.Group>

//                 <Button variant="success" type="submit" className="w-100">
//                   Sign In
//                 </Button>
//               </Form>
//               <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
//                 Dont have an account ? <Link to="/register">Register</Link>
//               </Form.Group>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Home;

// import About from '../../front/Components/About';
// import Footer from '../../front/Components/Footer';
// import ImageSlider from '../../front/Components/ImageSlider';
// import News from '../../front/Components/News';
// import PhotoGallery from '../../front/Components/PhotoGallery';
// import PopularBooks from '../../front/Components/PopularBooks';
// import RecentAddedBooks from '../../front/Components/RecentAddedBooks';
// import ReservedBooks from '../../front/Components/ReservedBooks';
// import Stats from '../../front/Components/Stats';
// import WelcomeBox from '../../front/Components/WelcomeBox';

// function Home() {
//   return (
//     <div id='home'>
//       <ImageSlider />
//       <WelcomeBox />
//       <About />
//       <Stats />
//       <RecentAddedBooks />
//       <PopularBooks />
//       <ReservedBooks />
//       <News />
//       <PhotoGallery />
//       <Footer />
//     </div>
//   );
// }

// export default Home;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import Header from '../../front/Components/Header';
 import About from '../../front/Components/About';
 import Footer from '../../front/Components/Footer';
import ImageSlider from '../../front/Components/ImageSlider';
 import PopularBooks from '../../front/Components/PopularBooks';
 import RecentAddedBooks from '../../front/Components/RecentAddedBooks';
 import ReservedBooks from '../../front/Components/ReservedBooks';
 import Stats from '../../front/Components/Stats';
 import WelcomeBox from '../../front/Components/WelcomeBox';
import { VITE_BACKEND_URL } from '../App';
import { toast } from 'react-toastify';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await fetch(`${VITE_BACKEND_URL}/api/login`, {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'ok') {
          toast.success(`Login successfully`);
          window.localStorage.setItem('token', data.data);
          window.localStorage.setItem('loggedIn', true);
          setTimeout(() => {
            window.location.href = './dashboard/dashboard';
          }, 2000);
        } else if (data.status === 'notlogin') {
          toast.warning(`Login Failed`);
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        }
        if (data.status === 'error') {
          toast.error('Login failed');
        }
      });
  };

  return (
    <Container style={{ width: '100%' }}>
       


      <Header />
      <ImageSlider />
      <WelcomeBox />
      <About />
      <Stats />
      <ReservedBooks />
      <RecentAddedBooks />
      <PopularBooks />
      
      <Footer />
    </Container>
  );
}

export default Home;
/*
<Row className="mt-4">
       
        <Col sm={4}>
          <Card>
            <Card.Header as="h5">Login User</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Sign In
                </Button>
              </Form>
              <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
                Dont have an account ? <Link to="/register">Register</Link>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
*/ 