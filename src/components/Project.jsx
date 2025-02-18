let id = 0;
const projects = [
  {
    id: id++,
    title: "SolarSTEM",
    desc: "Website that provide information about solar energy concepts and solar panel technology",
    img: "./src/assets/solarSTEM.png",
    link: "https://github.com/JukJerus/SolarSTEM"
  },
  {
    id: id++,
    title: "FLowFin",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "./src/assets/FlowFin.png",
    link: 'https://github.com/JukJerus/flow-fin'
  },
  {
    id: id++,
    title: "KantinKu",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "./src/assets/Kantinku.png",
    link: 'https://www.figma.com/design/q6PE39iPYbWiWRdie8mkIL/UI-UX-Design?node-id=171-89&t=H4uhfy9dmqe20ccQ-1'
  },
  {
    id: id++,
    title: "Collagen",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "./src/assets/Collagen.png",
    link: 'https://www.figma.com/design/IxCRK5VjU12TpJbhafAI92/Collagen-Mockup?node-id=0-1&t=whoELdeVvfdPdIPs-1'
  },
  {
    id: id++,
    title: "Renote",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "./src/assets/renote.png",
    link: 'https://github.com/JukJerus/renote-app'
  },
];

export default function Project() {
  return (
    <div className="p-3 mt-20">
      <h1 className="bg-gradient-to-r from-amber-500 via-yellow-300 via-65% to-white inline text-transparent bg-clip-text font-bold text-3xl mx-29 md:mx-143">
        Projects
      </h1>
      <div className="mt-10 flex flex-col flex-wrap md:flex-row items-center justify-center gap-4 w-s">
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-xs border rounded-lg shadow-sm bg-gray-800 border-gray-700"
          >
            <img className="rounded-t-lg" src={project.img} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-400">{project.desc}</p>
              <a
                href={project.link} target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                See Detail
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
