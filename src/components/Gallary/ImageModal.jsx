// ImageModal.js
import React from 'react';

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <img src={imageUrl} alt="Large view" className="max-w-full max-h-full" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 text-white text-2xl rounded-full p-2 hover:bg-red-700 transition duration-200"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;