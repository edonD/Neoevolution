import { Storage } from "aws-amplify";

export const uploadFile = async function (userId, file, folderName) {
  try {
    const result = await Storage.put(`${userId}/${folderName}/${file}`, file, {
      contentType: file.type, // Set the content type if needed
    });
    console.log("File uploaded successfully:", result);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

// async function uploadFileToS3(userId, file, folderName) {
//     const s3 = new AWS.S3();
//     const bucketName = 'YOUR_S3_BUCKET_NAME';
//     const folderPath = `${userId}/${folderName}`;

//     const params = {
//       Bucket: bucketName,
//       Key: `${folderPath}/${file.name}`,
//       Body: file.data, // Assuming the file object contains the data.
//     };

//     try {
//       await s3.upload(params).promise();
//       console.log('File uploaded successfully.');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   }
