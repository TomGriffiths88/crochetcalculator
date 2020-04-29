import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Adverts from '../Adverts/Adverts';

const layout = (props) => {
  return (
    <>
      <Header />
      {/* <Adverts /> */}
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default layout;
