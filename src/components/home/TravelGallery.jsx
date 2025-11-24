import React from 'react';

const TravelGallery = () => {
  // 임시 이미지 (배경색으로 처리하거나 실제 이미지가 있다면 경로 수정)
  const images = [1, 2, 3, 4]; 

  return (
    <div className="travel-gallery">
      {images.map((item, index) => (
        <div key={index} className="gallery-item">
          {/* 이미지가 있다면 <img src="..." /> 사용 */}
          <div className="placeholder-image"></div>
        </div>
      ))}
    </div>
  );
};

export default TravelGallery;