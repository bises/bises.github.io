export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  icon?: string;
  accent?: string;
}

export interface Award {
  image: string;
  alt: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  status?: string;
  link?: string;
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const PROFILE = {
  name: 'Bishesh Acharya',
  title: 'Senior Software Engineer II',
  tagline: 'Auth0 Certified Developer · AI & Identity Platform Specialist',
  summary: `Full-stack Software Engineer with 7+ years of experience building scalable, cloud-native applications across identity and access management (IAM), AI-powered developer tooling, and client engagement platforms. Proven expertise in Auth0, OAuth/SSO, RBAC, MCP servers, and AI agentic workflows.`,
  email: 'acharya.bises@gmail.com',
  location: 'Michigan, USA',
  github: 'https://github.com/bises',
  linkedin: 'https://linkedin.com/in/bises',
  website: 'https://bises.github.io',
  stats: [
    { value: '7+', label: 'Years Experience' },
    { value: '4', label: 'Companies' },
    { value: '5+', label: 'Certifications' },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    title: 'Senior Software Engineer II',
    company: 'Rocket Mortgage',
    location: 'Detroit, MI (Hybrid)',
    period: 'Sep 2024 – Present',
    type: 'Full-time',
    description: 'Focused on AI-powered developer tooling, identity platform modernization, and engineering enablement at scale.',
    highlights: [
      'Built an MCP server for the client identity system, enabling AI-assisted security analysis and cross-platform log aggregation',
      'Developed an AI chatbot with Role-Based Access Control (RBAC) for secure, context-aware interactions with identity data',
      'Served as key engineer on a major account migration from Azure Identity to Auth0',
      'Developed an on-call automation tool, reducing incident resolution time and enabling seamless team handoffs',
      'Founded an Auth0 certification study group, upskilling teammates on IAM best practices',
      'Authored articles on AI and development best practices for the org-wide engineering newsletter',
    ],
    tech: ['Auth0', 'MCP Servers', 'NestJS', 'Node.js', 'Angular', 'LLMs', 'AI Agentic Workflows', 'RBAC'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Rocket Mortgage',
    location: 'Detroit, MI (Hybrid)',
    period: 'Apr 2022 – Sep 2024',
    type: 'Full-time',
    description: 'Specialized in identity platform modernization and client engagement — driving Auth0 migration and building the rewards platform.',
    highlights: [
      'Engineered the dual-provider wrapper API for Auth0 migration from Ping Identity, supporting live traffic during transition',
      'Built and maintained org-wide shared Web Components with SSR support, adopted across multiple product teams',
      'Contributed to the client rewards platform, driving client retention and conversion',
      'Integrated MuleSoft APIs to connect internal systems with Salesforce, streamlining CRM synchronization',
      'Mentored junior engineers and high school students in software engineering fundamentals',
    ],
    tech: ['Auth0', 'Ping Identity', 'React', 'Angular', 'Web Components', 'Module Federation', 'AWS', 'MuleSoft', 'Salesforce'],
  },
  {
    title: 'Software Engineer',
    company: 'Rocket Mortgage',
    location: 'Detroit, MI',
    period: 'Jan 2019 – Apr 2022',
    type: 'Full-time',
    description: 'Full-stack engineer on client-facing mortgage servicing platform, delivering features across .NET/C# backends and Angular/React frontends.',
    highlights: [
      'Upgraded the servicing web application from PHP to Angular, modernizing the frontend architecture',
      'Implemented micro-frontend architecture using Module Federation for independent deployment',
      'Built TransUnion credit monitoring integration for in-platform credit score tracking',
      'Redesigned Transaction History page, improving UX and reducing customer support volume',
      'Built a SplitIO .NET Core library, reducing feature flag integration time org-wide',
      'Developed Forbearance Auto Extension tooling during COVID-19, automating compliance with the CARES Act',
    ],
    tech: ['.NET', 'C#', 'Angular', 'React', 'Node.js', 'AWS', 'Terraform', 'Docker', 'MS SQL', 'CircleCI'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Microsoft (via Wimmers Solutions)',
    location: 'Seattle, WA',
    period: 'Oct 2017 – Dec 2018',
    type: 'Contract',
    description: 'Contributed to Microsoft Collaborate — an engineering collaboration platform enabling partners to share builds, manage bugs, and track features.',
    highlights: [
      'Built frontend features using Angular 2, React, and JavaScript for the partner-facing UI',
      'Developed RESTful backend services using Web API and MVC pattern in .NET',
      'Worked with Azure services including App Services, Virtual Machines, Service Bus, and SQL Database',
      'Diagnosed and resolved production bugs, implementing long-term fixes',
    ],
    tech: ['Angular', 'React', 'JavaScript', '.NET', 'Web API', 'MVC', 'MS SQL Server', 'Azure'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Identity & Auth',
    icon: 'shield-check',
    skills: ['Auth0', 'OAuth 2.0', 'SSO', 'RBAC', 'Ping Identity', 'IAM'],
  },
  {
    name: 'AI & Automation',
    icon: 'brain',
    skills: ['MCP Servers', 'LLMs', 'Generative AI', 'AI Agentic Workflows', 'Intelligent Automation'],
  },
  {
    name: 'Frontend',
    icon: 'layout',
    skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Components', 'Module Federation', 'HTML5', 'SCSS'],
  },
  {
    name: 'Backend',
    icon: 'server',
    skills: ['NestJS', 'Node.js', '.NET/C#', 'RESTful APIs', 'GraphQL', 'MuleSoft'],
  },
  {
    name: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS (ECS, EKS, Lambda, S3, CloudFront)', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CircleCI', 'CI/CD'],
  },
  {
    name: 'Databases & Data',
    icon: 'database',
    skills: ['PostgreSQL', 'MS SQL Server', 'Aurora', 'SQS', 'Salesforce'],
  },
];

export const PROJECTS: Project[] = [
  {
    image: 'assets/project-auth0.svg',
    title: 'Auth0 Identity Migration',
    description:
      'Engineered the dual-provider wrapper API for Auth0 migration from Ping Identity, supporting live traffic during transition. Led Mr. Cooper account migration from Azure Identity to Auth0, onboarding a newly merged company into Rocket Mortgage\'s IAM platform.',
    tech: ['Auth0', 'OAuth/SSO', 'RBAC', 'Node.js', 'NestJS', 'AWS'],
  },
  {
    image: 'assets/project-mcp.svg',
    title: 'Identity MCP Server',
    description:
      'Built a Model Context Protocol (MCP) server for the client identity system, enabling AI-assisted security analysis, cross-platform log aggregation, and account debugging — a key enabler of AI agentic workflows across the identity platform.',
    tech: ['MCP', 'Node.js', 'NestJS', 'Auth0', 'LLMs', 'AI Agents'],
  },
  {
    image: 'assets/project-chatbot.svg',
    title: 'AI Identity Chatbot',
    description:
      'Developed an AI chatbot leveraging the identity MCP server with Role-Based Access Control enforced across multiple layers, enabling secure, context-aware interactions with client identity data.',
    tech: ['LLMs', 'MCP', 'RBAC', 'NestJS', 'Angular', 'Auth0'],
  },
  {
    image: 'assets/project-webcomponents.svg',
    title: 'Shared Web Components',
    description:
      'Built and maintained org-wide shared Web Components — including company-wide header and footer — with server-side rendering support, adopted across multiple product teams.',
    tech: ['Web Components', 'SSR', 'React', 'Angular', 'Module Federation'],
  },
  {
    image: 'assets/project-rewards.svg',
    title: 'Client Rewards Platform',
    description:
      'Contributed to the client rewards platform, incentivizing behaviors like auto-pay setup and content engagement to drive client retention and conversion.',
    tech: ['React', 'Angular', 'AWS', '.NET', 'MuleSoft', 'Salesforce'],
  },
  {
    image: 'assets/microfrontend.png',
    title: 'Micro Frontend Architecture',
    description:
      'Implemented Module Federation to enable independent team deployments, allowing React components to run inside Angular applications seamlessly.',
    tech: ['Angular', 'React', 'Module Federation', 'Webpack'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Auth0 Certified Developer',
    issuer: 'Okta / Auth0',
    year: '2023',
    link: 'https://www.credly.com/badges/a2fc8ced-a87e-430d-af7a-6048d23d4b9b/linked_in_profile',
  },
  {
    name: 'Applied Machine Learning and AI',
    issuer: 'Cornell University',
    year: '2025',
    link: 'https://mycredentials.ecornell.cornell.edu/credential/NjFgEgaTaK',
  },
  {
    name: 'AI Strategy Certificate',
    issuer: 'Cornell University',
    year: '2025',
    status: 'In Progress',
  },
  {
    name: 'Building Modern Projects with React',
    issuer: 'LinkedIn',
    year: '2022',
    link: 'https://www.linkedin.com/learning/certificates/69d88d52d3228e92227b5901c81854c9cb69e01e50277b8c649061d9724cac46',
  },
  {
    name: 'Introduction to R',
    issuer: 'edX',
    year: '2020',
    link: 'https://s3.amazonaws.com/verify.edx.org/downloads/eb529fde303540e4a464c73c2aa306d0/Certificate.pdf',
  },
  {
    name: 'Modelling and Simulation using MATLAB',
    issuer: 'iversity',
    year: '2014',
    link: 'https://iversity.org/verify/TzONeL',
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Science',
    field: 'Engineering Science',
    school: 'Lamar University',
    location: 'Beaumont, TX',
    period: '2015 – 2017',
    gpa: '4.0 / 4.0',
  },
  {
    degree: 'Bachelor of Engineering',
    field: 'Electronics & Communication',
    school: 'Tribhuvan University',
    location: 'Nepal',
    period: '2008 – 2012',
  },
];

export const TEACHING = {
  title: 'Graduate Teaching Assistant',
  school: 'Lamar University',
  location: 'Beaumont, TX',
  period: 'Feb 2016 – Aug 2017',
  description: 'Taught three undergraduate courses and developed course materials for freshman and sophomore students.',
  courses: [
    'Introduction to Programming in C',
    'Object-Oriented Programming in C++',
    'Web Development (HTML, CSS, JavaScript, jQuery)',
  ],
};
