import ProfilePic from "./gokul.jpg";

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

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "constants" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../constants/gokul.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "constants" directory
//     i.e resume: require("../constants/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: ProfilePic,
  imageSize: 375,
  message:
    "My name is Gokul. I’m currently enrolled in a four semeter graduate certificate program at Conestoga College(Waterloo Campus), Ontario, Canada. I have a Batchelors degree in Information Technology. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume:
    "https://drive.google.com/file/d/1wv2vJUqaG2ou-3JrNb2J6IfkjI6sdBAH/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
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
    NAME: "Git",
    COMPONENT: "DiGit",
  },
  {
    NAME: "Firebase",
    COMPONENT: "SiFirebase",
  },
];

const toolStack = [
  {
    NAME: "Linux",
    COMPONENT: "SiLinux",
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
    NAME: "Jira",
    COMPONENT: "FaJira",
  },
  {
    NAME: "Bitbucket",
    COMPONENT: "DiBitbucket",
  },
  {
    NAME: "Postman",
    COMPONENT: "SiPostman",
  },
  {
    NAME: "Heroku",
    COMPONENT: "SiHeroku",
  },
];

const projects = [];

export { home, about, repos, techStack, toolStack, projects };
