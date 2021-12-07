// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Alejandro",
  middleName: "",
  lastName: "Uribe",
  message: " Passionate about changing the world positively with the power of the data.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/UribeAlejandro",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jauribe/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/UribeAlejandro.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageSize: 375,
  message:
    "My name is Alejandro Uribe. I am a graduate fom National University of Colombia with a degree in Chemical Engineering and a Postgraduate Diploma in Artificial Intelligence. I am passionate about data and its power to change the world positively, and my goal is to pursue this passion within the field of Artificial Intelligence. In my free time I enjoy cycling and watching movies.",
  resume: "https://drive.google.com/file/d/1dizt8vGomK_Vk9zw_EQp1rCGszdxpXBM/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "UribeAlejandro", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
  'NLP_MovieReviews_SentimentAnalysis',
  'ComputerVision_MNIST',
  'NaiveBayes-with-TensorFlowProbability',
  'RecommenderSystem_Movies',
  'Python_TicTacToe',
  'ComputerVision_SVHN'
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      // img: require("../editable-stuff/UribeAlejandro.png"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      // img: require("../editable-stuff/UribeAlejandro.png"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },

  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python"},
    { name: "SQL"},
    { name: "Google Cloud Platform" },
    { name: "Amazon Web Services" },
    { name: "Artificial Intelligence" },
    { name: "Docker" },
    { name: "TensorFlow" },
    { name: "Scikit-Learn" },
    { name: "Pandas" },
  ],
  softSkills: [
    { name: "Goal-Oriented" },
    { name: "Collaboration" },
    { name: "Positivity" },
    { name: "Adaptability" },
    { name: "Problem Solving" },
    { name: "Empathy" },
    { name: "Organization" },
    { name: "Creativity" },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am currently looking for full-time Artificial Intelligence related opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jauriberamirez@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Machine Learning Engineer',
      companyname: 'Datavalue.AI',
      date: 'March 2021 – Present',
    },
    {
      role: 'Business Intelligence / Data Analyst Intern',
      companyname: 'Virtuagym',
      date: 'September 2020 – February 2021',
    },
    {
      role: 'Risk Management Supervisor / Risk Management Analyst / Workplan Sports Trader',
      companyname: 'Genius Sports',
      date: 'July 2018 – August 2020',
    },
    {
      role: 'International Exams Supervisor',
      companyname: 'British Council',
      date: 'July 2018 – August 2020',
    },
  ]
}

//Blog SECTION
//const blog = {
//    show: true,
//};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences};
