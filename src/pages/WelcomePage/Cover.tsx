import React from 'react';
import CoverImage from '../../assets/CoverImage.jpg';
import GitHubLogo from '../../assets/GithubLogo.png';

export default function Cover() {
  return (
    <div className="flex justify-between flex-col p-6 items-center md:flex-row md:pt-0">
      <div className="flex gap-4 flex-col">
        <h1 className="text-4xl md:text-6xl font-mono">GraphiQL Project</h1>
        <p className="text-2xl leading-10 text-dark-blue">
          A playground/IDE for graphQL requests, final project for RSS React 2023 Q1 course
        </p>
        <a
          className="text-lg hover:opacity-50 flex items-center"
          href="https://github.com/AnastasiiaUferova/graphiql-app"
          target="_blank"
          rel="noreferrer"
        >
          Github Repo
          <img className="ml-1.5 w-8 h-8" src={GitHubLogo}></img>
        </a>
      </div>
      <img className="md:w-1/2 w-96 h-1/2" alt="Cover image API" src={CoverImage}></img>
    </div>
  );
}
