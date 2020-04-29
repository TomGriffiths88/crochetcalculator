import React from 'react';

const header = () => {
  return (
    <nav className='nav split-nav border padding-top-small margin-bottom-small margin-top-small padding-bottom-large'>
      <div className='nav-brand'>
        <h4>
          <a href='/'>CROCHET CALCULATOR</a>
        </h4>
      </div>
      <div className='collapsible-body'>
        <ul className='inline'>
          {/* <li>
            <a href='http://www.youtube.com/crochetcalculator'>tutorial</a>
          </li> */}
          <li>
            <a
              href='https://www.paypal.com/paypalme/my/profile'
              target='_BLANK'
              rel='noopener noreferrer'
            >
              donate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default header;
