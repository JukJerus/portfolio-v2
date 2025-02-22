import Typed from "typed.js";
import { useRef, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Jumbotron() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Muhammad Shafwan Maulana", "Student at Jakarta State University"],
      typeSpeed: 60,
      loop: true,
      cursorChar: "|",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <div data-aos='fade-up'>
      <div className="container mx-auto justify-around md:mt-10 md:mb-20">
        <div className="relative flex flex-col md:flex-row-reverse items-center md:justify-center">
          <div className="relative text-center text-white self-center md:w-140 mb-2">
            <p className="text-lg">Hi, I&apos;m</p>
            <span ref={el} className="text-xl md:text-2xl font-bold">
              Muhammad Shafwan Maulana
            </span>
            <p className="font-bold text-3xl md:text-4xl">
              Web <span className="text-amber-400">Developer</span>{" "}
            </p>
            <div className="w-35 text-center rounded-xl px-0 py-2 mt-2 hover:bg-slate-700 h-10 mx-auto bg-slate-800 text-white">
              <a href="./public/CV_MuhammadShafwanMaulana.pdf" download>
                Download CV
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center h-80 w-full md:w-120">
            <div className="relative w-55 h-58 md:w-60 top-15 rounded-t-full bg-amber-400"></div>
            <img
              src="/img/nobg6.png"
              alt="profpict"
              className="size-80 md:size-90 absolute -translate-x-1.5 top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
