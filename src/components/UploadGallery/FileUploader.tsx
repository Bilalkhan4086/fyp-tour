import React from 'react';
import { useFileUpload } from 'use-file-upload'
import "./index.css"

const FileUploader = () =>{
    
  const [file, selectFile]:[any,any] = useFileUpload()
    return(
    <div>
      <button
        onClick={() => {
          // Single File Upload accepts only images
          selectFile({ accept: 'pdf/*' }, ({ source, name, size, file }) => {
            // file - is the raw File Object
            console.log({ source, name, size, file })
            // Todo: Upload to cloud.
          })
        }}
      >
        Click to Upload
      </button>

      {file ? (
        <div className="imagediv" style={{backgroundImage:`url(${file.source})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <span> Name: {file.name} </span>
          <span> Size: {file.size} </span>
        </div>
      ) : (
        <span>No file selected</span>
      )}
    </div>)}
export default FileUploader