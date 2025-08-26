// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-4 sm:py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-center md:text-left">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/vinicius-fontes/" className="text-[#16f2b3] hover:underline">Vinicius Fontes de Andrade</Link>
          </p>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              target="_blank"
              href="https://github.com/ViniciusFontess/portfolio"
              className="flex items-center gap-1 sm:gap-2 uppercase hover:text-[#16f2b3] text-xs sm:text-sm transition-colors duration-300"
            >
              <IoStar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/ViniciusFontess/portfolio/fork"
              className="flex items-center gap-1 sm:gap-2 uppercase hover:text-[#16f2b3] text-xs sm:text-sm transition-colors duration-300"
            >
              <CgGitFork className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;