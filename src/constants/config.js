import ProfilePic from "./gokul.jpg";

//projects gif
import TecWorkshop from "../assets/img/projects/tec-workshop.gif";
import Portfolio from "../assets/img/projects/sandhya-portfolio.gif";
import CbeShopping from "../assets/img/projects/cbe-shopping.gif";
import TripZone from "../assets/img/projects/tripzone.gif";
import Explorer from "../assets/img/projects/explorer.gif";
import LittleBook from "../assets/img/projects/little-book.gif";
import RedAndWhite from "../assets/img/projects/red-and-white.png";
import StyleHub from "../assets/img/projects/stylehub.gif";

//codepen gif
import BabyKobe from "../assets/img/projects/baby-kobe.gif";
import BurgerMenu from "../assets/img/projects/burger-menu.gif";
import MinimalEnvelope from "../assets/img/projects/minimal-envelope-animation.gif";
import PageTurn from "../assets/img/projects/page-turn-animation.gif";
import SearchAnimation from "../assets/img/projects/search-animation.gif";
import WalletAppAnimation from "../assets/img/projects/wallet-app-animation.gif";
import WhimsicalMoodBoard from "../assets/img/projects/whimsical-mood-board.gif";

// Home
const home = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Gokul",
  middleName: "",
  lastName: "Ramesh",
  message:
    " A leading-edge solution developer. I'm always up for challenges and enthusiastic about learning the nuances in coding. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/gokulramesh94",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/gokulramesh94",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/the__high__tide/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gokulramesh94/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/gokulramesh94/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: ProfilePic,
  imageSize: 375,
  message:
    "My name is Gokul. I’m currently enrolled in a four semester graduate certificate program at Conestoga College(Waterloo Campus), ON - Canada. I have a Bachelors degree in Information Technology. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "gokulramesh94",
  reposLength: 13,
  specificRepos: [],
};

const techStack = [
  {
    NAME: "Javascript",
    COMPONENT: "DiJavascript1",
  },
  {
    NAME: "Typescript",
    COMPONENT: "SiTypescript",
  },
  {
    NAME: "Bootstrap",
    COMPONENT: "FaBootstrap",
  },
  {
    NAME: "Sass",
    COMPONENT: "DiSass",
  },
  {
    NAME: "JQuery",
    COMPONENT: "SiJquery",
  },
  {
    NAME: "Node JS",
    COMPONENT: "DiNodejs",
  },
  {
    NAME: "React",
    COMPONENT: "FaReact",
  },
  {
    NAME: "Vue",
    COMPONENT: "FaVuejs",
  },
  {
    NAME: "GraphQl",
    COMPONENT: "SiGraphql",
  },
  {
    NAME: "Swift",
    COMPONENT: "SiSwift",
  },
  {
    NAME: "Java",
    COMPONENT: "FaJava",
  },
  {
    NAME: "C#",
    COMPONENT: "SiCsharp",
  },
  {
    NAME: "MySQL",
    COMPONENT: "SiMysql",
  },
  {
    NAME: "Mongo",
    COMPONENT: "DiMongodb",
  },
  {
    NAME: "Firebase",
    COMPONENT: "SiFirebase",
  },
];

const toolStack = [
  {
    NAME: "Adobe XD",
    COMPONENT: "SiAdobexd",
  },
  {
    NAME: "Visual Studio",
    COMPONENT: "SiVisualstudio",
  },
  {
    NAME: "VS Code",
    COMPONENT: "SiVisualstudiocode",
  },
  {
    NAME: "Eclipse",
    COMPONENT: "SiEclipseide",
  },
  {
    NAME: "Xcode",
    COMPONENT: "SiXcode",
  },
  {
    NAME: "Android Studio",
    COMPONENT: "SiAndroidstudio",
  },
  {
    NAME: "Jira",
    COMPONENT: "FaJira",
  },
  {
    NAME: "Trello",
    COMPONENT: "CgTrello",
  },
  {
    NAME: "Git",
    COMPONENT: "DiGit",
  },
  {
    NAME: "Bitbucket",
    COMPONENT: "DiBitbucket",
  },
  {
    NAME: "Azure Devops",
    COMPONENT: "SiAzuredevops",
  },
  {
    NAME: "Postman",
    COMPONENT: "SiPostman",
  },
  {
    NAME: "Heroku",
    COMPONENT: "SiHeroku",
  },
  {
    NAME: "Netlify",
    COMPONENT: "SiNetlify",
  },
  {
    NAME: "Linux",
    COMPONENT: "SiLinux",
  },
];

const work = {
  FILTERS: {
    ALL: { NAME: "All", FILTER: "show-all" },
    PROJECTS: { NAME: "Full Stack", FILTER: "projects" },
    CODEPEN: { NAME: "Codepen", FILTER: "codepen" },
  },
  PROJECTS: [
    {
      TITLE: "Tec Workshop",
      SITE_URL: "https://tecworkshop.in/",
      DESCRIPTION:
        "Tec Workshop is a portfolio website developed using React. The UX was designed by TIKI TAVI. The website showcases the client's work.",
      IMAGE: TecWorkshop,
      TECH_STACK: ["React", "Sass", "Email JS"],
    },
    {
      TITLE: "Portfolio",
      REPO_URL: "https://github.com/sandhyasubram/sandhyasubram.backup",
      DESCRIPTION:
        "This is a portfolio website for Sandhya Subramaniyan. She is a UX designer who wanted to showcase her designs in the mobile and web with a minimal yet functional layout.",
      IMAGE: Portfolio,
      TECH_STACK: ["React", "Sass", "GSAP"],
    },
    {
      TITLE: "CBE Shopping",
      REPO_URL: "https://github.com/diveethSivan/cbe-shopping",
      DESCRIPTION:
        "CBE Shopping is a based website devloped for the client to manage their operations. It is developed using React and Node JS. The database used is Mongo.",
      IMAGE: CbeShopping,
      TECH_STACK: ["React", "Sass", "Node JS", "Mongo"],
    },
    {
      TITLE: "Tripzone",
      REPO_URL: "https://github.com/gokulramesh94/tripzone",
      IMAGE: TripZone,
      TECH_STACK: ["React"],
    },
    {
      TITLE: "Little Book",
      REPO_URL: "https://github.com/gokulramesh94/little-book",
      IMAGE: LittleBook,
      TECH_STACK: ["React"],
    },
    {
      TITLE: "StyleHub",
      REPO_URL: "https://github.com/gokulramesh94/stylehub",
      IMAGE: StyleHub,
      TECH_STACK: ["Vue"],
    },
    // {
    //   TITLE: "CineFlix",
    //   REPO_URL: "https://github.com/gokulramesh94/cineflix",
    //   IMAGE: CineFlix,
    //   TECH_STACK: ["React"],
    // },
    {
      TITLE: "Explorer",
      REPO_URL: "https://github.com/gokulramesh94/explorer",
      IMAGE: Explorer,
      TECH_STACK: ["React"],
    },
    {
      TITLE: "Red And White",
      REPO_URL: "https://github.com/gokulramesh94/red-and-white",
      IMAGE: RedAndWhite,
      TECH_STACK: ["React"],
    },
  ],
  CODEPEN: [
    {
      TITLE: "Page Turn Animation using Turn JS",
      SITE_URL: "https://codepen.io/gokulramesh94/full/rNeMyop",
      IMAGE: PageTurn,
      TECH_STACK: ["JQuery", "GSAP", "Turn JS", "SCSS"],
    },
    {
      TITLE: "Wallet App Animation",
      SITE_URL: "https://codepen.io/gokulramesh94/full/RwrzJGr",
      IMAGE: WalletAppAnimation,
      TECH_STACK: ["JQuery", "GSAP", "SCSS"],
    },
    {
      TITLE: "Minimal Envelope Animation",
      SITE_URL: "https://codepen.io/gokulramesh94/full/WNrLoLG",
      IMAGE: MinimalEnvelope,
      TECH_STACK: ["JQuery", "GSAP", "SCSS"],
    },
    {
      TITLE: "Whimsical mood board",
      SITE_URL: "https://codepen.io/gokulramesh94/full/eYJVExY",
      IMAGE: WhimsicalMoodBoard,
      TECH_STACK: ["JQuery", "GSAP", "Swiper JS", "SCSS"],
    },
    {
      TITLE: "Burger Menu Animation",
      SITE_URL: "https://codepen.io/gokulramesh94/full/vYLboNL",
      IMAGE: BurgerMenu,
      TECH_STACK: ["JQuery", "GSAP", "SCSS"],
    },
    {
      TITLE: "Minimal Search Animation",
      SITE_URL: "https://codepen.io/gokulramesh94/full/ZEQNoYy",
      IMAGE: SearchAnimation,
      TECH_STACK: ["JQuery", "GSAP", "SCSS"],
    },
    {
      TITLE: "Baby Kobe",
      SITE_URL: "https://codepen.io/gokulramesh94/full/zYqGNmy",
      IMAGE: BabyKobe,
      TECH_STACK: ["JQuery", "GSAP", "SCSS"],
    },
  ],
};

const footer = {
  QUICK_LINKS: [
    {
      NAME: "Github",
      COMPONENT: "AiFillGithub",
      LINK: "https://github.com/gokulramesh94",
    },
    {
      NAME: "Codepen",
      COMPONENT: "FaCodepen",
      LINK: "https://codepen.io/gokulramesh94",
    },
    {
      NAME: "Twitter",
      COMPONENT: "AiOutlineTwitter",
      LINK: "https://twitter.com/gokulramesh94",
    },
    {
      NAME: "Linkedin",
      COMPONENT: "FaLinkedinIn",
      LINK: "https://www.linkedin.com/in/gokulramesh94/",
    },
    {
      NAME: "Instagram",
      COMPONENT: "AiFillInstagram",
      LINK: "https://www.instagram.com/the__high__tide/",
    },
  ],
};

export { home, about, repos, techStack, toolStack, work, footer };
