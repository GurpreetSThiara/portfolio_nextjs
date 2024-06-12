"use client"
import { useEffect, useState } from 'react';
import { fetchImageUrls } from '../utils/fetchImageUrls';
import Image from 'next/image';

const GoogleDriveImages = ({ folderId }) => {
    console.log("calles")
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        setError(null); // Reset the error state before fetching
        const imageUrls = await fetchImageUrls(folderId);
        setImages(imageUrls);
      } catch (error) {
        console.log(error)
        setError(error.message);
      }
    };

    getImages();
  }, [folderId]);

  return (
    <div>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : images.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {images.map(image => (
            <div key={image.id} style={{ margin: '10px' }}>
                sex
              <Image src={image.url} alt={image.name} style={{ width: '200px' }} />
            </div>
          ))}
        </div>
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default GoogleDriveImages;
