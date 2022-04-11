import { Box } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import React, { useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import './index.css';
import imageLogo from '../../Images/imagelogo.png';


export function UploadGallery() {


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
                      <div className="image-item imagediv">
                        <img src={imageList[i]['data_url']} alt="" className='imageView' width="250" />
                        <div className="image-item__btn-wrapper buttonToTopRight">
                          <DeleteForever style={{ color:"whitesmoke", fontSize: 40, cursor: "pointer" }} onClick={() => onImageRemove(i)}>Remove</DeleteForever>
                        </div>{console.log("i=", i, "its reding:", imageList[i]['data_url'])}
                      </div>
                  }
                </Box>
              ))
            }
          </div>
        )
        }</ImageUploading>
    </div>
  );
}