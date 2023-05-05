import React from 'react';
import AboutProject from './AboutProject';
import AboutDevs from './AboutDevs';
import Cover from './Cover';

export default function WelcomePage() {
  return (
    <div className="w-full m-0 bg-white m-0 pt-3 box px-20 max-md:px-2">
      <Cover />
      <AboutProject />
      <AboutDevs />
    </div>
  );
}
