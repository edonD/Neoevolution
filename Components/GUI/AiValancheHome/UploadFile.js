import { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { FiUploadCloud, FiCheck, FiX } from "react-icons/fi";
import { Typography } from "@mui/material";

function UploadField() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileUploaded(true);
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item>
        <input
          accept='/*'
          id='file-upload'
          type='file'
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
        <label htmlFor='file-upload'>
          <Button
            variant='contained'
            component='span'
            startIcon={<FiUploadCloud />}
          >
            Upload
          </Button>
        </label>
      </Grid>

      <Grid item>
        <Typography variant='body2'>
          {fileUploaded ? (
            <span>
              <FiCheck style={{ color: "green" }} /> File uploaded
            </span>
          ) : (
            <span>
              <FiX style={{ color: "red" }} /> Upload your file
            </span>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UploadField;
