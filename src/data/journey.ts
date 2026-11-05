import { JourneyMilestone } from '../types';

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: 'Foundations & Academic Core',
    title: 'Computer Science & Engineering Studies',
    subtitle: 'Aditya University, India',
    description: 'Began rigorous study in foundational computer science, discovering how hardware and low-level software interface through computer architecture, C/C++, x86 assembly, and data structures.',
    skillsAcquired: [
      'C / C++ Programming',
      'x86 Assembly (MASM) Fundamentals',
      'Data Structures & Algorithmic Analysis',
      'Object-Oriented Programming Principles'
    ],
    keyAchievements: [
      'Built algorithmic problem-solving foundations through structured coursework',
      'Gained deep appreciation for memory models, pointers, and CPU register execution'
    ],
    type: 'academic'
  },
  {
    period: 'Web Engineering & Systems',
    title: 'Full-Stack & Backend Systems Engineering',
    subtitle: 'Self-Directed Engineering & Hands-on Projects',
    description: 'Expanded beyond foundational programming into full-stack web architectures. Mastered JavaScript, TypeScript, React on the client, and engineered server-side architectures with Node.js, Express, and Python/Django.',
    skillsAcquired: [
      'React & Component Architectures',
      'Node.js & Express REST APIs',
      'Python & Django MVT Framework',
      'Relational (MySQL, Postgres) & Document (MongoDB) Databases'
    ],
    keyAchievements: [
      'Developed TUST e-commerce platform with MERN stack and product filtering',
      'Engineered StudentOperations and UniSphere backend services in Django',
      'Completed Meta Full Stack Developer & IBM Full Stack Developer certificates'
    ],
    type: 'engineering'
  },
  {
    period: 'Defensive Systems & Security',
    title: 'Cybersecurity & Defensive Engineering',
    subtitle: 'Google Cybersecurity & Hands-on Lab Exploration',
    description: 'Cultivated a security-first engineering mindset. Studied network traffic protocols, Linux systems administration, application vulnerability mitigation (OWASP Top 10), and secure coding practices.',
    skillsAcquired: [
      'Linux Administration & Shell Scripting',
      'Network Protocols (TCP/IP, DNS, TLS/SSL)',
      'Web Application Vulnerability Analysis',
      'Incident Response & Security Auditing'
    ],
    keyAchievements: [
      'Earned Google Cybersecurity Professional Certificate',
      'Configured sandboxed virtualized environments for vulnerability analysis',
      'Applied secure development principles to prevent SQL injection and XSS across personal web builds'
    ],
    type: 'security'
  },
  {
    period: 'Intelligent Systems & Emerging Tech',
    title: 'IoT Telemetry, AI & LLM Exploration',
    subtitle: 'Cyberiads Labs & Smart Campus Architectural Prototyping',
    description: 'Synthesized backend engineering, connected IoT telemetry, and artificial intelligence. Exploring agentic AI systems, prompt engineering, and building HostelSense to coordinate multi-hostel operations with MQTT telemetry.',
    skillsAcquired: [
      'MQTT Event-Driven Telemetry',
      'Large Language Models & Prompt Engineering',
      'AI Agent Architecture Concepts',
      'pnpm Monorepo Scalability'
    ],
    keyAchievements: [
      'Architected HostelSense pnpm monorepo with MQTT event broker ingestion',
      'Completed Cyberiads Labs AI & LLM training and built Emotion Detection API with Flask',
      'Conceptualized Farmers Connect roadmap to empower agriculture through intelligent systems'
    ],
    type: 'ai'
  }
];
