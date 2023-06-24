import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FiUploadCloud } from "react-icons/fi";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { Storage } from "aws-amplify";
import {
  selectTestbenchItems,
  setTestbenchItems,
} from "../../../store/slices/testbenchesSlice";
import { currentProject } from "../../../store/slices/projectListSlice";
import { currentModel } from "../../../store/slices/modelListSlice";

function UploadTestbenchButton() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const usernameID = useSelector(selectUserNameId);
  const project = useSelector(currentProject);
  const model = useSelector(currentModel);

  const userId = usernameID; // Replace with the actual user ID.
  const projectId = project;
  const modelId = model;

  const subPath = `${userId}/${projectId}/${modelId}`;

  const handleFiles = (event) => {
    const files = event.target.files;
    const fileNames = Array.from(files).map((file) => file.name);

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleFileUpload = async () => {
    try {
      if (selectedFiles.length === 0) {
        console.error("No files selected");
        return;
      }

      const userId = usernameID; // Replace with the actual user ID.
      const folderName = "Testbenches"; // Replace with the desired folder name.

      setLoading(true);

      await Promise.all(
        Array.from(selectedFiles).map(async (file) => {
          const fileName = file.name;
          const path = `${subPath}/${folderName}/${fileName}`;

          await Storage.put(path, file, {
            contentType: file.type,
            progressCallback(progress) {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
            },
          });
          dispatch(setTestbenchItems(fileName));
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
        id='testbench-upload'
        type='file'
        onChange={handleFiles}
        style={{ display: "none" }}
        multiple
      />
      <label htmlFor='testbench-upload'>
        <StyledButton
          variant='outlined'
          component='span'
          disabled={loading}
          startIcon={
            loading ? <CircularProgress size={20} /> : <FiUploadCloud />
          }
        >
          <span>Upload New Testbench</span>
        </StyledButton>
      </label>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
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
    @media screen and (max-width: 900px) {
      span {
        font-size: 10px;
      }
    }
    @media screen and (max-width: 600px) {
      span {
      }
    }
  }
`;

export default UploadTestbenchButton;
