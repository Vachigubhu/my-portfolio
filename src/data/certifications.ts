import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'ibm-fullstack',
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM (via Coursera)',
    description: 'Comprehensive multi-course professional program covering front-end and back-end development, cloud-native architectures, containerization, microservices, Python, React, Node.js, and CI/CD pipelines.',
    skillsCovered: [
      'Full-Stack Architecture',
      'React & Node.js',
      'Python & Flask',
      'Docker & Containers',
      'Microservices & REST APIs',
      'Cloud Deployment'
    ],
    credentialUrl: 'https://www.coursera.org',
    statusBadge: 'Verified Professional Certificate'
  },
  {
    id: 'meta-fullstack',
    title: 'Meta Full Stack Developer Professional Certificate',
    issuer: 'Meta (via Coursera)',
    description: 'Rigorous engineering curriculum emphasizing robust front-end development with React, back-end development with Python & Django, relational database management with MySQL, API design, and version control best practices.',
    skillsCovered: [
      'React Components & State',
      'Python & Django MVT',
      'Relational Database Modeling (MySQL)',
      'API Design & Routing',
      'Modern UI/UX Principles',
      'Git Workflows'
    ],
    credentialUrl: 'https://www.coursera.org',
    statusBadge: 'Verified Professional Certificate'
  },
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google (via Coursera)',
    description: 'In-depth foundation in cybersecurity operations, network security, packet analysis, incident response, Linux operating system security, SQL for database auditing, and Python automation for security tasks.',
    skillsCovered: [
      'Network Security Protocols',
      'Linux Security & Bash',
      'SIEM Tools & Log Analysis',
      'Incident Response & Triage',
      'Python Security Scripting',
      'SQL for Auditing'
    ],
    credentialUrl: 'https://www.coursera.org',
    statusBadge: 'Verified Professional Certificate'
  },
  {
    id: 'cyberiads-ai',
    title: 'Introduction to AI & Large Language Models (LLMs)',
    issuer: 'Cyberiads Labs',
    description: 'Practical exploration into modern artificial intelligence architectures, foundation models, transformer mechanics, prompt engineering methodologies, and the emerging paradigms of agentic AI systems.',
    skillsCovered: [
      'Large Language Models (LLMs)',
      'Transformer Architecture',
      'Prompt Engineering',
      'AI Agent Architectures',
      'AI Security Concepts',
      'Applied Machine Learning'
    ],
    credentialUrl: 'https://cyberiadslabs.com',
    statusBadge: 'Verified Certificate'
  }
];

export const educationInfo = {
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  institution: 'Aditya University, India',
  status: 'In Progress / Current Student',
  description: 'Rigorous academic curriculum grounded in computer systems architecture, data structures & algorithms, operating systems, database management systems, computer networks, and formal software engineering methodologies.',
  coreCoursework: [
    'Data Structures & Algorithms',
    'Computer System Architecture',
    'Operating Systems & Linux Kernel Concepts',
    'Database Management Systems (DBMS)',
    'Computer Networks & Protocols',
    'Software Engineering Principles'
  ]
};
