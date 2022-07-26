/* eslint-disable prettier/prettier */
import React from 'react';
import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';

const Footer = () => {
  return (
    <footer className='text-center mt-2 mb-3'>
      <div>
        <a
          {...{
            target: '_blank'
          }}
          className='d-flex align-items-center'
          href=''
        >
          Made with <HeartIcon className='mx-1' /> by Creative Cyber Geeks.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
