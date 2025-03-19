import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="m-auto w-[60%] flex flex-col gap-3 items-center justify-center ">
      <h1 className="text-3xl text-white">
        Ohh! 🙀 Sorry you are at the wrong address:{" "}
      </h1>
      <p className="text-white text-xl">
        Navigate to{" "}
        <Link to="/">
          {" "}
          <span className="text-2xl text-primary"> Homepage</span>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
