// import fs from 'fs';
// import path from 'path';

//  export async function getImagesData() {
//   const imageDir = path.join(process.cwd(), 'public/react/shopSphere');
//   const fileNames = fs.readdirSync(imageDir);

//   const imageData = fileNames.map(fileName => {
//     const title = fileName.replace(/\.webp$/, '');
//     return  `/react/shopSphere/${fileName}`
    
//   });

//   return await importImages(imageData);
// }


// export async function importImages({imageUrls}) {
//   const images = [];
//   for (const url of imageUrls) {
//       try {
//           const imgModule = await import(url);
//           const img = imgModule.default; // Assuming default export is the image
//           images.push(img);
//       } catch (error) {
//           console.error(`Failed to load image from ${url}:`, error);
//       }
//   }
//   return images;
// }