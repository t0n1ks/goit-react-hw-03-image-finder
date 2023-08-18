import React from 'react';
import { Dna } from 'react-loader-spinner'; 
import s from './Loader.module/Loader.module.css';

const CustomLoader = () => (
  <div className={s.loaderContainer}>
    <div className={s.loaderCenter}>
      <Dna
        visible={true}
        height={80}
        width={80}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  </div>
);

export default CustomLoader;

