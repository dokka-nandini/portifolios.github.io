/* =====================================================================
   SITE CONTENT — edit this one file to update every page.
   Pages: index (landing), about, skills, projects, project (case study),
          experience, certifications, resume, contact.
   See README.md for step-by-step instructions.
   ===================================================================== */

window.SITE = {
  profile: {
    name: "Dokka Nandini",
    role: "Full Stack Developer",
    headline: "Full Stack Developer · MERN, Java, .NET & Angular",
    email: "nandini.programmer@gmail.com",
    phone: "+91 7671942008",
    phoneHref: "+917671942008",
    location: "Bengaluru, Karnataka, India",
    photo: "assets/img/profile.jpeg",
    linkedin: "https://www.linkedin.com/in/nandini-dokka-09733538a/",
    github: "https://github.com/dokka-nandini",
    portfolio: "https://dokka-nandini.github.io/",
    resumePdf: "assets/docs/Dokka-Nandini-Resume.pdf",
    titles: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "React & Angular Developer", "AI Enthusiast"],
    summary: "Full Stack Developer (2025 graduate) with hands-on experience building responsive web applications and REST APIs across the MERN stack (MongoDB, Express.js, React.js, Node.js), Java Spring Boot and Python FastAPI, with working knowledge of Angular, Next.js, React Native and C#/.NET. Strong in OOP, data structures & algorithms, SQL and clean, component-driven UI. Completed internships at Infosys and Rooman Technologies and Java Full Stack training at Besant Technologies. A quick learner seeking an internship-to-full-time role to grow as a full stack engineer.",
    about: [
      "I'm a full stack developer and a 2025 Electronics & Communication graduate who fell in love with software by building it. I enjoy the whole journey of a feature — designing a clean interface, wiring up the API behind it, modelling the data and shipping it.",
      "I work across React, Next.js, React Native and Angular on the frontend, and Spring Boot, FastAPI, Node.js and ASP.NET Core on the backend — with Docker, CI/CD and the cloud to take things to production. Alongside that, I'm deeply curious about Generative AI and how it can make software smarter.",
      "As a fresher, I bring strong fundamentals in OOP, data structures & algorithms and SQL, real project experience from internships and training, and a habit of learning fast."
    ],
    quote: "Curiosity creates possibilities. Engineering turns them into reality."
  },

  /* ---------- Role cards (Skills page + landing) ---------- */
  roles: [
    {
      id: "frontend", title: "Frontend", tagline: "Responsive, accessible, component-driven interfaces.", hue: 220,
      groups: [
        { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
        { label: "Frameworks", items: ["React.js", "Next.js", "React Native", "Angular"] },
        { label: "State & Data", items: ["Redux", "Zustand", "React Hooks", "React Router", "React Flow", "RxJS", "Axios / Fetch"] },
        { label: "Styling", items: ["Tailwind CSS", "Bootstrap", "Responsive Design", "CSS Animations"] }
      ]
    },
    {
      id: "backend", title: "Backend", tagline: "Secure REST APIs and services that scale.", hue: 265,
      groups: [
        { label: "Languages", items: ["Java", "Python", "C#", "JavaScript (Node.js)", "SQL"] },
        { label: "Frameworks", items: ["Spring Boot", "FastAPI", "Express.js", "Node.js", "ASP.NET Core Web API", "Entity Framework Core"] },
        { label: "APIs & Architecture", items: ["REST API Design", "Microservices", "MVC", "JWT Authentication", "Spring Security", "Kafka", "Design Patterns"] },
        { label: "Databases", items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "LINQ"] }
      ]
    },
    {
      id: "fullstack", title: "Full Stack", tagline: "End-to-end features, from database to pixel.", hue: 300,
      groups: [
        { label: "Stacks", items: ["MERN", "React + Spring Boot", "React + FastAPI", "Angular + .NET", "Next.js"] },
        { label: "Engineering", items: ["OOP", "Data Structures & Algorithms", "Component-driven UI", "Agile"] },
        { label: "Testing", items: ["Unit Testing", "Automated Testing", "API Testing (Postman)", "Debugging"] },
        { label: "Integration", items: ["Authentication & Authorization", "CRUD Workflows", "Third-party APIs", "State Management"] }
      ]
    },
    {
      id: "devops", title: "DevOps & Cloud", tagline: "Containerised, automated and deployed.", hue: 190,
      groups: [
        { label: "Containers & CI/CD", items: ["Docker", "CI/CD Pipelines", "GitHub Actions"] },
        { label: "Cloud", items: ["AWS", "Google Cloud"] },
        { label: "Version Control", items: ["Git", "GitHub"] },
        { label: "Tools", items: ["VS Code", "Visual Studio", "Eclipse", "Postman", "Jupyter"] }
      ]
    },
    {
      id: "ai", title: "AI & Data", tagline: "Bringing intelligence and insight into products.", hue: 160,
      groups: [
        { label: "Generative AI", items: ["Generative AI", "Prompt Engineering", "LLM & RAG Concepts"] },
        { label: "Machine Learning", items: ["ML Fundamentals", "NLP", "scikit-learn", "TensorFlow", "PyTorch", "OpenCV"] },
        { label: "Data & BI", items: ["Python", "SQL", "Power BI", "Pandas", "NumPy"] }
      ]
    }
  ],

  /* Logo wall — Devicon paths (https://devicon.dev) */
  techLogos: [
    { name: "React", icon: "react/react-original" },
    { name: "Next.js", icon: "nextjs/nextjs-original" },
    { name: "Angular", icon: "angular/angular-original" },
    { name: "TypeScript", icon: "typescript/typescript-original" },
    { name: "JavaScript", icon: "javascript/javascript-original" },
    { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
    { name: "Node.js", icon: "nodejs/nodejs-original" },
    { name: "Spring Boot", icon: "spring/spring-original" },
    { name: "FastAPI", icon: "fastapi/fastapi-original" },
    { name: "Java", icon: "java/java-original" },
    { name: "Python", icon: "python/python-original" },
    { name: ".NET", icon: "dotnetcore/dotnetcore-original" },
    { name: "C#", icon: "csharp/csharp-original" },
    { name: "MongoDB", icon: "mongodb/mongodb-original" },
    { name: "MySQL", icon: "mysql/mysql-original" },
    { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
    { name: "Docker", icon: "docker/docker-original" },
    { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark" },
    { name: "Git", icon: "git/git-original" },
    { name: "GitHub", icon: "github/github-original" },
    { name: "Postman", icon: "postman/postman-original" },
    { name: "Kafka", icon: "apachekafka/apachekafka-original" },
    { name: "Redux", icon: "redux/redux-original" },
    { name: "TensorFlow", icon: "tensorflow/tensorflow-original" }
  ],

  softSkills: ["Communication", "Critical Thinking", "Problem Solving", "Teamwork", "Adaptability", "Collaboration", "Quick Learner"],

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      company: "Besant Technologies", initials: "BT", role: "Java Full Stack — Master Program", type: "Training",
      period: "Aug 2025 – Jan 2026",
      tags: ["Java", "Spring Boot", "Hibernate", "React", "MySQL", "MongoDB", "REST APIs", "Microservices", "Spring Security", "JWT", "AWS", "CI/CD"],
      points: [
        "Trained in full-stack development with Java, Spring Boot, React and MySQL.",
        "Developed and deployed RESTful web applications using microservice architecture.",
        "Built responsive front-end interfaces with React.js, HTML5, CSS3 and JavaScript, integrated with Spring Boot and Hibernate back ends.",
        "Worked with MySQL and MongoDB for CRUD operations and query optimisation.",
        "Implemented authentication and authorization using Spring Security and JWT.",
        "Deployed applications on AWS and used CI/CD pipelines with GitHub Actions for automated builds and deployments."
      ]
    },
    {
      company: "Rooman Technologies", initials: "RT", role: "AI Data Quality Analyst Intern", type: "Internship",
      period: "Feb 2025 – May 2025",
      tags: ["Python", "SQL", "Power BI", "Data Cleaning", "BI Dashboards"],
      points: [
        "Cleaned, transformed and visualised raw datasets using Python, SQL and Power BI; built BI dashboards for business teams.",
        "Optimised SQL queries, cutting data retrieval time by 35%."
      ]
    },
    {
      company: "Infosys", initials: "In", role: "Infosys Springboard Internship 5.0", type: "Internship",
      period: "Oct 2024 – Dec 2024",
      tags: ["Python", "NLP", "scikit-learn", "TF-IDF", "Logistic Regression", "LSTM"],
      points: [
        "Built a Cyberbullying Detection System using NLP and Python; improved classification accuracy through fine-tuning and preprocessing.",
        "Preprocessed large-scale social media datasets using tokenization, stopword removal and TF-IDF vectorization.",
        "Evaluated multiple algorithms including Logistic Regression and LSTM for detecting harmful and abusive text."
      ]
    },
    {
      company: "Kodebuddy", initials: "Kb", role: "Web Developer", type: "Internship", onResume: false,
      period: "Apr 2024 – May 2024",
      tags: ["HTML5", "CSS3", "JavaScript", "HTML5 Canvas", "Responsive Design"],
      points: [
        "Designed and developed a responsive personal portfolio website with an interactive gallery and contact form.",
        "Built a hotel website with booking and room management features and calendar-based availability.",
        "Created web-based games with HTML5 Canvas, CSS animations and JavaScript, focusing on smooth interactions and cross-browser compatibility."
      ]
    }
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "B.Tech, Electronics and Communication Engineering", school: "Anantha Lakshmi Institute of Technology and Sciences, Anantapuram",
      period: "Dec 2021 – May 2025", score: "80%", logo: "assets/img/education/ASU.jpg",
      coursework: ["Data Structures and Algorithms", "Object-Oriented Programming", "Computer Networks", "Operating Systems", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing", "Generative AI", "Computer Vision"]
    },
    { degree: "Intermediate", school: "Narayana Junior College, Anantapur", period: "Jun 2019 – May 2021", score: "80%" },
    { degree: "SSC", school: "SRK Vidyalayam High School, Anantapur", period: "Apr 2019", score: "93%" }
  ],

  /* ---------- Projects ----------
     category: "fullstack" | "frontend" | "ai"
     image: path, or omit to get a generated cover (uses "hue")
     featured: true → shown on the landing page
     demo: live URL or null. github: repo URL (currently the profile). */
  projects: [
    {
      id: "job-portal", title: "Job Portal Application", category: "fullstack", featured: true, hue: 222,
      summary: "A full-stack job portal with registration, login, job posting and application tracking.",
      details: [
        "Designed and deployed a full-stack job portal with user registration, login, job posting and application tracking.",
        "Built scalable RESTful APIs with MVC and microservice principles, plus secure authentication and CRUD operations across front end and back end.",
        "Improved UI responsiveness with React, increasing user engagement by 30%."
      ],
      tech: ["React", "Node.js", "Spring Boot", "MySQL", "REST APIs", "Microservices"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "visual-ai-pipeline-builder", title: "Visual AI Pipeline Builder", category: "fullstack", featured: true, hue: 268,
      summary: "A drag-and-drop Generative AI workflow builder — design and connect pipelines with zero coding.",
      details: [
        "Built a drag-and-drop Generative AI workflow builder that lets users design and connect pipelines with zero coding.",
        "Implemented real-time state management and interactive node/edge handling using React Flow and Zustand.",
        "Developed a FastAPI backend that validates pipelines as Directed Acyclic Graphs (DAG) and exposes node/edge metrics via REST APIs."
      ],
      tech: ["React", "React Flow", "Zustand", "FastAPI", "Python"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "aroma-hotel", title: "Aroma Hotel Website", category: "frontend", featured: true, hue: 28,
      summary: "An interactive, responsive hospitality website with modern UI/UX.",
      details: [
        "Developed an interactive, responsive hospitality website with modern UI/UX, dynamic animations and engaging components."
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "cyber-bullying-detection", title: "Cyber Bullying Detection", category: "ai",
      image: "assets/img/project/cyberbullying.jpg",
      summary: "An NLP model that classifies and identifies offensive online content.",
      details: [
        "Built a Cyberbullying Detection System using NLP and Python to classify and identify offensive online content.",
        "Preprocessed large-scale social media datasets using tokenization, stopword removal and TF-IDF vectorization.",
        "Evaluated multiple algorithms including Logistic Regression and LSTM; improved classification accuracy through fine-tuning and preprocessing."
      ],
      related: "Infosys Springboard Internship 5.0",
      tech: ["Python", "NLP", "scikit-learn", "TF-IDF", "Logistic Regression", "LSTM"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "image-recognition-as-a-service", title: "Image Recognition as a Service", category: "fullstack",
      image: "assets/img/project/iras.jpeg",
      summary: "An elastic web application that scales EC2 instances with traffic to serve image recognition.",
      details: [
        "Built an elastic web application that automatically scales in and out up to 20 EC2 instances based on current traffic, using AWS services. Created custom AMIs to deploy the image recognition app on EC2 and used SQS to handle requests and responses.",
        "Deployed the image recognition system on AWS for clients to access and tested the application by generating 1000 requests."
      ],
      tech: ["Java", "Node.js", "Python", "JavaScript", "AWS EC2", "AWS S3", "AWS SQS"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "music-streaming-website", title: "Music Streaming Website", category: "fullstack",
      image: "assets/img/project/musicplayer.jpg",
      summary: "A Django music streaming site with playlists, favourites and filtered search.",
      details: [
        "Django based music streaming website.",
        "Users can register and log in, play songs, view song details, search by language and singer, create playlists, manage favourites and explore recently played songs."
      ],
      tech: ["Django", "Python", "HTML", "CSS", "Bootstrap", "AWS S3"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "movie-recommender", title: "Movie Recommender", category: "fullstack",
      image: "assets/img/project/recommender.jpg",
      summary: "A Django recommender that suggests movies using collaborative filtering.",
      details: [
        "Django based movie recommender system that uses collaborative filtering to recommend movies.",
        "Users can register and log in, explore movies, get recommendations based on their ratings and keep a watch list."
      ],
      tech: ["Django", "Python", "JavaScript", "SQLite", "Pandas", "Bootstrap"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "ml-dl-web-app", title: "ML-DL Web Application", category: "ai",
      image: "assets/img/project/ml.jpg",
      summary: "A Flask app showcasing a text summarizer, image classifier and iris classifier.",
      details: [
        "A web app for showcasing machine learning and deep learning projects, with Flask as the backend and Bootstrap on the frontend.",
        "Includes a text summarizer, an image classifier and an iris classifier."
      ],
      tech: ["Flask", "Python", "SQLite", "HTML", "CSS"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "resume-section-classifier", title: "Resume Section Classifier", category: "ai",
      image: "assets/img/project/resume.jpg",
      summary: "Detects section words such as experience, skills and projects in a resume.",
      details: ["Given a person's resume, detects section words such as experience, skills and projects. Implemented and compared different machine learning algorithms."],
      tech: ["Python", "scikit-learn", "NumPy", "Pandas"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "video-description-generator", title: "Video Description Generator", category: "ai",
      image: "assets/img/project/vdg.jpg",
      summary: "Generates a text description of a video using a CNN and an RNN.",
      details: ["Generates a description of a video: object detection in frames with a Convolutional Neural Network, text generation per frame with a Recurrent Neural Network, then tag generation with natural language processing."],
      tech: ["TensorFlow", "Keras", "NLTK", "Python", "OpenCV"],
      github: null, demo: null
    },
    {
      id: "image-generator", title: "Image Generator", category: "ai",
      image: "assets/img/project/gan.jpg",
      summary: "A GAN that generates realistic images from a real dataset.",
      details: [
        "Developed an image generator based on a Generative Adversarial Network (GAN) that generates realistic images from a real dataset.",
        "Tested on a human-face database; loss was calculated by comparing the PCAs of generated and original images."
      ],
      tech: ["TensorFlow", "Keras", "Python", "NumPy", "Pandas"],
      github: "https://github.com/dokka-nandini", demo: null
    },
    {
      id: "chess", title: "Chess Game", category: "frontend",
      image: "assets/img/project/chess.jpeg",
      summary: "", details: [], tech: [],
      github: "https://github.com/dokka-nandini", demo: null
    }
  ],

  /* ---------- Certifications & achievements ---------- */
  certifications: [
    { title: "IBM Front-End Professional Certificate", issuer: "IBM", image: "assets/img/certification/ibm.jpg", url: null },
    { title: "Generative AI for Software Developers Specialization", issuer: "IBM", image: "assets/img/certification/ibm.jpg", url: "https://www.coursera.org/account/accomplishments/specialization/42MAT3XQLLYI" },
    { title: "Prompt Engineering Specialization", issuer: "Vanderbilt University", image: "assets/img/certification/V.jpeg", url: "https://www.coursera.org/account/accomplishments/verify/H3GWY77IC3PP" },
    { title: "Generative AI for Data Analysts Specialization", issuer: "IBM", image: "assets/img/certification/ibm.jpg", url: null },
    { title: "React Developer", issuer: "IBM", image: "assets/img/certification/ibm.jpg", url: "https://www.coursera.org/account/accomplishments/verify/UWFWAIYAXWJ3" },
    { title: "Software Development", issuer: "IBM", image: "assets/img/certification/ibm.jpg", url: "https://www.coursera.org/account/accomplishments/verify/F4BOYIQKGF45" },
    { title: "Google AI Developer", issuer: "Google", image: "assets/img/certification/Google.jpeg", url: "https://www.coursera.org/account/accomplishments/professional-cert/2QG65NUFEVS9" },
    { title: "Google Python Developer", issuer: "Google", image: "assets/img/certification/Google.jpeg", url: "https://coursera.org/share/a2abcde23579cdd6a9f07197db17cc31" },
    { title: "Introduction to Generative AI", issuer: "Google Cloud", image: "assets/img/certification/g-cloud.jpeg", url: "https://www.coursera.org/account/accomplishments/specialization/M9E5YSZTIT1B" },
    { title: "Python", issuer: "Microsoft", image: "assets/img/certification/micro.jpeg", url: "https://www.coursera.org/account/accomplishments/verify/8E5RBGTT7ZB6" },
    { title: "Introduction to AI (CS50 AI)", issuer: "Harvard", image: "assets/img/certification/Harvard.png", url: "https://github.com/dokka-nandini/CS50-AI", linkLabel: "View on GitHub" }
  ],
  /* ---------- On-site resume (resume.html) ----------
     Uses profile, featured projects, experience, education and achievements
     from above, plus these resume-specific lists. */
  resume: {
    skills: [
      ["Languages", "Python, Java, JavaScript (ES6+), TypeScript, C#, SQL"],
      ["Frontend", "React.js, Next.js, React Native, Angular, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design, Axios / Fetch"],
      ["MERN Stack", "MongoDB, Express.js, React.js, Node.js, Redux / Zustand, React Hooks, React Router, React Flow"],
      ["Angular", "Angular (components, modules, services, routing, data binding), RxJS, TypeScript"],
      [".NET", "C#, ASP.NET Core Web API, MVC pattern, Entity Framework Core, LINQ"],
      ["Backend & APIs", "Spring Boot, FastAPI, Node.js / Express, REST API design & integration, Microservices, JWT Authentication, Kafka, Design Patterns"],
      ["Databases", "SQL, MySQL, PostgreSQL, SQL Server, MongoDB, NoSQL"],
      ["Cloud & DevOps", "Docker, AWS, CI/CD pipelines (GitHub Actions), Git, GitHub"],
      ["Testing & Tools", "Automated / Unit Testing, Debugging, API Testing with Postman, VS Code, Visual Studio, Eclipse"],
      ["AI / Data", "Generative AI, Prompt Engineering, LLM & RAG concepts, ML fundamentals, Power BI, Jupyter"],
      ["Core CS", "OOP, Data Structures & Algorithms, Agile, Problem Solving"]
    ],
    certifications: [
      "IBM Front-End Professional Certificate — IBM",
      "Generative AI for Software Developers Specialization — IBM",
      "Prompt Engineering Specialization — Vanderbilt University",
      "Generative AI for Data Analysts Specialization — IBM"
    ]
  },

  achievements: [
    { title: "3-Star Badge", org: "HackerRank" },
    { title: "Best Student of the Year Award", org: "Chinmaya Mission" }
  ]
};
