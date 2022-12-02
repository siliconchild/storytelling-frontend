import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "../components/Home";
import Error404 from '../components/Error/404';
import StoryIndex from "../components/StoryIndex";
import StoryView from "../components/StoryView";

const AppRouter = (props) => {

  console.log("================================== AppRouter ======================================");

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<StoryIndex />} />
        <Route path="/story/:id" element={<StoryView />} />
        <Route element={<Error404 />} />
      </Routes>
    </React.Fragment>
  );
}

export default AppRouter;