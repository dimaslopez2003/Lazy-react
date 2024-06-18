import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCards';

const ImagesContainer: React.FC = () => {
  const [images, setImages] = useState<{ nasa_id: string; title: string; url: string }[]>([]);

  useEffect(() => {
    fetch('https://images-api.nasa.gov/search?q=moon&media_type=image') //API NASA CON ESTRUCTURA JSON
      .then(response => response.json())
      .then(data => {
        const imageItems = data.collection.items.map((item: any) => ({
          nasa_id: item.data[0].nasa_id,
          title: item.data[0].title,
          url: item.links[0].href
        }));
        setImages(imageItems);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images.map((image) => (
        <ImageCard key={image.nasa_id} image={image} />
      ))}
    </div>
  );
}

export default ImagesContainer;
