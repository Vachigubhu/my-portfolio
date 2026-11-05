import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core languages utilized across systems programming, full-stack web, and algorithmic problem-solving.',
    skills: [
      {
        name: 'Python',
        category: 'languages',
        experienceLevel: 'Proficient',
        context: 'Backend web services (Django, Flask), automated scripts, and AI/ML model integration.',
        icon: 'terminal'
      },
      {
        name: 'JavaScript',
        category: 'languages',
        experienceLevel: 'Proficient',
        context: 'ES6+ standards, asynchronous paradigms, Node.js runtimes, and interactive DOM manipulation.',
        icon: 'code'
      },
      {
        name: 'TypeScript',
        category: 'languages',
        experienceLevel: 'Working Knowledge',
        context: 'Static type contracts, compile-time type safety, interfaces, and scalable frontend architectures.',
        icon: 'file-code'
      },
      {
        name: 'Go (Golang)',
        category: 'languages',
        experienceLevel: 'Working Knowledge',
        context: 'Concurrent service development, clean binary compilation, and low-latency network tooling.',
        icon: 'cpu'
      },
      {
        name: 'C / C++ Fundamentals',
        category: 'languages',
        experienceLevel: 'Fundamental',
        context: 'Memory management, pointers, fundamental data structures, and computer architecture basics.',
        icon: 'binary'
      },
      {
        name: 'x86 Assembly (MASM)',
        category: 'languages',
        experienceLevel: 'Fundamental',
        context: 'Processor register mechanics, stack memory execution, and low-level system understanding.',
        icon: 'layers'
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Modern component-driven interfaces prioritizing responsive layouts, web accessibility, and performance.',
    skills: [
      {
        name: 'React',
        category: 'frontend',
        experienceLevel: 'Proficient',
        context: 'Component lifecycle, custom hooks, virtual DOM reconciliation, and state-driven UX.',
        icon: 'box'
      },
      {
        name: 'TypeScript',
        category: 'frontend',
        experienceLevel: 'Working Knowledge',
        context: 'Strongly-typed React props, state definitions, and reusable generic component patterns.',
        icon: 'file-code'
      },
      {
        name: 'Tailwind CSS',
        category: 'frontend',
        experienceLevel: 'Proficient',
        context: 'Utility-first styling systems, responsive design tokens, and modular UI consistency.',
        icon: 'palette'
      },
      {
        name: 'HTML5 & Semantic Web',
        category: 'frontend',
        experienceLevel: 'Proficient',
        context: 'Accessible document structure (WAI-ARIA), SEO optimization, and clean semantic markup.',
        icon: 'globe'
      },
      {
        name: 'CSS3 & Modern Layouts',
        category: 'frontend',
        experienceLevel: 'Proficient',
        context: 'Flexbox, CSS Grid systems, custom properties, animations, and media queries.',
        icon: 'layout'
      },
      {
        name: 'JavaScript (ES6+)',
        category: 'frontend',
        experienceLevel: 'Proficient',
        context: 'Event loop execution, Fetch/REST APIs, client-side validation, and state handling.',
        icon: 'code'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Scalable service architectures, RESTful API design, controller logic, and server-side runtime environments.',
    skills: [
      {
        name: 'Node.js & Express.js',
        category: 'backend',
        experienceLevel: 'Proficient',
        context: 'Non-blocking I/O event loops, custom middleware pipelines, and REST microservices.',
        icon: 'server'
      },
      {
        name: 'Python & Django',
        category: 'backend',
        experienceLevel: 'Proficient',
        context: 'MVT architectural pattern, Django ORM, authentication systems, and admin orchestration.',
        icon: 'shield-check'
      },
      {
        name: 'Flask',
        category: 'backend',
        experienceLevel: 'Proficient',
        context: 'Lightweight microservices, machine learning model endpoints, and rapid prototyping.',
        icon: 'zap'
      },
      {
        name: 'RESTful API Engineering',
        category: 'backend',
        experienceLevel: 'Proficient',
        context: 'Resource URI structure, HTTP verb semantics, status codes, payload validation, and CORS.',
        icon: 'network'
      }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational schema modeling, document databases, query optimization, and persistence layers.',
    skills: [
      {
        name: 'PostgreSQL',
        category: 'databases',
        experienceLevel: 'Working Knowledge',
        context: 'Relational modeling, ACID transactions, complex joins, and structured integrity.',
        icon: 'database'
      },
      {
        name: 'MySQL',
        category: 'databases',
        experienceLevel: 'Working Knowledge',
        context: 'Relational schema design, normalization, foreign key constraints, and indexing.',
        icon: 'database'
      },
      {
        name: 'MongoDB',
        category: 'databases',
        experienceLevel: 'Proficient',
        context: 'NoSQL document schemas, aggregation pipelines, Mongoose ODM, and e-commerce catalogs.',
        icon: 'hard-drive'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Systems',
    description: 'Defensive engineering, application security principles, networking protocols, and systems administration.',
    skills: [
      {
        name: 'Linux Administration & CLI',
        category: 'cybersecurity',
        experienceLevel: 'Proficient',
        context: 'Process inspection, permission management (chmod/chown), bash scripting, and system monitoring.',
        icon: 'terminal'
      },
      {
        name: 'Web Application Security',
        category: 'cybersecurity',
        experienceLevel: 'Working Knowledge',
        context: 'OWASP Top 10 mitigation, SQL injection prevention, XSS countermeasures, and CSRF defense.',
        icon: 'shield-alert'
      },
      {
        name: 'Networking Fundamentals',
        category: 'cybersecurity',
        experienceLevel: 'Working Knowledge',
        context: 'TCP/IP stack, DNS resolution, subnetting, HTTP/HTTPS encryption, and socket protocols.',
        icon: 'wifi'
      },
      {
        name: 'Ethical Hacking Fundamentals',
        category: 'cybersecurity',
        experienceLevel: 'Fundamental',
        context: 'Reconnaissance techniques, port scanning concepts, vulnerability assessments, and threat modeling.',
        icon: 'eye'
      },
      {
        name: 'Virtualization & VMs',
        category: 'cybersecurity',
        experienceLevel: 'Working Knowledge',
        context: 'VirtualBox sandbox environments, isolated lab configurations, and snapshot management.',
        icon: 'box'
      },
      {
        name: 'Secure Development Practices',
        category: 'cybersecurity',
        experienceLevel: 'Working Knowledge',
        context: 'Input sanitization, least-privilege principles, secure credential handling, and environment isolation.',
        icon: 'lock'
      }
    ]
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence & ML',
    description: 'Practical machine learning, LLM integration, prompt engineering, and intelligent agent workflows.',
    skills: [
      {
        name: 'Large Language Models (LLMs)',
        category: 'ai',
        experienceLevel: 'Working Knowledge',
        context: 'Transformer model capabilities, context window management, and zero-shot/few-shot prompting.',
        icon: 'sparkles'
      },
      {
        name: 'Prompt Engineering',
        category: 'ai',
        experienceLevel: 'Working Knowledge',
        context: 'System instruction structuring, role prompting, output format constraints, and chain-of-thought.',
        icon: 'message-square'
      },
      {
        name: 'AI Agents & Agentic Architecture',
        category: 'ai',
        experienceLevel: 'Fundamental',
        context: 'Autonomous tool-use workflows, goal decomposition, and recursive decision-making loops.',
        icon: 'bot'
      },
      {
        name: 'Machine Learning Fundamentals',
        category: 'ai',
        experienceLevel: 'Fundamental',
        context: 'Supervised learning models, classification pipelines, evaluation metrics, and model serving.',
        icon: 'trending-up'
      },
      {
        name: 'NumPy & Data Analysis',
        category: 'ai',
        experienceLevel: 'Working Knowledge',
        context: 'Multidimensional array operations, data preprocessing, normalization, and statistical analysis.',
        icon: 'activity'
      },
      {
        name: 'AI Security Concepts',
        category: 'ai',
        experienceLevel: 'Fundamental',
        context: 'Prompt injection awareness, data leakage vectors, adversarial inputs, and output guardrails.',
        icon: 'shield'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tooling & Workflows',
    description: 'Version control systems, terminal environments, container basics, and API development utilities.',
    skills: [
      {
        name: 'Git & GitHub',
        category: 'tools',
        experienceLevel: 'Proficient',
        context: 'Branch management, pull requests, merge conflict resolution, and collaborative open-source hygiene.',
        icon: 'git-branch'
      },
      {
        name: 'Docker Fundamentals',
        category: 'tools',
        experienceLevel: 'Fundamental',
        context: 'Dockerfile authoring, container lifecycle, port mapping, and reproducible local runtimes.',
        icon: 'package'
      },
      {
        name: 'Postman',
        category: 'tools',
        experienceLevel: 'Proficient',
        context: 'API collection testing, automated request validation, environment variables, and payload debugging.',
        icon: 'send'
      },
      {
        name: 'VS Code & CLI Workflows',
        category: 'tools',
        experienceLevel: 'Proficient',
        context: 'Integrated debugging, PowerShell, Bash scripting, and terminal-first development productivity.',
        icon: 'terminal'
      }
    ]
  }
];
