export const fetchImageUrls = async (folderId) => {
    console.log("calledddddd")
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      if (!data.files) {
        throw new Error('No files found');
      }
    
      return data.files.map(file => ({
        id: file.id,
        name: file.name,
        mimeType: file.mimeType,
        url: `https://drive.google.com/uc?id=${file.id}`,
      }));
    } catch (error) {
      console.error('Failed to fetch images from Google Drive:', error);
      throw error;
    }
  };
  