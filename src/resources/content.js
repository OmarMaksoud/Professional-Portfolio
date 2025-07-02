import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Omar",
  lastName: "AbdelMaksoud",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "omarmaksoud10@gmail.com",
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
    link: "https://github.com/OmarMaksoud",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/omar-abdelmaksoud-48366524a/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@omar.abdelmaksoud.581",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "document",
    link: "/Omar-Abdel-Maksoud-Resume.pdf",
    download: "Omar-Abdel-Maksoud-Resume.pdf",
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
      I’m Omar, a software engineer building scalable web, mobile,
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
    link: "https://cal.com/omar-maksoud/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Omar is a Cairo-based software engineer passionate about turning
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
        company: "Orange Egypt",
        timeframe: "Summer 2023",
        role: "IT Intern",
        achievements: [
          <>
            Participated in the .NET development team, applying .NET technologies to real-world enterprise projects.
          </>,
          <>
            Worked in the Quality of Service IT department, handling databases and aggregated tables to monitor and detect data anomalies.
          </>,
          <>
            Gained hands-on experience in Tableau administration, enhancing reporting and data visualization capabilities.
          </>,
          <>
            Acquired practical knowledge in Business Process Management, contributing to IT workflow analysis and optimization.
          </>,
        ],
        images: [],
      },
      {
        company: "Ejada Systems",
        timeframe: "Summer 2023",
        role: "Oracle ERP Intern",
        achievements: [
          <>
            Developed strong proficiency in Oracle SQL and PL/SQL by applying them in business-oriented use cases.
          </>,
          <>
            Designed and deployed a fully functional e-commerce website using Oracle APEX, demonstrating applied technical and design skills.
          </>,
          <>
            Built a solid understanding of ERP fundamentals and Oracle technology stack through structured hands-on training.
          </>,
        ],
        images: [],
      },
    ],},
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
            Algorithms, Database, Advanced Database Systems,Design of Compilers, Artificial
            Intelligence, Operating Systems, Computer Networks, Big-Data Analytics, Software Design Patterns .
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
            HTML, CSS, Jquery, Bootstrap, Tailwind, SQL,Data Science.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Concepts",
        description: (
          <>
            RESTful APIs,Software Design Patterns, Object Oriented
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
