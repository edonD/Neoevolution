import { Storage } from "aws-amplify";
import axios from "axios";

export const uploadFile = async function (
  userId,
  file,
  folderName,
  handleProgressChange,
  handleProgressResult
) {
  const fileName = file.name;
  try {
    const result = await Storage.put(
      `${userId}/${folderName}/${fileName}`,
      file,
      {
        contentType: file.type, // Set the content type if needed
        progressCallback(progress) {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          // Invoke the progressCallback function with the progress value
          if (handleProgressChange) {
            handleProgressChange(progress);
          }
        },
      }
    );
    console.log("File uploaded successfully:", result);

    if (handleProgressResult) {
      handleProgressResult(result);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
export const listFiles = async function (path) {
  try {
    const { results } = await Storage.list(path); // for listing ALL files without prefix, pass '' instead
    return results;
  } catch (err) {
    console.error(err);
    // throw err; // Rethrow the error to propagate it to the caller
  }
};

export const retrieveJSONFromS3 = async function (path) {
  try {
    const jsonData = await Storage.get(path, { validateObjectExistence: true });
    const response = await axios.get(jsonData);
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error retrieving JSON from S3:", error);
    return null;
  }
};
