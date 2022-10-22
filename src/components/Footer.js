// TODO: Add github and linkedin icons, links to my profiles
import { ReactComponent as LinkedInIcon } from '../pictures/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../pictures/github.svg';
import { LibraryIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      <footer className="text-center">
        Sort_it! app developed with ❤️ by Nadia Zubko © 2022
      </footer>
      <a
        href="https://github.com/N-Zubko/sort-it-app"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon className="ml-1" />
      </a>
      <a
        href="https://www.linkedin.com/in/nadezhda-zubko-developer/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon className="ml-1" />
      </a>
    </div>
  );
};

export default Footer;
