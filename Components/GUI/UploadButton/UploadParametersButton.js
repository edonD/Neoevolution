import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import { FiUploadCloud } from "react-icons/fi";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { Storage } from "aws-amplify";
import { useDispatch } from "react-redux";
import { setParameterItems } from "../../../store/slices/parametersDataSlice";
import { currentModel } from "../../../store/slices/modelListSlice";
import { currentProject } from "../../../store/slices/projectListSlice";

function UploadParametersButton() {
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const usernameID = useSelector(selectUserNameId);

  const project = useSelector(currentProject);
  const model = useSelector(currentModel);

  const userId = usernameID; // Replace with the actual user ID.
  const projectId = project;
  const modelId = model;

  const subPath = `${userId}/${projectId}/${modelId}`;

  const handleFileSelect = (event) => {
    const files = event.target.files;
    console.log(files);
    setSelectedFiles([...files]);
  };
  const handleFileUpload = async () => {
    try {
      if (selectedFiles.length === 0) {
        console.error("No files selected");
        return;
      }

      const folderName = "Model Parameters"; // Replace with the desired folder name.
      setLoading(true);
      await Promise.all(
        selectedFiles.map(async (file) => {
          const fileName = file.name;
          const path = `${subPath}/${folderName}/${fileName}`;
          await Storage.put(path, file, {
            contentType: file.type,
            progressCallback(progress) {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
            },
          });
          dispatch(setParameterItems(file.name));
        })
      );
      setLoading(false);
      console.log("Files uploaded successfully");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  useEffect(() => {
    if (selectedFiles.length > 0) {
      handleFileUpload();
    }
  }, [selectedFiles]);

  return (
    <ButtonContainer>
      <input
        accept='/*'
        id='file-upload'
        type='file'
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
      <label htmlFor='file-upload'>
        <StyledButton
          variant='contained'
          component='span'
          disabled={loading}
          startIcon={
            loading ? <CircularProgress size={20} /> : <FiUploadCloud />
          }
          // startIcon={<FiUploadCloud />}
        >
          <span>Upload New Data</span>
        </StyledButton>
      </label>
    </ButtonContainer>
  );
}
const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  && {
    height: 40px;
    /* background-color: #a6a6a6; */
    @media screen and (min-width: 901px) and (max-width: 1500px) {
      span {
        font-size: 11px;
      }
    }
    @media screen and (max-width: 1200px) {
      span {
        font-size: 12px;
      }
    }
  }
`;
export default UploadParametersButton;
