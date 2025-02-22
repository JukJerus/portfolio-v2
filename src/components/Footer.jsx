import {
  BiLogoDiscordAlt,
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const socmed = [
  {
    name: "Facebook",
    icon: BiLogoFacebook,
    link: "https://www.facebook.com/shafwanmaul/",
  },
  {
    name: "Discord",
    icon: BiLogoDiscordAlt,
    link: "https://discordapp.com/users/418718275263004702",
  },
  {
    name: "Twitter",
    icon: BiLogoTwitter,
    link: "https://x.com/shafwanjuice",
  },
  {
    name: "GitHub",
    icon: BiLogoGithub,
    link: "https://github.com/JukJerus",
  },
  {
    name: "Linkedin",
    icon: BiLogoLinkedin,
    link: "https://www.linkedin.com/in/shafwan-maul/",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 mt-20">
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" className="hover:underline">
                JukJerus™
              </a>{" "}
              {""}| All Rights Reserved.
            </span>
            <div className="flex mt-4 gap-3 md:gap-5">
              {socmed.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a key={index} href={item.link} className="text-gray-500 hover:text-white">
                    <Icon className="size-5" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
