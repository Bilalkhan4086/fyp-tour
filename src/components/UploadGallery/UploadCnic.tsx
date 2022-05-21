import { Box, TextField } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import React, { useEffect } from 'react';
import './index.css';
import ImageUploader from './ImageUploader';
import {Text} from 'theme-ui'

export default function UploadCinc() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 4;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const arr = new Array(maxNumber).fill(null);

  const uploadImage=(e)=>{
    let file = e.target.files[0];
      if (file && !file.name) {
         window.alert("Please select a file");
         return false;
      }
      if (file.size > 2e6) {
        window.alert("Please upload a file smaller than 2 MB");
        return false;
      }
  }

  return (
    <div className="upload__image-wrapper imageContainerDiv">
      
            <Box>
<Text>
            CNIC Front Image
            </Text>
                <Box style={{display:"flex",flexFlow:"wrap"}}>  
                <ImageUploader />
                </Box>            
</Box>

<Box>
<Text>
            CNIC Back Image
            </Text>
                <Box style={{display:"flex",flexFlow:"wrap"}}>  
                <ImageUploader/>
                </Box>            
</Box>
            
         </div>
        )}
