import React from 'react'
import NativeLoader from 'react-loader-spinner'
import './Loader.scss'


const Loader = () => {

  return (
    <div className="loader">
      <NativeLoader
        type="Audio"
        color="#66BA56"
        height={200}
        width={100}
        timeout={10000}
      />
    </div>

  );
}

export default Loader