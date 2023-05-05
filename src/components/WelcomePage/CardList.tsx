import React from 'react';
import DevCard from './DevCard';
import { devs } from '../../constants/constants';

export default function CardList() {
  return (
    <div className="flex flex-col gap-8 mt-4 md:flex-row">
      {devs.map((item, index) => {
        return (
          <DevCard
            key={index}
            text={item.text}
            pic={item.pic}
            name={item.name}
            ln={item.ln}
            gh={item.gh}
          />
        );
      })}
    </div>
  );
}
