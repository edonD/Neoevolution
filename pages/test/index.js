import React, { useState } from "react";
import { Storage } from "aws-amplify";

function UploadAndDownloadFile() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [downloadedFileUrl, setDownloadedFileUrl] = useState("");

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleFileUpload = async () => {
    try {
      if (selectedFiles.length === 0) {
        console.error("No files selected");
        return;
      }

      const userId = "replace-with-user-id"; // Replace with the actual user ID.
      const folderName = "replace-with-folder-name"; // Replace with the desired folder name.

      await Promise.all(
        selectedFiles.map(async (file) => {
          const fileName = file.name;
          const path = `${userId}/${folderName}/${fileName}`;

          await Storage.put(path, file, {
            contentType: file.type,
            progressCallback(progress) {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
            },
          });
        })
      );

      console.log("Files uploaded successfully");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleFileDownload = async () => {
    try {
      if (selectedFiles.length === 0) {
        console.error("No files selected");
        return;
      }

      const userId = "replace-with-user-id"; // Replace with the actual user ID.
      const folderName = "replace-with-folder-name"; // Replace with the desired folder name.

      await Promise.all(
        selectedFiles.map(async (file) => {
          const fileName = file.name;
          const path = `${userId}/${folderName}/${fileName}`;

          const fileUrl = await Storage.get(path);
          setDownloadedFileUrl(fileUrl);
          console.log("File downloaded successfully:", fileUrl);
        })
      );
    } catch (error) {
      console.error("Error downloading files:", error);
    }
  };

  return (
    <div>
      <input type='file' multiple onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Files</button>
      <button onClick={handleFileDownload}>Download Files</button>
      {downloadedFileUrl && (
        <a href={downloadedFileUrl} download={selectedFiles[0].name}>
          Downloaded File
        </a>
      )}
    </div>
  );
}

export default UploadAndDownloadFile;
