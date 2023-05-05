export const WHITE_HEADER =
  'z-1 sticky trasition ease-in-out duration-500 shadow-xl left-0 top-0 w-full m-0 bg-white m-0 pt-3 box px-24 max-md:px-2';
export const GRAY_HEADER = 'w-full m-0 bg-light-gray m-0 pt-3 box px-24 max-md:px-2';

import AnastasiaPic from '../assets/Anastasia.jpg';
import AnnaPic from '../assets/Anna.jpeg';
import GenericPic from '../assets/ApiPic.svg';
import { Dev } from '../types/types';

export const techs = ['React.js', 'GraphQL', 'Tailwind CSS', 'Firebase'];

export const devs: Dev[] = [
  {
    name: 'Anastasiia Iuferova',
    pic: AnastasiaPic,
    gh: 'https://github.com/AnastasiiaUferova',
    ln: 'https://www.linkedin.com/in/anastasiia-iuferova-frontend-dev/',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
  {
    name: 'Hanna Biruk',
    pic: AnnaPic,
    gh: 'https://github.com/anna-biruk',
    ln: 'https://www.linkedin.com/in/anna-biruk/',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
  {
    name: 'Sergij Kusyy',
    pic: GenericPic,
    gh: 'https://github.com/sak74',
    ln: 'https://www.linkedin.com/in/serhiy-kusyy/',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
  },
];
