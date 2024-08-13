import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa";
import ShowResume from "../ShowResume.jsx";
function Hero() {
  return (
    <section
      id="hero"
      className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24"
    >
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden w-20 h-20"
            alt="profile pic"
          />
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>
            {/* links */}
            <div className="flex items-center gap-3 my-5">
              <span>
                <a href={user_info.profile.github}>
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href={user_info.profile.linkedin}>
                  <FaLinkedin />
                </a>
              </span>
              <span>
                <a href={user_info.profile.leetcode}>
                  <SiLeetcode />
                </a>
              </span>
              <span>
                <a href={user_info.profile.twitter}>
                  <FaSquareXTwitter />
                </a>
              </span>
              <span>
                <a href={user_info.profile.slack}>
                  <FaSlack />
                </a>
              </span>
            </div>
            <div className="hover:text-red-600 border border-white w-fit p-3 rounded-sm text-sm">
              <ShowResume />
            </div>
            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-full w-70 h-80 transform object-cover"
              src={user_info.main.photo}
              alt="profile pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
