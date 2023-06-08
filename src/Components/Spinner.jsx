import React from 'react';

const Spinner = () => {
  return (

    <div className="relative flex items-center justify-center bg-slate-600">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
    </div>


  );
};

export default Spinner;

