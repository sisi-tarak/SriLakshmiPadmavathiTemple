// Modal.jsx
import React from 'react';
import { assets } from '@/assets/assets';
const Modal = ({ open, onClose, message }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 h-[300px] w-[500px] flex flex-col items-center justify-center rounded shadow-lg">
        <h2 className="text-lg text-green-600 font-semibold">Success</h2>
        <p className="mt-2">{message}</p>
        <img className='w-1/2 m-2 rounded-xl' src={assets.bomma} alt="" />
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;