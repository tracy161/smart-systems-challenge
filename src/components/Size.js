import React from 'react';

const Size = ({ size }) => {
  if (size === 0) return '0 Bytes';
  const k = 1024;
  const unit = 'MB'

  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(2)) + unit;
};

export default Size;
