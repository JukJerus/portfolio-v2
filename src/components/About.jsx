import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";


export default function About() {
  return (
    <>
      <div className="mt-15 px-4">
        <h2 className="text-white font-bold text-3xl text-center font-xl items-center">
          {" "}
          <span className="text-amber-400">About</span> Me
        </h2>
        <div className="flex flex-col md:flex-row-reverse mt-2 md:mt-8 justify-evenly">
          <div className="mx-auto md:mx-0 md:h-60 bg-amber-500 rounded-full">
            <div className=""></div>
            <img className="size-60" src="./src/assets/pict2-nobg.png" alt="pict2" />
          </div>
          <div className="w-90 md:w-150 mt-4">
            <p className="text-white text-justify">
              Welcome to my portfolio! You can call me Maulana and I&apos;m a Final year Computer
              Science student at Jakarta State University who has an interest in Front End Web
              Developer. During my studies, I have developed skills in programming, algorithms and
              database systems through various academic projects. I&apos;m currently focuss learning React
              JS framework and Tailwind CSS. I am able to communicate well, work together in a team,
              and am interested in learning new things.
            </p>
            <div className="h-20 mt-2 flex flex-row space-x-2">
              <a href="#">
                <BiLogoLinkedin className="p-0.5 rounded-md text-black hover:border-2 hover:bg-transparent hover:border-amber-400 hover:text-amber-400 bg-amber-400" size={35}  />
              </a>
              <a href="#">
                <BiLogoFacebookCircle className="p-0.5 rounded-md text-black hover:border-2 hover:bg-transparent hover:border-amber-400 hover:text-amber-400 bg-amber-400" size={35}  />
              </a>
              <a href="#">
                <BiLogoInstagram className="p-0.5 rounded-md text-black hover:border-2 hover:bg-transparent hover:border-amber-400 hover:text-amber-400 bg-amber-400" size={35}  />
              </a>
              <a href="#">
                <BiLogoGithub className="p-0.5 rounded-md text-black hover:border-2 hover:bg-transparent hover:border-amber-400 hover:text-amber-400 bg-amber-400" size={35}  />
              </a>
              <a href="#">
                <BiLogoGmail className="p-0.5 rounded-md text-black hover:border-2 hover:bg-transparent hover:border-amber-400 hover:text-amber-400 bg-amber-400" size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
