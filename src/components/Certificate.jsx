const certificates = [
  {
    index: 0,
    src: "./src/assets/belajarAI.png",
    alt: "BelajarAI",
  },
  {
    index: 1,
    src: "./src/assets/belajarAWS.png",
    alt: "Learn AWS",
  },
  {
    index: 2,
    src: "./src/assets/belajarJS.png",
    alt: "Learn JS",
  },
  {
    index: 3,
    src: "./src/assets/belajarReact.png",
    alt: "Learn React",
  },
  {
    index: 4,
    src: "./src/assets/belajarWeb.png",
    alt: "Learn Web",
  },
  {
    index: 5,
    src: "./src/assets/frontEnd.png",
    alt: "Learn FE",
  },
];

export default function Certificate() {
  return (
    <div className="p-3 mt-20">
      <h1 className="bg-gradient-to-r from-amber-500 via-yellow-300 via-65% to-white inline text-transparent bg-clip-text font-bold text-3xl mx-22 md:mx-144">
        Certificates
      </h1>
      <div
        id="default-carousel"
        className="relative w-full md:w-7/10 md:mx-auto bg-gradient-to-tr from-gray-500 via-amber-300 via-65% to-gray-700 rounded-lg mt-10"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {certificates.map((certficate) => (
            <div
              key={certficate.index}
              className="hidden duration-1000 ease-in-out"
              data-carousel-item
            >
              <img
                src={certficate.src}
                className="absolute block w-80 md:w-130 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={certficate.alt}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center md:size-10 size-8 rounded-full bg-amber-500/50  group-hover:bg-amber-500 group-focus:ring-4 group-focus:ring-gray-600 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white  rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center md:size-10 size-8 rounded-full bg-amber-500/70  group-hover:bg-amber-500 group-focus:ring-4 group-focus:ring-gray-600 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white  rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
