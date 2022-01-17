import React, { useState } from 'react';
import Modal from '../Modal';
// import photo from "../../assets/small/portfolio/";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Password Generator',
      category: 'portfolio',
      description:
        'For this project I used Javascript and HTML to create a password generator based on what the user requests. '
    },
    {
      name: 'Note Taking App',
      category: 'portfolio',
      description:
        'For this project I edited a starter code for a note taking app. I used express and node to edit the pages so that the user can go to new webpages as they navigate through the app.'
    },
   
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
