import React from 'react';
import kalma from '../kalma.svg';
import aazan from '../aazan.svg';

function Header() {
  return (
    <header className='flex bb b--gold br2 bw2 bg-near-white mt3'>
      <div className='flex justify-between items-center'>
        <h1 className='f4 hover-yellow link pointer blue f2-m f1-ns ml3'>
          Quran Search
        </h1>
        <img className='w-25 grow  pr5' src={kalma} alt='' />
        <img className='w-10' src={aazan} alt=''></img>
      </div>
    </header>
  );
}

export default Header;
