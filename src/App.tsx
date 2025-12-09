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
    url: "https://github.com/LucasPennice/React-Native-Skill-Trees",
    techUsed: [
      {
        icon: <FaSwift size={50} opacity={0.6} color="#FF3D00" />,
        name: "SwiftUI",
        color: "#FF3D00",
      },
      {
        icon: <SiMixpanel size={50} opacity={0.6} color="#800080" />,
        name: "MixPanel",
        color: "#800080",
      },
      {
        icon: <FaMoneyCheck size={50} opacity={0.6} color="#FF1E56" />,
        name: "RevenueCat",
        color: "#FF1E56",
      },
      {
        icon: <FaReact size={50} opacity={0.6} color="#03A9F4" />,
        name: "React Native",
        color: "#03A9F4",
      },
      {
        icon: <FaSwift size={50} opacity={0.6} color="#1976D2" />,
        name: "TypeScript",
        color: "#1976D2",
      },
      {
        icon: <SiExpress size={50} opacity={0.6} color="#008000" />,
        name: "ExpressJS",
        color: "#008000",
      },
      {
        icon: <SiMongodb size={50} opacity={0.6} color="#008000" />,
        name: "MongoDB",
        color: "#008000",
      },
    ],
    description: [
      "Created Skill Trees, a gamified goal-tracking app initially built with React Native + Skia and later rebuilt in SwiftUI for better iOS performance. Implemented custom hierarchical and radial layouts inspired by Reingold–Tilford and Sugiyama algorithms. Backend in ExpressJS with RevenueCat, SendGrid, and automated surveys. Reached 1,700+ users on Android.",
    ],
    images: [
      {
        src: "/projectsScreenshots/skilltrees/4.png",
        aspectRatio: "2580/2796",
      },
      {
        src: "/projectsScreenshots/skilltrees/5.png",
        aspectRatio: "2580/2796",
      },
      { src: "/projectsScreenshots/skilltrees/1.png", aspectRatio: "700/1296" },
      { src: "/projectsScreenshots/skilltrees/2.png", aspectRatio: "700/1296" },
      { src: "/projectsScreenshots/skilltrees/3.png", aspectRatio: "700/1296" },
    ],
  },
  {
    name: "MyBrainPro",
    role: "Solo Founder & Software Engineer",
    timeInCompany: "(2024)",
    url: "https://github.com/LucasPennice/SwiftUI-My-Brain-Pro",
    techUsed: [
      {
        icon: <FaSwift size={50} opacity={0.6} color="#FF3D00" />,
        name: "SwiftUI",
        color: "#FF3D00",
      },
      {
        icon: <SiMixpanel size={50} opacity={0.6} color="#800080" />,
        name: "MixPanel",
        color: "#800080",
      },
      {
        icon: <FaMoneyCheck size={50} opacity={0.6} color="#FF1E56" />,
        name: "RevenueCat",
        color: "#FF1E56",
      },
      {
        icon: <FaSwift size={50} opacity={0.6} color="#1976D2" />,
        name: "TypeScript",
        color: "#1976D2",
      },
      {
        icon: <SiExpress size={50} opacity={0.6} color="#008000" />,
        name: "ExpressJS",
        color: "#008000",
      },
      {
        icon: <SiMongodb size={50} opacity={0.6} color="#008000" />,
        name: "MongoDB",
        color: "#008000",
      },
    ],
    description: [
      "I built MyBrainPro to help people with ADHD stay focused on long-term projects. It’s built with SwiftUI, SwiftData, and SwiftCharts, with an Express.js backend handling user data, RevenueCat webhooks, and SendGrid. I launched it on TestFlight with 80 testers and verified everything with end-to-end tests in Xcode.",
    ],
    images: [
      { src: "/projectsScreenshots/mybrainpro/1.png", aspectRatio: "473/932" },
      { src: "/projectsScreenshots/mybrainpro/2.png", aspectRatio: "473/932" },
      { src: "/projectsScreenshots/mybrainpro/3.png", aspectRatio: "473/932" },
      { src: "/projectsScreenshots/mybrainpro/4.png", aspectRatio: "473/932" },
      { src: "/projectsScreenshots/mybrainpro/5.png", aspectRatio: "473/932" },
      { src: "/projectsScreenshots/mybrainpro/6.png", aspectRatio: "473/932" },
    ],
  },
  {
    name: "TrackerWallet",
    role: "Front End Software Engineer",
    timeInCompany: "(2022)",
    techUsed: [
      {
        icon: <SiNextdotjs size={50} opacity={0.6} color="#333333" />,
        name: "NextJs",
        color: "#333333",
      },
      {
        icon: <FaSwift size={50} opacity={0.6} color="#1976D2" />,
        name: "TypeScript",
        color: "#1976D2",
      },
    ],
    description: [
      "As lead developer, I chose the tech stack, designed the app and backend API, and built a mock API for testing. Using TypeScript, I wrote clean, modular code, implemented recursive algorithms for tree data, and added custom SVG rendering and filters for sub-trees and balances, creating a smooth, user-friendly experience.",
    ],
    images: [
      {
        src: "/projectsScreenshots/trackerWallet/dashboard1.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/trackerWallet/dashboard2.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/trackerWallet/map.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/trackerWallet/mapeditnode.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/trackerWallet/mapfiltercolor.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/trackerWallet/maptree.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/trackerWallet/profile.png",
        aspectRatio: "2560/1358",
      },
    ],
  },
  {
    name: "CreatorSet",
    role: "Front End Software Engineer",
    timeInCompany: "(2021 - 2022)",
    techUsed: [
      {
        icon: <FaSwift size={50} opacity={0.6} color="#1976D2" />,
        name: "TypeScript",
        color: "#1976D2",
      },
      {
        icon: <FaReact size={50} opacity={0.6} color="#03A9F4" />,
        name: "React",
        color: "#03A9F4",
      },
      {
        icon: <SiRedux size={50} opacity={0.6} color="#800080" />,
        name: "Redux",
        color: "#800080",
      },
      {
        icon: <SiWebpack size={50} opacity={0.6} color="#FBA200" />,
        name: "Webpack",
        color: "#FBA200",
      },
      {
        icon: <SiMongodb size={50} opacity={0.6} color="#008000" />,
        name: "MongoDB",
        color: "#008000",
      },
    ],
    description: [
      "Led the migration from MUI to custom components and a partial shift from JavaScript to TypeScript in a React app. Replaced Webpack with ESbuild, reducing load times by 22×. Integrated backend APIs, built upload forms for images, videos, and files, and implemented polling, undo/redo, a custom video player, and a YouTube thumbnail preview simulator with YouTube API autocompletion.",
    ],
    images: [
      {
        src: "/projectsScreenshots/creatorSet/captiontool.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/creatorSet/captiontoolpage.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/creatorSet/editProfile.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/creatorSet/login.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/creatorSet/newProduct.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/creatorSet/profanitychecker.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/creatorSet/store.png",
        aspectRatio: "2560/1358",
      },
      {
        src: "/projectsScreenshots/creatorSet/thumbnailPreviewer.png",
        aspectRatio: "2560/1358",
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
      className="w-full h-screen relative grid grid-cols-12 grid-rows-[repeat(16,1fr)] p-[8px] xl:p-[30px] gap-x-[30px] gap-y-[8px]"
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="col-start-1 col-end-12 row-start-4 xl:col-start-6 xl:col-end-10 xl:row-start-7 xl:row-end-10 flex flex-col justify-center"
      >
        <p className="font-bold text-[24px]">Lucas Pennice,</p>
        <p className="font-bold text-[24px]">
          {/* Software Engineer at{" "} */}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Software Engineer
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

      <AnimatePresence>
        {projectOpened && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="absolute col-span-full h-[calc(100vh-60px)] max-h-[780px] xl:col-start-5 xl:col-end-12 bg-white shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] grid grid-cols-7 grid-rows-[repeat(13,1fr)] p-[30px] gap-x-[20px] gap-y-[8px] rounded-[20px] self-center overflow-hidden z-10"
            style={{ gridRow: "2 / span 13" }}
          >
            {projectOpened && (
              <button
                onClick={openProject(projectOpened.name)}
                className="xl:hidden absolute right-4 top-4 bg-[#AFAFAF]  h-[50px] w-[50px] rounded-full flex justify-center items-center"
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

              {/* {projectOpened.url && (
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
              )} */}
              {projectOpened.url && (
                <a
                  href={projectOpened.url}
                  target="_blank"
                  className="hidden xl:flex items-center px-4 gap-1 hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.1)] p-1 rounded-md"
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
              className="col-span-full row-span-2 font-light text-[12px] md:text-[14px] xl:text-[18px] my-auto"
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
                    className="h-full bg-[#e8e8e8a2] rounded-[10px] flex flex-col justify-center items-center gap-2 w-[200px] flex-shrink-0"
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
                  <ProjectImage
                    key={projectOpened.name + idx + "src"}
                    src={img.src}
                    aspectRatio={img.aspectRatio}
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

function ProjectImage({
  src,
  aspectRatio,
}: {
  src: string;
  aspectRatio: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative" style={{ aspectRatio }}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#e5e7eb] animate-pulse rounded-[15px]" />
      )}
      <img
        src={src}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 rounded-[15px] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
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
          Hi, I'm Lucas. I love building software that makes people's work
          easier. I've spent the past few years designing and developing apps.
          From gamified goal-tracking systems to SaaS tools used by real teams
          on monday.com. My focus is on simplicity, good design, and solving
          real problems through clean engineering.
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
          My Engineering Toolkit
        </p>

        <div className="w-full flex gap-4 flex-wrap justify-center">
          {getAllTech().map((badge) => {
            return (
              <div
                key={badge.name}
                className="h-[120px] filter grayscale hover:grayscale-0 xl:h-[180px] hover:bg-white hover:shadow-[0_0_24px_2px_rgba(0,0,0,0.25)] transition-all rounded-[10px] flex flex-col justify-center items-center gap-2 w-[160px] xl:w-[220px] flex-shrink-0"
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

const books = [
  { src: "/books/cicd.jpg", read: true },
  { src: "/books/cleanarc.jpg", read: true },
  { src: "/books/cleancode.jpg", read: true },
  { src: "/books/cleancoder.webp", read: true },
  { src: "/books/ddd.jpg", read: false },
  { src: "/books/ddia.jpg", read: false },
  { src: "/books/dockerbook.jpeg", read: false },
  { src: "/books/dwa.jpeg", read: true },
  { src: "/books/eloquentjs.jpg", read: true },
  { src: "/books/hfdp.jpeg", read: false },
  { src: "/books/peaa.jpg", read: false },
  { src: "/books/pofsoftwared.jpg", read: true },
  { src: "/books/pragmaticprogrammer.jpg", read: true },
  { src: "/books/refactoring.jpg", read: false },
  { src: "/books/refactoringui.png", read: true },
  { src: "/books/sdi.webp", read: false },
  { src: "/books/sdi2.webp", read: false },
  { src: "/books/sweatgoogle.jpg", read: false },
  { src: "/books/psql.jpeg", read: false },
  { src: "/books/tdd.jpg", read: true },
];

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
          One of my biggest goals is to be able to build whatever I imagine.
          From SaaS tools that small and medium businesses would love, to
          large-scale consumer apps like Spotify. Here are the books I've read
          (and plan to read) to help me get there.
        </p>

        <div className="w-full flex gap-4 flex-wrap justify-center">
          {books.map((book, idx) => {
            return (
              <div
                key={idx}
                className="h-[200px] p-6 xl:h-[250px] bg-[#D9D9D9A2] rounded-[10px] flex flex-col justify-center items-center gap-2 w-[160px] xl:w-[200px] flex-shrink-0"
              >
                <img
                  src={book.src}
                  className={`rounded-md ${!book.read && "opacity-30"}`}
                />
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
