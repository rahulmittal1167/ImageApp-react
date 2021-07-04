import React from "react";
import "./App.css";
import { Typography } from "@material-ui/core";

import UploadImages from "./components/upload-images.component";

function App() {
  return (
    <div className="container">
      <div className="mg20">
        <Typography variant="h5">Tech Mahindra Image App</Typography>
        <Typography variant="h6">You can upload image and see the list below</Typography>
      </div>

      <UploadImages />
    </div>
  );
}

export default App;
