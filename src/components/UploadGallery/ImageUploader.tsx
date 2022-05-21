import { Box } from '@material-ui/core'
import ImageUploading from 'react-images-uploading';
import React,{useState} from 'react'
import './index.css';
import Bin from '../../Images/icons8-bin-64.png'
import imageLogo from '../../Images/imagelogo.png';

const ImageUploader = () => {

  
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

  return (
    <div className="App">
    <ImageUploading
    value={images}
    onChange={onChange}
    maxNumber={maxNumber}
    dataURLKey="data_url"
    resolutionHeight={150}
    resolutionWidth={208}
  >
    {(
        {
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }
    ) => (
      // write your building UI
      <div>
  
    <Box className="imageContainer" {...dragProps} style={isDragging ? { color: 'red',margin:"7px" } : {margin:"7px"}} >
                  {
                      (imageList.length === 0) ?
                        <span style={{ display: "flex", flexDirection: "column", margin: "auto", justifyContent: "center", fontSize: "0.9rem" }}>
                          <img src={imageLogo} alt="" style={{ display: "flex", margin: "auto" }} width="40px" />
                          Drag & drop a photo or <a href='#' onClick={onImageUpload} >Browse</a>
                        </span>
                      :   
                      <div className="imagediv" style={{backgroundImage:`url(${imageList[0]['data_url']})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                        <div className="image-item buttonToTopRight">
                          <img src={Bin} width="40px" style={{ color:"whitesmoke", padding:"5px", cursor: "pointer" }} onClick={() => onImageRemove(0)}/>
                        </div>
                      </div>
                  }
                </Box>
  </div>)}
  </ImageUploading>
  </div>
  )}

export default ImageUploader