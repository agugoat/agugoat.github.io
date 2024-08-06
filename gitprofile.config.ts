// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'agugoat', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['agugoat/AIDJ-testings', 'agugoat/AguNotes'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Take Note',
          description:
          'Web application using Assembly AI for transcribing lecture audio recordings, benefiting students with learning disabilities.',
          imageUrl:
          'https://img.freepik.com/free-vector/image-upload-concept-illustration_23-2148281796.jpg?w=740&t=st=1722826653~exp=1722827253~hmac=e05d485964d428eb9fc13b853e9cba6c18bcc745f33af3373a477e0ebccfb3bc',
          link: 'https://github.com/terrencechungong/MorganHacks',
        },
        {
          title: 'Inventory Managment',
          description:
            'This is a pantry/inventory management application using Next.js, TailwindCSS and Firebase. Also uses OpenAI to make recipe suggestions of the items you have in your pantry.',
          imageUrl:
            'https://img.freepik.com/premium-photo/two-women-organizing-boxes-with-checklists-warehouse-setting_1080455-3514.jpg?w=1380',
          link: 'https://inventory-theta-nine.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Princeobiuto Aguguo',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/princeobiuto-aguguo/',
    email: 'paguguo8@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/18CNPGU0qlfcBC6xKWoJnWIR4bmQFIUqy/edit', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'React.js',
    'Nest.js',
    'MySQL',
    'HTML',
    'Git',
    'Tableau',
    'SQL',
    'CSS',
    'Power Bi',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'IBM Accelerate',
      position: 'Client Engineering & Technical Consulting',
      from: 'April 2024',
      to: 'July 2024',
      companyLink: 'https://www.ibm.com/blogs/jobs/career-ready-skills-with-ibm-accelerate-summer-program/',
    },
    {
      company: 'Headstarter',
      position: 'Software Engineering Fellow',
      from: 'July 2024',
      to: 'Present',
      companyLink: 'https://headstarter.co/',
    },
    {
      company: 'Amazon',
      position: 'Amazon Next Scholar',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://info.codepath.org/amazon',
    },
  ],
  
  certifications: [],
  
  educations: [
    {
      institution: 'Univeristy of Maryland - College Park',
      degree: 'Computer Science',
      from: '2022',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Empowering Diversity in Tech—Code:BLACKs Mission at UMD',
      conferenceName: '',
      journalName: '',
      authors: 'Samuel Malede Zewdu',
      link: 'https://www.cs.umd.edu/article/2024/03/empowering-diversity-tech-code-blacks-mission-umd',
      description:
        'A student organizations quest to bridge the tech gap for people of color.'
    },
  ],
  customPubs: [
    {
      title: 'IBM Accelerate - Client Engineering and Technical Sales Certificate',
      conferenceName: '',
      journalName: '',
      authors: 'IBM',
      link: 'https://drive.google.com/file/d/1Rw489M7vWzQqTurClsAOuv93nUj2Je9y/view?usp=sharing',
      description:
        'Worked with 3 other accelerate partictipants to devlop an AI solutuion to meet busniess needs.'
    },
    {
      title: 'SciTech2U Comparative & Communication Strategy Externship Certificate',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: 'https://www.scitech2u.org/our-mission',
      description:
        '•	Conducted a comprehensive competitive analysis of similar STEAM programs, evaluating prices, offerings, and delivery methods, providing strategic insights that positioned SciTech2U’s new program to capture 15% more market share.',
    },
    {
      title: 'Mobalytics Gaming Market Research & Analytics Externship Certificate',
      conferenceName: '',
      journalName: '',
      authors: 'Extern',
      link: 'https://drive.google.com/file/d/1n6FUC8RijqIvDzR3nF9g7kN_2Vmuq4g-/view?usp=sharing',
      description:
        'Conducted Market Research on NBA2K and Final Fantasy 7 Remake',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lemonade',
    // Testing tings man 
    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
