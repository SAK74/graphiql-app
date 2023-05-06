import { FC } from 'react';
import gh_logo from 'assets/gh-logo.png';

export const Author: FC<{ name: string; gh_link: string }> = ({ name, gh_link }) => (
  <a href={gh_link} target="_blank" rel="noopener noreferrer">
    <img src={gh_logo} alt="gh-logo" className="w-8 inline" />
    <span className="text-dark-blue text-lg font-semibold hover:text-pink-500">{name}</span>
  </a>
);
