import { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { FiUploadCloud, FiCheck, FiX } from "react-icons/fi";
import { Typography } from "@mui/material";

function UploadModel() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [modelUploaded, setModelUploaded] = useState(false);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
    setModelUploaded(true);
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item>
        <input
          accept='/*'
          id='model-upload'
          type='file'
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
        <label htmlFor='model-upload'>
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
          {modelUploaded ? (
            <span>
              <FiCheck style={{ color: "green" }} /> File uploaded
            </span>
          ) : (
            <span>
              <FiX style={{ color: "red" }} /> Upload your custom Model
            </span>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default UploadModel;
