import React from 'react';
import getConfig from 'next/config';

import { BaseProgress, Step } from '../components';

const Home = () => {
  const { publicRuntimeConfig } = getConfig();
  const { API_HOST } = publicRuntimeConfig;

  const fakeStep = [{ status: true }, { status: true }, { status: false }, { status: false }];

  console.log(API_HOST);
  return (
    <div>
      <main>main</main>
      <Step className="p-8" stepList={fakeStep} />
      <BaseProgress type="step" value="28" max="100" size="large" />
      <section>section</section>
      <footer>footer</footer>
    </div>
  );
};

export default Home;
