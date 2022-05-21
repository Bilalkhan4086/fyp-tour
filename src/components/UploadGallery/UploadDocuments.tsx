import { Box, TextField } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import React, { useEffect } from 'react';
import './index.css';
import ImageUploader from './ImageUploader';
import {Text} from 'theme-ui'
import FileUploader from './FileUploader';

export default function UploadDocuments() {
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
              Owner's CNIC Front Image
            </Text>
                <Box style={{display:"flex",flexFlow:"wrap"}}>  
                <ImageUploader />
                </Box>            
</Box>

<Box>
<Text>
              Owner's CNIC Back Image
            </Text>
                <Box style={{display:"flex",flexFlow:"wrap"}}>  
                <ImageUploader/>
                </Box>            
</Box>


                <Box>
                <Text>
              Property OwnerShip Document
            </Text>
            <Box className='imageContainer2'>
              
            <input onChange={(e)=>{uploadImage(e)}} accept=".pdf, image/*" style={{ display: "flex",flexDirection:"column",width:"190px", margin: "auto", justifyContent: "center",fontSize: "0.9rem"}} type="file"  />
            <Text>
              <b>Note :</b> Better to submit in pdf formate 
            </Text>
            </Box>
            </Box>
            
         </div>
        )}
