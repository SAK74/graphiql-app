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
      <div className="text-xl leading-8 flex gap-6 flex-col">
        <p>
          This is a GraphQl playground web app that provides a GraphQL interface available to
          authorized users after registration. Users land on a welcome page where they can sign in
          or sign up if they are not authorized. Authorized users are directed to the main page,
          which includes a GraphQL interface.
        </p>
        <p>
          The main page interface allows users to send GraphQL queries to&nbsp;
          <a
            className="text-dark-blue"
            href="https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/home"
          >
            Rick and Morty API
          </a>
          . It includes a request editor for composing queries, a variables editor for managing
          query variables, and a lazy-loaded documentation explorer, providing insights into the
          API&apos;s schema when a successful schema response is received.
        </p>
        <p>
          The app has a sticky header that changes color when scrolling and includes a sign-out
          button. It also supports localization in Russian and English. Authentication and
          authorization are handled using Firebase with email options. Client-side validation
          ensures secure input. The footer contains links to the authors&apos; GitHub profiles and
          the course reference.
        </p>
        <p>
          Overall, this project showcases a robust implementation of a GraphQL web app with key
          features for an enhanced user experience.
        </p>
      </div>
      <div>
        <h2 className="text-3xl mt-16 md:text-4xl pb-8 font-mono text-dark-blue">
          Technologies used
        </h2>
        <div className="flex gap-10 flex-col md:flex-row items-center justify-center">
          {techs.map((item, index) => {
            return (
              <div key={index} className="bg-light-gray p-3 rounded-lg">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
