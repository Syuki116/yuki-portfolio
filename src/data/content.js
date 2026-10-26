export const personal = {
    name: "Xinyu(Yuki) Shen",
    title: "Data Science & Economics · University of Florida",
    tagline: "Turning messy data\ninto clear decisions.",
    bio: [
      "I'm a Data Science and Economics student at the University of Florida focused on using data to solve practical business and healthcare problems. I combine statistical analysis, SQL, predictive modeling, and data visualization to identify opportunities, evaluate trade-offs, and turn complex data into clear recommendations for decision-makers. U.S. citizen — no sponsorship required.",
    ],
    email: "shenxinyu0116@gmail.com",
    linkedin: "https://www.linkedin.com/in/xinyu-shen-uf",
    github: "https://github.com/Syuki116",
    resume: "/resume.pdf",
    headshot: "/profile.jpg",
  };
  
  export const skills = [
    {
      category: "Languages",
      items: ["Python", "R", "SQL", "SAS", "SPSS"],
    },
    {
      category: "Analytics & ML",
      items: [
        "Logistic Regression",
        "Random Forest",
        "LASSO",
        "SMOTE",
        "Simulation Studies",
        "Hypothesis Testing",
        "Model Evaluation",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Tableau",
        "R Shiny",
        "ArcGIS Pro",
        "MariaDB",
        "HiPerGator",
        "GitHub",
      ],
    },
    {
      category: "Domains",
      items: [
        "Product Analytics",
        "Biostatistics",
        "Geospatial Analysis",
        "Database Systems",
        "Economics",
        "Data Visualization",
      ],
    },
  ];
  
  export const projects = [
    {
      domain: "AI Product · Interview Practice",
      title: "MockMate AI",
      org: "Gator Hack V 2026 — Team Project · Frontend & QA",
      description:
        "Co-built a personalized interview practice platform that turns a job description, résumé, and optional public GitHub project into a focused plan. Designed and tested the four-step experience from preparation through a real-time voice interview and evidence-based report, with feedback tied to transcript turns and inspected project files.",
      tags: ["React", "Next.js", "TypeScript", "OpenAI API", "Voice AI", "Product Design"],
      image: "/mockmate-preview.jpg",
      link: "https://mockmate-tan.vercel.app/?mock=1",
      linkLabel: "Try Interactive Demo",
      secondaryLink: "https://github.com/JunhaoLiXD/mockmate",
      secondaryLinkLabel: "View GitHub Repository",
    },

    {
      domain: "Healthcare Analytics · Market Strategy",
      title: "Florida Healthcare Market Opportunity Analysis",
      org: "Independent Portfolio Project",
      description:
        "Analyzed Florida's 67 counties to identify promising outpatient healthcare markets using population growth, healthcare need, provider supply, and household income data. Built a reproducible Python and SQL pipeline, developed three scenario-based scoring models, and created interactive Tableau and Streamlit dashboards for market comparison and decision support.",
      tags: [
        "Python",
        "SQL",
        "Tableau",
        "Streamlit",
        "Plotly",
        "SQLite",
        "Healthcare Analytics",
      ],
      link: "https://public.tableau.com/app/profile/xinyu.shen3762/viz/FloridaHealthcareMarketOpportunityDashboard/Dashboard1",
      linkLabel: "View Tableau Dashboard",
    },

    {
      domain: "Biostatistics · Research",
      title: "Alpha-Level Sensitivity Analysis",
      org: "UF Department of Biostatistics — Undergraduate Research",
      description:
        "Contributing to a simulation study examining how different alpha levels affect method performance across multiple data-generating scenarios. Using R and UF's HiPerGator computing environment to run experiments, generate plots, and compare statistical method stability.",
      tags: ["R", "Simulation Study", "HiPerGator", "Statistical Computing"],
      link: "#",
    },

    {
      domain: "Clinical · Machine Learning",
      title: "Stroke Risk Prediction and R Shiny Application",
      org: "FAU Biostatistics & Data Science Research Internship",
      description:
        "Developed and evaluated stroke-risk prediction models using clinical data. Cleaned and transformed the dataset, addressed class imbalance with SMOTE, and compared logistic regression, LASSO, and random forest models using confusion matrix, precision, recall, and F1-score. Applied this modeling workflow to support a collaborative R Shiny application and produced additional descriptive and regression analyses in SAS/SPSS.",
      tags: [
        "R Shiny",
        "SMOTE",
        "Logistic Regression",
        "LASSO",
        "Random Forest",
        "SAS/SPSS",
      ],
      image: "/fau-shiny-preview.png",
      link: "https://syuki116.github.io/Shen_FAU_ML_Website/",
      linkLabel: "View ML Analysis",
      secondaryLink: "/fau-shiny-preview.png",
      secondaryLinkLabel: "View R Shiny Preview",
    },
    
    {
      domain: "Geospatial · Remote Sensing",
      title: "Urban Vegetation Change in Gainesville",
      org: "GIS Coursework — University of Florida",
      description:
        "Analyzed urban vegetation and land-cover change in Gainesville using aerial imagery from 2008 and 2023. Applied Random Forest classification, Raster Calculator post-classification comparison, reclassification, and Zonal Statistics to interpret spatial change over time.",
      tags: ["ArcGIS Pro", "Random Forest", "Remote Sensing", "Raster Analysis"],
      link: "#",
    },
    {
      domain: "Database · Systems",
      title: "Relational Rental Management System",
      org: "Database Systems — University of Florida",
      description:
        "Designed and implemented a MariaDB-based rental management system with a Python database handler. Built functions for customer management, item management, rentals, returns, waitlists, rental extensions, and inventory tracking.",
      tags: ["MariaDB", "SQL", "Python", "Database Design"],
      link: "#",
    },
  ];
  
  export const experience = [
    {
      date: "Expected May 2027",
      org: "University of Florida",
      role: "B.S. Data Science · B.A. Economics",
      description:
        "Double majoring in Data Science and Economics, with coursework in probability, mathematical statistics, regression, database systems, GIS, economics, statistical computing, and data visualization.",
    },

    {
      date: "May 2026 – August 2026",
      org: "University of Florida | Gainesville, FL",
      role: "Undergraduate Researcher — Biostatistics",
      description:
        "Working on a simulation-based research project examining alpha-level sensitivity across statistical methods. Running R-based experiments, organizing simulation outputs, and summarizing results through plots and performance comparisons.",
    },
    
    {
      date: "Summer 2025",
      org: "Florida Atlantic University | Boca Raton, FL",
      role: "Biostatistics & Data Science Research Intern",
      description:
        "Built predictive modeling workflows and an interactive R Shiny app for stroke risk analysis. Worked on data cleaning, feature engineering, class imbalance handling, model evaluation, and SAS/SPSS statistical analysis.",
    },

  ];
  
  export const beyondData = [
    {
      icon: "♩",
      title: "Piano",
      description:
        "I enjoy piano because it combines structure, emotion, and pattern recognition. It reminds me that precision and creativity can work together.",
    },
    {
      icon: "◈",
      title: "Watercolor & Visual Design",
      description:
        "I’m drawn to watercolor and clean visual design. That interest also shapes how I think about dashboards, presentations, and data storytelling — clarity matters, but so does the way information feels to the audience.",
    },
    {
      icon: "◯",
      title: "Movement & Wellness",
      description:
        "I’m interested in Pilates and ballet-inspired movement as a way to build consistency, body awareness, and calm focus outside of academic and technical work.",
    },
    {
      icon: "◎",
      title: "Travel Planning",
      description:
        "I enjoy planning trips in detail: comparing options, structuring logistics, balancing constraints, and leaving room for flexibility. It feels surprisingly similar to product thinking.",
    },
    {
      icon: "⬡",
      title: "AI Tools & Product Thinking",
      description:
        "I’m curious about how people interact with AI tools and data products. I like thinking about what makes analytical tools intuitive, trustworthy, and useful in real workflows.",
    },
  ];