import React from 'react';
import MastHeadImage from '../components/MastHeadImage';
import getBasePath from '../utils/getBasePath';

export default function Home() {
  return (
    <React.Fragment>
      <MastHeadImage src={`${getBasePath()}/img/image_1.jpg`} />
    </React.Fragment>
  );
}
