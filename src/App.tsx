import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaChevronRight,
  FaLocationArrow,
  FaMoneyCheck,
  FaReact,
  FaSwift,
  FaXmark,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMixpanel,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiWebpack,
} from "react-icons/si";
import "./App.css";
import cambridge from "/cambridge.png";
import nyuX from "/nyux.png";
import sfOnline from "/sfOnline.png";
import utn from "/utn.png";

const workExperienceData = [
  {
    name: "Skill Trees",
    role: "Solo Founder & Software Engineer",
    timeInCompany: "(2023 - 2024)",
    repo: "http://localhost:5173/",
    url: "http://localhost:5173/",
    techUsed: [
      {
        icon: <FaSwift size={70} opacity={0.6} color="#FF3D00" />,
        name: "SwiftUI",
        color: "#FF3D00",
      },
      {
        icon: <SiMixpanel size={70} opacity={0.6} color="#800080" />,
        name: "MixPanel",
        color: "#800080",
      },
      {
        icon: <FaMoneyCheck size={70} opacity={0.6} color="#FF1E56" />,
        name: "RevenueCat",
        color: "#FF1E56",
      },
      {
        icon: <FaReact size={70} opacity={0.6} color="#03A9F4" />,
        name: "React Native",
        color: "#03A9F4",
      },
      {
        icon: <FaSwift size={70} opacity={0.6} color="#1976D2" />,
        name: "TypeScript",
        color: "#1976D2",
      },
      {
        icon: <SiExpress size={70} opacity={0.6} color="#008000" />,
        name: "ExpressJS",
        color: "#008000",
      },
      {
        icon: <SiMongodb size={70} opacity={0.6} color="#008000" />,
        name: "MongoDB",
        color: "#008000",
      },
    ],
    description: [
      "I created Skill Trees to make achieving goals more fun by gamifying the process. Initially, I built the Android app using React Native with Skia, but when I decided to focus on iOS, I switched to SwiftUI for better performance. ",
    ],
    images: [
      { src: "/projectsScreenshots/skilltrees/4.png", type: "desktop" },
      { src: "/projectsScreenshots/skilltrees/5.png", type: "desktop" },
      { src: "/projectsScreenshots/skilltrees/1.png", type: "mobile" },
      { src: "/projectsScreenshots/skilltrees/2.png", type: "mobile" },
      { src: "/projectsScreenshots/skilltrees/3.png", type: "mobile" },
    ],
  },
  {
    name: "MyBrainPro",
    role: "Solo Founder & Software Engineer",
    timeInCompany: "(2024)",
    techUsed: [
      {
        icon: <FaSwift size={70} opacity={0.6} color="#FF3D00" />,
        name: "SwiftUI",
        color: "#FF3D00",
      },
      {
        icon: <SiMixpanel size={70} opacity={0.6} color="#800080" />,
        name: "MixPanel",
        color: "#800080",
      },
      {
        icon: <FaMoneyCheck size={70} opacity={0.6} color="#FF1E56" />,
        name: "RevenueCat",
        color: "#FF1E56",
      },
      {
        icon: <FaSwift size={70} opacity={0.6} color="#1976D2" />,
        name: "TypeScript",
        color: "#1976D2",
      },
      {
        icon: <SiExpress size={70} opacity={0.6} color="#008000" />,
        name: "ExpressJS",
        color: "#008000",
      },
      {
        icon: <SiMongodb size={70} opacity={0.6} color="#008000" />,
        name: "MongoDB",
        color: "#008000",
      },
    ],
    description: [
      "I created Skill Trees to make achieving goals more fun by gamifying the process. Initially, I built the Android app using React Native with Skia, but when I decided to focus on iOS, I switched to SwiftUI for better performance. ",
    ],
    images: [
      { src: "/projectsScreenshots/mybrainpro/1.png", type: "mobile" },
      { src: "/projectsScreenshots/mybrainpro/2.png", type: "mobile" },
      { src: "/projectsScreenshots/mybrainpro/3.png", type: "mobile" },
      { src: "/projectsScreenshots/mybrainpro/4.png", type: "mobile" },
      { src: "/projectsScreenshots/mybrainpro/5.png", type: "mobile" },
      { src: "/projectsScreenshots/mybrainpro/6.png", type: "mobile" },
    ],
  },
  {
    name: "TrackerWallet",
    role: "Front End Software Engineer",
    timeInCompany: "(2022)",
    techUsed: [
      {
        icon: <SiNextdotjs size={70} opacity={0.6} color="#333333" />,
        name: "NextJs",
        color: "#333333",
      },
      {
        icon: <FaSwift size={70} opacity={0.6} color="#1976D2" />,
        name: "TypeScript",
        color: "#1976D2",
      },
    ],
    description: [
      "I created Skill Trees to make achieving goals more fun by gamifying the process. Initially, I built the Android app using React Native with Skia, but when I decided to focus on iOS, I switched to SwiftUI for better performance. ",
    ],
    images: [
      {
        src: "/projectsScreenshots/trackerWallet/dashboard1.png",
        type: "desktop",
      },
      {
        src: "/projectsScreenshots/trackerWallet/dashboard2.png",
        type: "desktop",
      },
      { src: "/projectsScreenshots/trackerWallet/map.png", type: "desktop" },
      {
        src: "/projectsScreenshots/trackerWallet/mappeditnode.png",
        type: "desktop",
      },
      {
        src: "/projectsScreenshots/trackerWallet/mapfiltercolor.png",
        type: "desktop",
      },
      {
        src: "/projectsScreenshots/trackerWallet/maptree.png",
        type: "desktop",
      },
      {
        src: "/projectsScreenshots/trackerWallet/profile.png",
        type: "desktop",
      },
    ],
  },
  {
    name: "CreatorSet",
    role: "Front End Software Engineer",
    timeInCompany: "(2021 - 2022)",
    techUsed: [
      {
        icon: <FaSwift size={70} opacity={0.6} color="#1976D2" />,
        name: "TypeScript",
        color: "#1976D2",
      },
      {
        icon: <FaReact size={70} opacity={0.6} color="#03A9F4" />,
        name: "React",
        color: "#03A9F4",
      },
      {
        icon: <SiRedux size={70} opacity={0.6} color="#800080" />,
        name: "Redux",
        color: "#800080",
      },
      {
        icon: <SiWebpack size={70} opacity={0.6} color="#FBA200" />,
        name: "Webpack",
        color: "#FBA200",
      },
      {
        icon: <SiMongodb size={70} opacity={0.6} color="#008000" />,
        name: "MongoDB",
        color: "#008000",
      },
    ],
    description: [
      "I created Skill Trees to make achieving goals more fun by gamifying the process. Initially, I built the Android app using React Native with Skia, but when I decided to focus on iOS, I switched to SwiftUI for better performance. ",
    ],
    images: [
      {
        src: "/projectsScreenshots/creatorSet/captiontool.png",
        type: "desktop",
      },
      {
        src: "/projectsScreenshots/creatorSet/captiontoolpage.png",
        type: "desktop",
      },
      {
        src: "/projectsScreenshots/creatorSet/editProfile.png",
        type: "desktop",
      },
      { src: "/projectsScreenshots/creatorSet/login.png", type: "desktop" },
      {
        src: "/projectsScreenshots/creatorSet/newProduct.png",
        type: "desktop",
      },
      {
        src: "/projectsScreenshots/creatorSet/profanitychecker.png",
        type: "desktop",
      },
      { src: "/projectsScreenshots/creatorSet/store.png", type: "desktop" },
      {
        src: "/projectsScreenshots/creatorSet/thumbnailPreviewer.png",
        type: "desktop",
      },
    ],
  },
];

function App() {
  const [sectionInView, setSectionInView] = useState<
    "work" | "about" | "reading"
  >("work");

  const updateSectionInView = (section: "work" | "about" | "reading") => {
    return () => {
      setSectionInView(section);
    };
  };

  return (
    <main className="w-screen flex justify-center text-[#000000] bg-[#EAECFB]">
      <div className="w-full max-w-[1440px]">
        <HeroSection updateSectionInView={updateSectionInView("work")} />
        <div className="h-[10px]" />
        <AboutSection updateSectionInView={updateSectionInView("about")} />
        <div className="h-[10px]" />
        <ReadingSection updateSectionInView={updateSectionInView("reading")} />
        <ScrollIndicator sectionInView={sectionInView} />
      </div>
    </main>
  );
}

export default App;

function HeroSection({
  updateSectionInView,
}: {
  updateSectionInView: () => void;
}) {
  const [projectIdOpened, setProjectIdOpened] = useState<string | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) updateSectionInView();
  }, [isInView]);

  const openProject = (name: string) => {
    return () => {
      if (projectIdOpened === name) {
        setProjectIdOpened(null);
      } else {
        setProjectIdOpened(name);
      }
    };
  };

  const projectOpened = workExperienceData.find(
    (i) => i.name === projectIdOpened
  );

  return (
    <div
      ref={ref}
      className="w-full h-screen relative grid grid-cols-12 grid-rows-[repeat(16,1fr)] p-[30px] gap-x-[30px] gap-y-[8px]"
    >
      {!projectIdOpened && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="col-start-1 col-end-12 row-start-4 xl:col-start-6 xl:col-end-10 xl:row-start-7 xl:row-end-10 flex flex-col justify-center"
        >
          <p className="font-bold text-[24px]">Lucas Pennice,</p>
          <p className="font-bold text-[24px]">
            Software Engineer at{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Celeris
            </span>
          </p>

          <div className="text-[#94949E] font-medium text-[18px] flex gap-4">
            <a
              href="https://www.linkedin.com/in/lucas-pennice/"
              target="_blank"
              className="hover:bg-white hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] px-1 rounded-md"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lucaspennice@gmail.com"
              target="_blank"
              className="hover:bg-white hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] px-1 rounded-md"
            >
              Email
            </a>
            <a
              href="https://github.com/LucasPennice"
              target="_blank"
              className="hover:bg-white hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] px-1 rounded-md"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {projectOpened && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="col-span-full h-[calc(100vh-60px)] xl:col-start-5 xl:col-end-12 bg-white xl:h-[780px] shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] grid grid-cols-7 grid-rows-[repeat(13,1fr)] p-[30px] gap-x-[20px] gap-y-[8px] rounded-[20px] self-center overflow-hidden z-10"
            style={{ gridRow: "2 / span 13" }}
          >
            {projectOpened && (
              <button
                onClick={openProject(projectOpened.name)}
                className="xl:hidden absolute right-4 top-4 bg-[#AFAFAF] h-[50px] w-[50px] rounded-full flex justify-center items-center"
              >
                <FaXmark color="white" size={32} />
              </button>
            )}

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={projectOpened.name + "header"}
              className="col-span-full flex justify-between"
            >
              <p className="text-[22px] xl:text-[38px] font-semibold">
                {projectOpened.name}
              </p>
              <p className="hidden xl:block text-[#94949EB2] font-medium text-[18px] mt-auto">
                {projectOpened.timeInCompany}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.05 } }}
              key={projectOpened.name + "role"}
              className="col-span-full font-medium text-[16px] xl:text-[18px] my-auto flex items-center gap-4"
            >
              <p>{projectOpened.role}</p>

              {projectOpened.url && (
                <a
                  href={projectOpened.url}
                  target="_blank"
                  className="hidden xl:flex items-center gap-1 hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] p-1 rounded-md"
                >
                  {projectOpened.url
                    .replace("https://", "")
                    .replace("http://", "")
                    .replace("www.", "")}
                  <FaLocationArrow />
                </a>
              )}
              {projectOpened.repo && (
                <a
                  href={projectOpened.repo}
                  target="_blank"
                  className="hidden xl:flex items-center gap-1 hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] p-1 rounded-md"
                >
                  GitHub
                  <FaLocationArrow />
                </a>
              )}
            </motion.div>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
              key={projectOpened.name + "description"}
              className="col-span-full row-span-2 font-light text-[14px] xl:text-[18px] my-auto"
            >
              {projectOpened.description}
            </motion.p>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.15 } }}
              key={projectOpened.name + "tech"}
              className="row-start-6 row-span-3 col-span-full overflow-x-scroll flex gap-4 scrollbar-hide"
            >
              {projectOpened.techUsed.map((badge) => {
                return (
                  <div
                    key={`card${projectOpened.name}${badge.name}`}
                    className="h-full bg-[#D9D9D9A2] rounded-[10px] flex flex-col justify-center items-center gap-2 w-[200px] flex-shrink-0"
                  >
                    {badge.icon}
                    <span
                      className={`font-medium text-[20px]`}
                      style={{ color: badge.color }}
                    >
                      {badge.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              key={projectOpened.name + "imgs"}
              className="row-start-10 row-span-4 col-span-full overflow-x-scroll flex gap-4 scrollbar-hide"
            >
              {projectOpened.images.map((img, idx) => {
                return (
                  <img
                    key={projectOpened.name + idx + "src"}
                    src={img.src}
                    className="h-full max-w-none rounded-[15px]"
                  />
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="xl:row-span-full xl:col-start-1 xl:col-end-4 col-span-full row-start-8 row-span-6 flex flex-col justify-center gap-2">
        {workExperienceData.map((item, idx) => {
          return (
            <div
              onClick={openProject(item.name)}
              data-selected={item.name === projectIdOpened}
              key={idx}
              className="flex justify-between items-center rounded-[30px] hover:bg-white data-[selected=true]:bg-white px-6 h-[52px] data-[selected=true]:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] cursor-pointer transition-all"
            >
              <p className="text-[18px] text-[#141416]">{item.name}</p>
              <p className="text-[18px] text-[#94949E]">
                {item.timeInCompany.slice(1, 5)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AboutSection({
  updateSectionInView,
}: {
  updateSectionInView: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) updateSectionInView();
  }, [isInView]);

  return (
    <div ref={ref} className="w-full min-h-screen">
      <div className="mx-auto max-w-[800px] flex flex-col gap-8 items-center p-[30px]">
        <p className="col-span-6 col-start-4 font-bold text-[18px] xl:text-[24px]">
          My name is Lucas Pennice, a Software Developer with a strong
          background in React, React Native, and SwiftUI.{" "}
        </p>

        {/* UTN */}
        <a className="w-full p-4 flex items-center rounded-[15px] hover:bg-white hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)]">
          <img src={utn} className="w-[42px] h-[42px] rounded-sm mr-4" />
          <div className="flex-1 flex flex-col items-start">
            <h1 className="font-medium text-lg leading-5">
              Bachelor of Engineering in Information Systems
            </h1>

            <h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
              (2021 - 2026)
            </h3>
          </div>
        </a>

        {/* Machine learning Spec. */}
        <a
          className="w-full p-4 flex items-center  rounded-[15px] hover:bg-white hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)]"
          href="https://www.coursera.org/account/accomplishments/specialization/G42NIG1TGXI8"
          target="_blank"
        >
          <img src={sfOnline} className="w-[42px] h-[42px] rounded-sm mr-4" />
          <div className="flex-1 flex flex-col items-start">
            <h1 className="font-medium text-lg leading-5">
              Machine Learning Specialization
            </h1>

            <h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
              (2024) Stanford Online
            </h3>
          </div>
          <FaChevronRight color="#0C1A27" opacity={0.5} />
        </a>

        {/* NYU. */}
        <a
          href="https://credentials.edx.org/credentials/2f22b253e7b34eeab6d2c6f207484e0f/"
          target="_blank"
          className="w-full p-4 flex items-center  rounded-[15px] hover:bg-white hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)]"
        >
          <img src={nyuX} className="w-[42px] h-[42px] rounded-sm mr-4" />
          <div className="flex-1 flex flex-col items-start">
            <h1 className="font-medium text-lg leading-5">
              Programming & Data Structures
            </h1>

            <h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
              (2022) NYUx
            </h3>
          </div>
          <FaChevronRight color="#0C1A27" opacity={0.5} />
        </a>

        {/* Cambridge. */}

        <a className="w-full p-4 flex items-center rounded-[15px] hover:bg-white hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)]">
          <img src={cambridge} className="w-[42px] h-[42px] rounded-sm mr-4" />
          <div className="flex-1 flex flex-col items-start">
            <h1 className="font-medium text-lg leading-5">
              Expert English Level
            </h1>

            <h3 className="text-[#0B1A28] font-medium text-sm opacity-60">
              (2019) Cambridge University Press
            </h3>
          </div>
        </a>

        <p className="w-full font-bold text-[18px] xl:text-[24px]">
          Proficient at
        </p>

        <div className="w-full flex gap-4 flex-wrap justify-center">
          {getAllTech().map((badge) => {
            return (
              <div
                key={badge.name}
                className="h-[120px] xl:h-[180px] bg-[#D9D9D9A2] rounded-[10px] flex flex-col justify-center items-center gap-2 w-[160px] xl:w-[220px] flex-shrink-0"
              >
                {badge.icon}
                <span
                  className={`font-medium text-[20px]`}
                  style={{ color: badge.color }}
                >
                  {badge.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ReadingSection({
  updateSectionInView,
}: {
  updateSectionInView: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) updateSectionInView();
  }, [isInView]);

  return (
    <div ref={ref} className="w-full min-h-screen mt-[50vh]">
      <div className="mx-auto max-w-[800px] flex flex-col gap-8 items-center p-[30px]">
        <p className="col-span-6 col-start-4 font-bold text-[18px] xl:text-[24px]">
          One of my biggest goals is to bla bla bla I learn the best through
          books and these are some of them:
        </p>

        <div className="w-full flex gap-4 flex-wrap justify-center">
          {getAllTech().map((badge) => {
            return (
              <div
                key={badge.name}
                className="h-[200px] xl:h-[250px] bg-[#D9D9D9A2] rounded-[10px] flex flex-col justify-center items-center gap-2 w-[160px] xl:w-[200px] flex-shrink-0"
              >
                {badge.icon}
                <span
                  className={`font-medium text-[20px]`}
                  style={{ color: badge.color }}
                >
                  {badge.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getAllTech() {
  const tech = workExperienceData.map((item) => item.techUsed).flat();
  return Array.from(new Set(tech.map((t) => t.name))).map((name) => {
    return tech.find((t) => t.name === name);
  }) as {
    icon: JSX.Element;
    name: string;
    color: string;
  }[];
}

function ScrollIndicator({
  sectionInView,
}: {
  sectionInView: "work" | "about" | "reading";
}) {
  const OFFSET = 52;

  const getLeftPosition = () => {
    if (sectionInView === "about") return 150 + OFFSET;
    if (sectionInView === "reading") return 150 * 2 + OFFSET;
    return OFFSET;
  };

  return (
    <div className="bg-white p-1 fixed bottom-[30px] left-1/2 -translate-x-1/2 h-[52px] rounded-[15px] shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] z-10 hidden xl:flex">
      <div className="h-full aspect-square bg-black rounded-[10px] text-white font-bold text-[24px] flex justify-center items-center">
        L.
      </div>

      <motion.div
        className={`bg-[#D9D9D9] h-[44px] w-[146px] rounded-[10px] absolute`}
        animate={{ left: getLeftPosition() }}
        initial={{ left: OFFSET }}
      />

      <div className="h-full w-[150px] flex justify-center items-center z-10">
        Work
      </div>
      <div className="h-full w-[150px] flex justify-center items-center z-10">
        About
      </div>
      <div className="h-full w-[150px] flex justify-center items-center z-10">
        Reading
      </div>
    </div>
  );
}
