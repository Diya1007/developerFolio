/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Diya Singh",
  title: "Hi all, I'm Diya",
  subTitle: emoji(
"A Software Engineer and Computer Science graduate student passionate about building intelligent applications and scalable systems. With experience in enterprise software at Adobe and AI-driven development during my internship at Eli Lilly, I enjoy solving complex problems and developing technology that creates real impact."
),
  resumeLink:
    "hhttps://drive.google.com/file/d/1-9pepiFgggYtTV4__AJ0mb5FABASHpiZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Diya1007",
  linkedin: "https://www.linkedin.com/in/diyasingh/",
  email: "diysingh@iu.edu",
  display: true,
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
emoji("⚡ Experience developing backend applications and APIs using Python and Java"),
emoji("⚡ Develop AI-powered applications and data-driven solutions using machine learning and analytics frameworks."),
emoji("⚡ Create automation frameworks and testing solutions to improve software reliability and performance."),
emoji("⚡ Use Git and modern development tools to collaborate on software projects.")
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indiana University Indianapolis",
      logo: require("./assets/images/IUI.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - December 2026",
      GPA:"4.0",
      desc: "Ranked top 10% in the program. Took courses about Data Structure & Alogrithm, Software Engineering, Data Science, Cloud Computing, Operating Systems",
    },
    {
      schoolName: "Rajasthan Technical University",
      logo: require("./assets/images/RTU.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2010 - June 2014",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Testing/Automation",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineer",
      company: "Adobe",
      companylogo: require("./assets/images/Ad.png"),
      date: "June 2017 – March 2024",
      desc: "Senior Software Engineer at Adobe developing automated testing frameworks and performance validation tools for font rendering systems used across Adobe Creative Cloud products.",
      
    },
    {
      role: "Technology Intern",
      company: "Eli Lilly",
      companylogo: require("./assets/images/Lilly-Logo.png"),
      date: "May 2025 – August 2025",
      desc: "Technology Intern at Eli Lilly developed an AI-driven web application that enhances meeting accessibility through sentiment analysis and automated summaries."
    },
    {
      role: "Software Development Engineer in Testing",
      company: "Brillio",
      companylogo: require("./assets/images/Brillio_company_logo.png"),
      date: "March 2016 – April 2017",
      desc: "Software Engineer in Testing(SDET) at Brillio worked on building automated testing solutions using Selenium, Cucumber, and Protractor for enterprise web applications."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "SOME Academic Projects that I worked on",
  projects: [
    {
      image: require("./assets/images/AIrbnbExpo.png"),
      projectName: "AirBnB Explorer",
      projectDesc: "This is an interactive data analytics web application that visualizes Airbnb listings and predicts review scores using machine learning models. Users can explore property trends through maps, filters, and data visualizations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://airbnb-final.streamlit.app"
        },
        {
          name: "Git URL",
          url: "https://github.com/Diya1007/AirBnb_DS_Project"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/CloudDocs.png"),
      projectName: "CloudDocs",
      projectDesc: "An intelligent cloud-based system that enables students to securely store, manage, and search documents using AI-powered text extraction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        },
        {
          name: "Git URL",
          url: "https://github.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Kudos Award",
      subtitle:
        "Awarded with “Kudos” for excellent contribution in brainstorming validating the SVG font support feature in Cooltype",
      image: require("./assets/images/Ad.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
       
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1hKJRSdcAQbBQTjELCJQ_jkV9--LfYi96/view?usp=drive_link"
        },
        
      ]
    },
    {
      title: "Best Design Award: 2025 Intern Combine & Hackathon",
      subtitle: "Recognized as the Best Overall Design out of 50+ interns for creating PIVOT (Personalized Intern Virtual Onboarding Tool), an AI-powered assistant for onboarding new interns",
      image: require("./assets/images/Lilly-Logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
        name:"Award Pic",
        url:"https://drive.google.com/file/d/1LlvAeRBzdfZPLqkCUkw3TJYYk7v07veT/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Introduction to Artificial Intelligence: HarvardX",
      subtitle:
        "Introduction to Artificial Intelligence with Python, a Harvard course covering core AI concepts such as search, machine learning, and natural language processing through hands-on Python projects.",
      image: require("./assets/images/HarvardX.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Just want to say hi? My Inbox is open for all.",
  number: "+1-930-904-0062",
  email_address: "diysingh@iu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
