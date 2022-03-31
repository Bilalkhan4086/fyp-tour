import React from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import { Box } from "theme-ui";

const filterBySize = (file) => {
  //filter out images larger than 5MB
  return file.size <= 5242880;
};

const UploadGallery = () => (
  <Uploady
    destination={{ url: "my-server.com/upload" }}
    fileFilter={filterBySize}
    accept="image/*"
  >
    <UploadButton />
<Box style={{width:"500px",height:"500px",position:"relative"}}>
    <UploadPreview />   
</Box>
  </Uploady>
);
export default UploadGallery