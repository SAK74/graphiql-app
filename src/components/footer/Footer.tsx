import { authors } from '_constants/authors';
import { GRAY_HEADER } from '_constants/constants';
import { Author } from './Author';

const FOOTER = GRAY_HEADER.replace('box', 'flex').concat(
  'pb-2 justify-between items-center bottom-0'
);

export const Footer = () => {
  return (
    <footer className={FOOTER}>
      <a href="https://rs.school/react/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://rs.school/images/rs_school_js.svg"
          alt="logo"
          className="w-32 hover:scale-110 duration-300 max-md:w-24"
        />
      </a>
      <div className="space-x-2 inline-flex">
        {authors.map((author) => (
          <Author key={author.gh_link} {...author} />
        ))}
      </div>
      <div className="font-semibold text-lg">© 2023</div>
    </footer>
  );
};
