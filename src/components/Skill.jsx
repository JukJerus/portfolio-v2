import { useState, useEffect } from "react";
import {
  SiBootstrap,
  SiFigma,
  SiGit,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-amber-500", bgColor: "bg-amber-500", value: 70 },
  { name: "Figma", icon: SiFigma, color: "text-emerald-500", bgColor: "bg-emerald-500", value: 75 },
  { name: "React", icon: SiReact, color: "text-blue-500", bgColor: "bg-blue-500", value: 65 },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-blue-800", bgColor: "bg-blue-800", value: 80 },
  { name: "Vite", icon: SiVite, color: "text-yellow-500", bgColor: "bg-yellow-500", value: 50 },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-700", bgColor: "bg-violet-700", value: 80 },
  { name: "Git", icon: SiGit, color: "text-red-500", bgColor: "bg-red-500", value: 70 },
];

export default function Skill() {
  const [progressValues, setProgressValues] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      let start = 0;
      const stepTime = 4000 / skill.value;
      return setInterval(() => {
        start += 1;
        setProgressValues((prev) => {
          const newValues = [...prev];
          newValues[index] = start;
          return newValues;
        });
        if (start >= skill.value) clearInterval(intervals[index]);
      }, stepTime);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <>
      <div className="p-3 mt-20">
        <h1 className="bg-gradient-to-r from-amber-500 via-yellow-300 via-65% to-white inline text-transparent bg-clip-text font-bold text-3xl mx-35 md:mx-150 border-2">Skills</h1>
        <div className="flex md:flex-row flex-col md:mx-40 mt-10 flex-wrap gap-4 w-s">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="flex h-15 w-9/10 md:w-100 mx-auto gap-2 items-center">
                <Icon className={`text-5xl md:text-6xl rounded-2xl ${skill.color}`} />
                <div className="flex flex-col w-7/10 h-3/4">
                  <div className={`font-medium ${skill.color}`}>{skill.name}</div>
                  <div className="w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`${skill.bgColor} text-xs font-medium text-blue-200 text-center p-0.5 leading-none rounded-full transition-all duration-700 animate-[grow_4s_ease-in-out]`}
                      style={{
                        "--progress-width": `${skill.value}%`,
                        width: `${progressValues[index]}%`,
                      }}
                    >
                      {progressValues[index]}%
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex w-9/10 text-amber-50 font-medium text-lg md:w-100 mx-auto gap-2 items-center"> And Keep Learning....</div>
        </div>
      </div>
    </>
  );
}