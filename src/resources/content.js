import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ahmed",
  lastName: "Wael",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "ahmedwael130@gmail.com",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ahmedwaei",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmedwaels/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@ahmedwael____",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bringing products to life through thoughtful code</>,
  featured: {
    display: false,
    title: <></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Ahmed, a software engineer building scalable web, mobile, and cloud
      solutions,
      <br /> I work with React, Flutter, Node.js, .NET, and Django, and explore
      AI and data science in my spare time.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ahmed is a Cairo-based software engineer passionate about turning
        complex problems into robust, user-friendly applications. His work
        bridges web, mobile, and cloud platforms, blending full-stack
        development, data-driven insights, and the latest in AI technologies.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SOULCHI International",
        timeframe: "Oct 2024 - May 2025",
        role: "Junior FullStack Developer",

        achievements: [
          <>
            Actively contributed as a Flutter developer, enhancing UI/UX and app
            functionality.
          </>,
          <>
            Developed unit tests for all pages and integration tests to ensure
            application reliability and performance.
          </>,
          <>
            Assisted extensively with Firebase integration and explored AI
            technologies like LangChain and Langraph.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-02/soulchi1.jpeg",
            alt: "Once UI Project",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/project-02/soulchi2.jpeg",
            alt: "Once UI Project",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/project-02/soulchi3.jpeg",
            alt: "Once UI Project",
            width: 9,
            height: 16,
          },

          {
            src: "/images/projects/project-02/soulchi5.jpeg",
            alt: "Once UI Project",
            width: 9,
            height: 16,
          },
        ],
      },
      {
        company: "Techsa",
        timeframe: "July 2024 - September 2024",
        role: "FullStack Engineer Intern",
        achievements: [
          <>
            Contributed to the development of the Merge application, focusing on
            freight matching algorithms and their implementation.
          </>,
          <>
            Implemented authentication and authorization features across both
            backend (ASP.NET) and frontend (Flutter) platforms.
          </>,
        ],
        images: [],
      },
      {
        company: "Global Brands Group",
        timeframe: "July 2024 - September 2024",
        role: "Cloud Engineer Intern",
        achievements: [
          <>
            Acquired hands-on experience in deploying web applications on AWS
            instances, ensuring scalable and reliable performance. Implemented
            auto-scaling solutions to dynamically adjust the number of instances
            based on server load.
          </>,
          <>
            Configured load balancers to efficiently distribute traffic across
            multiple instances, enhancing application availability.
          </>,
          <>
            Developed ACL rules, firewall settings, and security groups to
            enforce robust security measures and protect cloud resources.{" "}
          </>,
        ],
        images: [],
      },
      {
        company: "Technocolabs",
        timeframe: "July 2023 - September 2023",
        role: "Data Analysis Intern",
        achievements: [
          <>
            Crafted a machine learning model to predict song popularity by
            scraping song data from Spotify APIs, extracting audio features from
            choruses, and performing data analysis with accuracy of 73%.
          </>,
          <>
            Built a website with Spotify integration that classifies
            user-uploaded songs or Spotify links as popular or non-popular using
            the machine learning model.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Faculty of Engineering Ainshams University",
        description: (
          <>Bachelor of Science in Computer and Systems Engineering.</>
        ),
      },
      {
        name: "Relevant Coursework",
        description: (
          <>
            Algorithms, Database, Advanced Database Systems, Machine Learning
            and Pattern Recognition, Design of Compilers, Artificial
            Intelligence, Operating Systems, Computer Networks, Big-Data
            Analytics, Software Design Patterns .
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <> C, C++, Java, JavaScript, Dart, Python.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {},
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "FrameWorks",
        description: <>React, VueJs, Django, NodeJs, Flutter, ASP.Net</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Others",
        description: (
          <>
            HTML, CSS, Jquery, Bootstrap, Tailwind, SQL, MachineLearning, Data
            Science, Langchain, Langgraph.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Concepts",
        description: (
          <>
            RESTful APIs, gRPC, Software Design Patterns, Object Oriented
            Programming, Data Structures.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software engineering and AI projects by ${person.name} — building robust apps, smart systems, and seamless user experiences.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
