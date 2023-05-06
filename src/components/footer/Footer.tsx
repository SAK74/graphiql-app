import { authors } from '_constants/authors';
import { GRAY_HEADER } from '_constants/constants';
import { Author } from './Author';

const FOOTER = GRAY_HEADER.replace('box', 'flex').concat(' pb-2 justify-between items-center');

export const Footer = () => {
  return (
    <footer className={FOOTER}>
      <a href="https://rs.school/react/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://rs.school/images/rs_school_js.svg"
          alt="logo"
          className="w-32 hover:scale-110"
        />
      </a>
      <div className="space-x-2">
        {authors.map((author) => (
          <Author key={author.gh_link} {...author} />
        ))}
      </div>
      <div className="font-bold text-lg">© 2023</div>
    </footer>
  );
};
