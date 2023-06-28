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
    console.log("UserID:", userId);
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

export const uploadJSONToS3 = async (
  userId,
  folderName,
  file,
  handleProgressChange,
  handleProgressResult
) => {
  try {
    // Upload the file to S3 using Amplify Storage API
    const result = await Storage.put(
      `${userId}/${folderName}/Final.json`,
      file,
      {
        contentType: "application/json",
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

export const listFolders = async function (path) {
  try {
    const { results } = await Storage.list(path);
    console.log("Results", results, "Path", path);

    const folders = [];
    results.forEach((result) => {
      const keyParts = result.key.split("/");
      if (keyParts.length > 1) {
        const folder = keyParts[1];
        const lastModifiedDate = new Date(
          result.lastModified
        ).toLocaleDateString();
        const lastModifiedTime = new Date(
          result.lastModified
        ).toLocaleTimeString();
        folders.push({ folder, lastModifiedDate, lastModifiedTime });
      }
    });

    return folders;
  } catch (err) {
    console.error(err);
    // throw err; // Rethrow the error to propagate it to the caller
  }
};

export const listModelFolders = async function (path) {
  try {
    const { results } = await Storage.list(path);

    const folders = [];
    results.forEach((result) => {
      const keyParts = result.key.split("/");
      if (keyParts.length > 1) {
        const folder = keyParts[2];
        const lastModifiedDate = new Date(
          result.lastModified
        ).toLocaleDateString();
        const lastModifiedTime = new Date(
          result.lastModified
        ).toLocaleTimeString();
        console.log("FolderModels", folder, "Path", path);
        folders.push({ folder, lastModifiedDate, lastModifiedTime });
      }
    });

    return folders;
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

// export const getFileProperties = async function (path) {
//   try {
//     const result = await Storage.getProperties(path);
//     console.log("File Properties ", result);
//   } catch (error) {
//     console.log("Error ", error);
//   }
// };
export const retrieveCSVromS3 = async function (path) {
  try {
    const csvData = await Storage.get(path, { validateObjectExistence: true });
    const response = await axios.get(csvData);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error retrieving JSON from S3:", error);
    throw error; // Throw the error instead of returning null
  }
};

export const uploadFolderToS3 = async function (userId, folderName) {
  console.log("User Id", userId, "Folder Name", folderName);
  try {
    const result = await Storage.put(`${userId}/${folderName}/config.txt`, {});
    console.log("Folder uploaded successfully:", result);
  } catch (error) {
    console.error("Error uploading folder:", error);
  }
};

export const overwriteFileInStorage = async (filePath, fileData) => {
  try {
    await Storage.put(filePath, fileData, {
      level: "public", // Specify the level and any other options if needed
    });
    console.log("File overwritten successfully");
  } catch (error) {
    console.error("Error overwriting file:", error);
    throw error; // Throw the error instead of returning null
  }
};

export const deleteFileFromStorage = async (filePath) => {
  try {
    await Storage.remove(filePath, { level: "public" });
    console.log("File deleted successfully");
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error; // Throw the error instead of returning null
  }
};

export const deleteFolderFromStorage = async (folderPath) => {
  try {
    const files = await listFilesInFolder(folderPath);
    console.log("Files in folder:", files, "Folder Path", folderPath);
    for (const file of files) {
      await deleteFile(file.key);
    }
    console.log("All files in folder deleted successfully");
  } catch (error) {
    console.error("Error deleting files:", error);
    throw error;
  }
};
const deleteFile = async (fileKey) => {
  try {
    await Storage.remove(fileKey);
    console.log("File deleted:", fileKey);
  } catch (error) {
    console.error("Error deleting file:", fileKey, error);
    throw error;
  }
};
const listFilesInFolder = async (folder) => {
  try {
    const response = await Storage.list(folder);

    const files = response.results;
    return files;
  } catch (error) {
    console.error("Error listing files:", error);
    throw error;
  }
};
