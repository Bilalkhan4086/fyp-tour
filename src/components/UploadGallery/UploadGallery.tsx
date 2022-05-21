import { Box } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import React, { useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import './index.css';
import imageLogo from '../../Images/imagelogo.png';
import Bin from '../../Images/icons8-bin-64.png'
import UploadDocuments from './UploadDocuments';


export function UploadGallery({hotel}) {


  const [images, setImages] = React.useState([]);
  const maxNumber = 4;

  // useEffect(() => {
  //   console.log("useEffect rendered");

  // }, [images])


  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const arr = new Array(maxNumber).fill(null);
  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        resolutionHeight={150}
        resolutionWidth={208}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
         <div>
            <div className="upload__image-wrapper imageContainerDiv">
            {
              arr.map((_, i) => (
                <Box key={i} className="imageContainer" {...dragProps} style={isDragging ? { color: 'red' } : undefined} >
                  {
                    (imageList[i] === undefined) ?
                      (imageList.length === i) ?
                        <span style={{ display: "flex", flexDirection: "column", margin: "auto", justifyContent: "center", fontSize: "0.9rem" }}>
                          <img src={imageLogo} alt="" style={{ display: "flex", margin: "auto" }} width="40px" />
                          Drag & drop a photo or <a href='#' onClick={onImageUpload} >Browse</a>
                        </span>
                        :
                        ""
                      :
                      <div className="image-item imagediv"  style={{backgroundImage:`url(${imageList[i]['data_url']})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                        <div className="image-item__btn-wrapper buttonToTopRight">
                        <img src={Bin} width="40px" style={{ color:"whitesmoke", padding:"5px", cursor: "pointer" }} onClick={() => onImageRemove(0)}/>
                        </div>
                      </div>
                  }
                </Box>
              ))
            }
          </div>
{ hotel ?
  <UploadDocuments/> : ''
}
         </div>
                 )
        }
        </ImageUploading>
    </div>
  );
}