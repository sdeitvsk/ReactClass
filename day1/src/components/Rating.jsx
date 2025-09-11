import React from 'react'

function Rating({ rating }) {
  // Create an array of 5 elements and fill stars based on rating
  const stars = Array(5).fill(0).map((_, i) => (
    <span key={i}>
      {i < rating ? '★' : '☆'}
    </span>
  ));

  return (
    <div>
      Rating: {stars}
    </div>
  );
}

export default Rating