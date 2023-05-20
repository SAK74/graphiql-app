import React from 'react';
import { techs } from '_constants/constants';
import { useTranslation } from 'react-i18next';

export default function AboutProject() {
  const { t } = useTranslation();
  return (
    <section className="flex justify-between flex-col p-x-6 my-16">
      <h2 className="text-3xl md:text-4xl pb-6 font-mono text-dark-blue">
        {t('welcomePage.about.title')}
      </h2>
      <p className="text-xl leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="flex self-center mt-16 gap-14 flex-col sm:flex-row">
        {techs.map((item, index) => {
          return (
            <div key={index} className="bg-light-gray p-3 rounded-lg">
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
}
