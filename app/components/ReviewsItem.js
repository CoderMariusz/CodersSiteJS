'use client';

import React from 'react';
import Image from 'next/image';
import '../../styles/reviewsItem/reviewsItem.css';

function ReviewsItem({
  text, name, position, img,
}) {
  console.log(img);

  return (
    <div className='wrapper-reviewsItem'>
      <p>{text}</p>
      <h3>{name}</h3>

      <h4>{position}</h4>
      <div className='imageWrapper-reviewsItem'>
        <Image
          fill
          src={img}
          alt='avatar'
        ></Image>
      </div>
    </div>
  );
}

export default ReviewsItem;
