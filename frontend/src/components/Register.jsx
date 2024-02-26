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
// import { useFormik } from "formik";
// import { signupValidation } from "./SignupValidation";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from 'react-toastify'
// import { useState } from "react";
// import { VITE_BACKEND_URL } from '../App'

// const initialValues = {
//   studentid: "",
//   name: "",
//   course: "",
//   yearandsection: "",
//   email: "",
//   password: "",
//   confirmpassword: "",
// };

// function Register() {
//   const navigate = useNavigate();
//   const[isLoading, setIsLoading] = useState(false)
//   const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
//     initialValues: initialValues,
//     validationSchema: signupValidation,  
//     onSubmit: async(values) => {
//       console.log(values);
      
//       try {
//         setIsLoading(true);
//         const response = await axios.post(`${VITE_BACKEND_URL}/api/register`,values)
//         toast.success(`Save ${response.data.name} successfully`)
//         setIsLoading(false);
//         navigate("/")
//       } catch (error) {
//         toast.error(error.message)
//         // console.log(error)
//         setIsLoading(false);
//       }
//       // console.log('Recieved values of form', values);

//     },
//   });
//   // console.log(formik);
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
//                      This school library is a great help to us because here we learn many things by reading different types of books
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
//                     This library is for all our fellow students so that we can advance study.
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
//                      It's really quiet so you can focus on your studies here in the library
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </Col>
//         <Col sm={4}>
//           <Card>
//             <Card.Header as="h5">Registration</Card.Header>
//             <Card.Body>
//               {/* <Card.Title>Special title treatment</Card.Title> */}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-1" controlId="formBasicStudID">
//                   <Form.Label>Student ID</Form.Label>
//                   <Form.Control
//                     value={values.studentid}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     type="text"
//                     name="studentid"
//                     placeholder="Enter Student ID Number"
//                     autoComplete="off"
//                   />
//                   <Form.Text className="text-muted">
//                     {errors.studentid && <small>{errors.studentid}</small>}
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-1" controlId="formBasicName">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control
//                     value={values.name}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     autoComplete="off"
//                   />
//                   <Form.Text className="text-muted">
//                     {errors.name && <small>{errors.name}</small>}
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-1" controlId="formBasicCourse">
//                   <Form.Label>Course</Form.Label>
//                   <Form.Control
//                     value={values.course}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     type="text"
//                     name="course"
//                     placeholder="Enter Course Name"
//                     autoComplete="off"
//                   />
//                   <Form.Text className="text-muted">
//                     {errors.course && <small>{errors.course}</small>}
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group
//                   className="mb-1"
//                   controlId="formBasicYearandSection"
//                 >
//                   <Form.Label>Yeat & Section</Form.Label>
//                   <Form.Control
//                     value={values.yearandsection}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     type="text"
//                     name="yearandsection"
//                     placeholder="Enter Year and Section"
//                     autoComplete="off"
//                   />
//                   <Form.Text className="text-muted">
//                     {errors.yearandsection && (
//                       <small>{errors.yearandsection}</small>
//                     )}
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-1" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     value={values.email}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     type="email"
//                     name="email"
//                     placeholder="Enter email"
//                     autoComplete="off"
//                   />
//                   <Form.Text className="text-muted">
//                     {errors.email && <small>{errors.email}</small>}
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     value={values.password}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     autoComplete="off"
//                   />
//                   <Form.Text className="text-muted">
//                     {errors.password && <small>{errors.password}</small>}
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicCPassword">
//                   <Form.Label>Confirm Password</Form.Label>
//                   <Form.Control
//                     value={values.confirmpassword}
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     type="password"
//                     name="confirmpassword"
//                     placeholder="Confirm Password"
//                     autoComplete="off"
//                   />
//                   <Form.Text className="text-muted">
//                     {errors.confirmpassword && (
//                       <small>{errors.confirmpassword}</small>
//                     )}
//                   </Form.Text>
//                 </Form.Group>

//                 <Button variant="success" type="submit" className="w-100">
//                   Sign Up
//                 </Button>
//               </Form>
//               <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
//                 Already have an account ? <Link to="/">Login</Link>
//               </Form.Group>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Register;



import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { VITE_BACKEND_URL } from '../App';
import { toast } from 'react-toastify';

function Signin() {
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
    <div className='login' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <Container style={{ maxWidth: '500px' }}>
    <Card className="neumorphic-card p-4">
      <Card.Header as="h3" className="text-center" style={{ fontWeight: '600' }}>Login User</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: '400' }}>Email address</Form.Label>
            <Form.Control style={{ marginBottom: '10px' }} onChange={(e) => setEmail(e.target.value)} type="email" name="email" autoComplete="off" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ paddingTop: '10px' }}>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" autoComplete="off" />
          </Form.Group>
          <Button style={{ marginTop: '10px' }} variant="success" type="submit" className="w-100">
            Sign In
          </Button>
        </Form>
        <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
          Dont have an account? <a href="mailto:PREMIUM.admins@premiun.com">Contact Admins</a>
        </Form.Group>
      </Card.Body>
    </Card>
  </Container>
</div>

  );
}

export default Signin;
