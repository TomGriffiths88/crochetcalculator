import React from 'react';

const Footer = (props) => {
  return (
    <footer className='row  flex-center'>
      <h6 className='col text-primary'>
        ©{new Date().getFullYear()} Tom Griffiths. All rights reserved.
      </h6>
    </footer>
  );
};

export default Footer;
