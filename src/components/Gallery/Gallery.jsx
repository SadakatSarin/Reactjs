import React, { useState } from 'react';

const images = [
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1020/600/400',
    'https://picsum.photos/id/1024/600/400',
  ];

const Gallery = () => {

    const [selectedImage, setSelectdImage] = useState(images[0]);
    const [Currentindex,setCurrentIndex] = useState(0);


    const handleImage = () => { 


        const nextIndex = (Currentindex + 1) % images.length;
        setSelectdImage(images[nextIndex]);
        setCurrentIndex(nextIndex);
    }



    return (
        <div>

            <img src={selectedImage} alt="" />
            <button onClick={handleImage}>next</button>
            
        </div>
    );
};

export default Gallery;