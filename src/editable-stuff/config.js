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
  message: " Passionate about changing the world positively with the power of data.",
  icons: [
    {
      image: "far fa-calendar-plus",
      url: "https://calendly.com/uribealejandro/30min",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ualejandro/",
    },
    {
      image: "fab fa-brands fa-medium",
      url: "https://medium.com/@uribealejandro"
    },
    {
      image: "fa-github",
      url: "https://github.com/UribeAlejandro",
    },
    {
      image: "fa-brands fa-kaggle",
      url: "https://www.kaggle.com/alejandrouribe"
    },
    {
      image: "fa-brands fa-hackerrank",
      url: "https://www.hackerrank.com/UribeAlejandro"
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
    "I am a Machine Learning Engineer with experience in building AI models, implementing data warehouses, and introducing automation to improve analytics efficiency. Currently, I am studying a Master in Artificial Intelligence. I have a Postgraduate Diploma in Artificial Intelligence, and a Bachelor's Degree in Chemical Engineering. I am passionate about data and its power to change the world positively, thus my goal is to pursue this passion within the field of Artificial Intelligence. In my free time I enjoy running, cycling and watching movies.",
  resume: "https://docs.google.com/document/d/1vtL4pj9FiRJ2kxAWUQ4MtOaJYYXpX2_7bSRJcZDqtLw/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "UribeAlejandro",
  reposLength: 0,
  specificRepos: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    'NLP_MovieReviews_SentimentAnalysis',
    'RecommenderSystem_Movies',
    'ComputerVision_MNIST',
    'Python_TicTacToe',
    'ComputerVision_SVHN',
    'NaiveBayes-with-TensorFlowProbability',
=======
      'Hands_On_MLFlow',
      'Do_not_Believe_the_Hype',
      'Scala_ML_LinearRegression',
      'Scala_ML_PCA',
      'ComputerVision_MNIST',
      'ComputerVision_SVHN',
>>>>>>> 9135c21 (Added updated info: Education, Work Experience, Skills and Repos)
=======
=======
    'ExperimentTracking-StrategyPattern',
>>>>>>> 27574a0 (Updates)
    'Hands_On_MLFlow',
    'Scala_ML_PCA',
    'Scala_ML_LinearRegression',
>>>>>>> 7cbe713 (Added link to links-tree, corrected dates of job, modified link to curriculum)
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python / R" },
    { name: "Java / Scala" },
    { name: "SQL / NoSQL" },


    { name: "MLOps" },
    { name: "Machine Learning Operations" },
    { name: "Machine Learning / Deep Learning" },

    { name: "AWS / GCP" },
    { name: "SnowFlake" },
    { name: "Databricks" },
  ],
  interests: [
    { name: "Cycling" },
    { name: "Photography" },

    { name: "Nuclear Energy" },
    { name: "Distributed computing" },

    { name: "Internet of Things" },
    { name: "Embedded Systems" },

  ],
  languages: [
    { name: "Spanish", value: 'Native' },
    { name: "English", value: 'Full Professional Proficiency' },
    { name: "French", value: 'Elementary Proficiency' },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am currently looking for full-time and freelance Artificial Intelligence related opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "contact.uribe.alejandro@gmail.com",
};

const experiences = {
  show: true,
  heading: "Work Experience",
  data: [
    {
      role: 'Machine Learning Engineer',
      companyname: 'Factored AI',
      companywebpage: "https://www.factored.ai/",
      date: 'April 2022 - Present',
    },
    {
      role: 'Machine Learning Engineer',
      companyname: 'Celes',
      companywebpage: "https://www.getceles.com/",
      date: 'March 2021 - March 2022',
    },
    {
      role: 'Business Intelligence / Data Analyst Intern',
      companyname: 'Virtuagym',
      companywebpage: "https://virtuagym.com/",
      date: 'September 2020 - February 2021',
    },
    {
      role: 'Risk Management Supervisor / Risk Management Analyst / Workplan Sports Trader',
      companyname: 'Genius Sports',
      companywebpage: "https://geniussports.com/",
      date: 'July 2018 - August 2020',
    },
    {
      role: 'International Exams Supervisor',
      companyname: 'British Council',
      companywebpage: "https://www.britishcouncil.co/",
      date: 'October 2016 - Dec 2018',
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      title: 'Data Mining & Knowledge Discovery',
      degree: "Master's degree",
      institution: "University of Buenos Aires",
      url: "https://www.uba.ar/",
      date: '2022 - 2024',
    },
    {
      title: 'Data Mining & Knowledge Discovery',
      degree: "Postgraduate Diploma",
      institution: "University of Buenos Aires",
      url: "https://www.uba.ar/",
      date: '2022 - 2023',
    },
    {
      title: 'Artificial Intelligence Specialist',
      degree: 'Postgraduate Diploma',
      institution: "National University of Colombia",
      url: "https://unal.edu.co/",
      date: '2020 - 2021',
    },
    {
      title: 'Chemical Engineer',
      degree: 'Bachelor of Engineering',
      institution: "National University of Colombia",
      url: "https://unal.edu.co/",
      date: '2012 - 2017',
    },
  ]
}

<<<<<<< HEAD
<<<<<<< HEAD
export { navBar, mainBody, about, repos, skills, getInTouch, experiences, education };
=======
export { navBar, mainBody, about, repos, skills, getInTouch, experiences, education};
=======
export { navBar, mainBody, about, repos, skills, getInTouch, experiences, education };
>>>>>>> 7cbe713 (Added link to links-tree, corrected dates of job, modified link to curriculum)

>>>>>>> 9135c21 (Added updated info: Education, Work Experience, Skills and Repos)
