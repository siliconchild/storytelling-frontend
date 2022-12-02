import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Theme from "./Theme";
import AppRoutes from "./AppRoutes";
import Content from "../common/Content";
import Header from "../common/Header";
import Footer from "../common/Footer";


const App = (props) => {

  console.log("================================== App ======================================");


  // Build App
  let view = (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Router basename="/">
          <Header></Header>
          <Content>
            <AppRoutes />
          </Content>
          <Footer></Footer>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )

  // Return View
  return view
}

export default App;
