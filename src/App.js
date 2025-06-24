import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './components/TextForm'
import About from './components/About';
// import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  // const [alert, setAlert] = useState(null);


  // const Alerting = (message, typ) => {
  //   setAlert({
  //     msg: message,
  //     type: typ
  //   });
  // }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" homename="Hoooome"/>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/" element={<TextForm heading="Enter the Text to Analyze" />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;



Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homename: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set the title",
  homename: "Homeee"
};




