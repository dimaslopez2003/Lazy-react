import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageCardProps {
  image: {
    nasa_id: string;
    title: string;
    url: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', width: '300px' }}>
      <h4>{image.title}</h4>
      <LazyLoadImage
        alt={image.title}
        height="200px"
        src={image.url} 
        effect="blur"
        width="100%" 
      />
    </div>
  );
}

export default ImageCard;
