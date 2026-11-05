import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hostelsense',
    name: 'HostelSense',
    category: 'Smart Campus / IoT / Full-Stack Development',
    categoryType: 'iot',
    shortDescription: 'Multi-hostel centralized management and telemetry platform architected for scalable smart campus operations.',
    fullDescription: 'HostelSense is an evolving smart campus platform engineered to address operational fragmentation across multiple university residential hostels through a single distributed system.',
    problem: 'University campus hostels frequently operate with disjointed manual logbooks, disconnected utility tracking, unmonitored electricity consumption, and slow paper-based grievance redressal systems, leading to high administrative overhead and lack of unified visibility.',
    solution: 'Designed a unified multi-tenant architecture utilizing a modern pnpm monorepo. The core system centralizes student records, warden oversight, and complaint workflows while integrating an MQTT broker to ingest simulated and real IoT telemetry for utility and room occupancy monitoring.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'MQTT',
      'pnpm Monorepo',
      'Tailwind CSS',
      'IoT Telemetry'
    ],
    engineeringDecisions: [
      'Engineered a pnpm monorepo structure to share TypeScript schemas and data validation models between client, backend, and simulated device services.',
      'Adopted an MQTT pub/sub event pipeline over traditional polling to handle lightweight device telemetry packets with minimal network overhead.',
      'Designed multi-tenant schema isolation within MongoDB so hostel wardens only access their specific hostel sector while central administrators retain holistic campus oversight.'
    ],
    keyFeatures: [
      'Centralized multi-hostel database schema and administrative dashboards',
      'Role-based access control (Hostel Warden vs. Central Administration vs. Student)',
      'Structured student complaint tracking with private resolution channels',
      'Warden emergency broadcasts and formal noticeboard dispatcher',
      'MQTT message broker integration pipeline for sensor telemetry'
    ],
    plannedFeatures: [
      'Dynamic QR/code-based nightly attendance logging with anti-spoofing time windows',
      'Granular electricity sub-metering telemetry and automated consumption spike alerts',
      'Automated utility billing and hostel fee reconciliation engine',
      'Hardware gateway integration with physical edge sensors'
    ],
    status: 'In Development',
    githubUrl: 'https://github.com/Vachigubhu',
    architectureHighlights: 'pnpm workspace with shared TypeScript types, Node.js event-driven backend, MQTT broker ingestion, and responsive Tailwind UI.'
  },
  {
    id: 'tust',
    name: 'TUST',
    category: 'E-Commerce / Full-Stack Development',
    categoryType: 'fullstack',
    shortDescription: 'Full-stack MERN online marketplace for fashion apparel, designer collections, and dynamic catalog discovery.',
    fullDescription: 'TUST is a complete e-commerce web application engineered to deliver a seamless shopping experience for apparel and designer clothing brands with end-to-end frontend and backend cohesion.',
    problem: 'Fashion apparel e-commerce requires structured product filtering (sizes, categories, pricing), responsive catalog rendering, dependable cart state synchronization, and decoupled RESTful endpoints.',
    solution: 'Built a full-stack MERN application incorporating MongoDB for dynamic product schemas, Express/Node.js for order and product APIs, and React for a reactive, mobile-friendly consumer storefront.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'REST APIs',
      'Tailwind CSS',
      'Mongoose ODM'
    ],
    engineeringDecisions: [
      'Structured MongoDB document schemas with embedded variant subdocuments to support clothes sizing, colorways, and real-time inventory counts.',
      'Implemented stateless RESTful API routing with centralized error handling middleware in Express to guarantee predictable client-side response codes.',
      'Used React context and custom hooks for client-side cart persistence, minimizing unnecessary server trips for transient basket adjustments.'
    ],
    keyFeatures: [
      'Dynamic apparel catalog with multi-facet categorization and search',
      'Persistent shopping cart with local-storage synchronization and item count validation',
      'Product detail views with high-fidelity imagery and responsive layout',
      'RESTful backend endpoints for catalog query, product CRUD, and order ingestion',
      'Clean database schemas modeled with Mongoose ODM'
    ],
    status: 'Functional MVP',
    githubUrl: 'https://github.com/Vachigubhu',
    architectureHighlights: 'Decoupled React SPA consuming REST endpoints served by Express.js with persistent MongoDB storage.'
  },
  {
    id: 'unisphere',
    name: 'UniSphere',
    category: 'University Management / Full-Stack & IoT',
    categoryType: 'iot',
    shortDescription: 'Connected university operations platform exploring software integration with intelligent IoT device concepts.',
    fullDescription: 'UniSphere investigates the practical convergence of Django-backed enterprise web platforms with connected IoT infrastructure to modernize campus-wide facility management.',
    problem: 'Traditional university management software handles paperwork but remains completely blind to physical classroom facilities, resource availability, and environmental monitoring across campus buildings.',
    solution: 'Engineered a Django-based platform that pairs traditional university management modules (department records, facility bookings) with an architectural framework for accepting device-state telemetry.',
    technologies: [
      'Python',
      'Django',
      'IoT Concepts',
      'REST APIs',
      'SQLite / PostgreSQL',
      'HTML5/CSS3'
    ],
    engineeringDecisions: [
      'Leveraged Django ORM for robust relational modeling of university faculties, classrooms, student rosters, and facility registries.',
      'Constructed modular Django apps separating administrative user workflows from incoming device telemetry ingest endpoints.',
      'Employed Django built-in authentication and security guards (CSRF, SQL-injection prevention) to safeguard institutional data.'
    ],
    keyFeatures: [
      'Centralized departmental and academic facility directory',
      'Classroom and resource scheduling coordinator',
      'IoT device state ingestion endpoints structured for facility sensor inputs',
      'Administrative control panel with granular staff and operator permissions'
    ],
    plannedFeatures: [
      'Automated classroom occupancy tracking via connected edge microcontrollers',
      'Facility power scheduling based on automated timetable feeds'
    ],
    status: 'Active Prototype',
    githubUrl: 'https://github.com/Vachigubhu',
    architectureHighlights: 'Django Model-View-Template (MVT) architecture with REST endpoints prepared for IoT gateway communication.'
  },
  {
    id: 'studentoperations',
    name: 'StudentOperations',
    category: 'Campus Management / Software Engineering',
    categoryType: 'backend',
    shortDescription: 'Operational software system streamlining student residential workflows and campus record management.',
    fullDescription: 'StudentOperations digitizes and organizes campus housing logistics, tracking student hostel assignments, status updates, and administrative requests.',
    problem: 'University administration offices face severe bottlenecks during semester registration, hostel room allocations, room transfers, and maintenance logging when reliant on manual spreadsheets.',
    solution: 'Constructed an operational management portal centralizing student resident records, room allocation statuses, and staff accountability logs in a single queryable system.',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'JavaScript',
      'Bootstrap / CSS',
      'ORM Modeling'
    ],
    engineeringDecisions: [
      'Designed normalized relational database schemas in PostgreSQL to enforce referential integrity between student profiles, hostel blocks, and room allocations.',
      'Implemented role-based dashboard views ensuring campus administrators, hostel wardens, and students see only relevant operational data.',
      'Built automated status notification hooks when student maintenance requests transition across triage states.'
    ],
    keyFeatures: [
      'Student hostel occupancy records and room allotment tracking',
      'Maintenance ticket lifecycle management (Logged, In Review, Resolved)',
      'Digital leave application and clearance tracking system',
      'Exportable operational summaries for administrative review'
    ],
    status: 'In Development',
    githubUrl: 'https://github.com/Vachigubhu',
    architectureHighlights: 'Relational data modeling with Django ORM, secure session-based authentication, and structured operational workflows.'
  },
  {
    id: 'ibm-capstone',
    name: 'IBM Full-Stack Dealership Application',
    category: 'Full-Stack Development / Application Engineering',
    categoryType: 'fullstack',
    shortDescription: 'Microservice dealership portal developed within the IBM Full Stack Software Developer professional curriculum.',
    fullDescription: 'A multi-service web application developed as the capstone project for the IBM Full Stack Software Developer Professional Certificate, showcasing end-to-end system design and cloud deployment principles.',
    problem: 'Car dealerships require cohesive web interfaces for customers to browse car models, submit reviews, and look up regional dealer branches while maintaining decoupled backend data services.',
    solution: 'Engineered a modern web portal combining a React frontend with Express/Node.js and Python microservices to handle vehicle catalogs, customer review submission, and dealer branch lookup.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'Python',
      'MongoDB',
      'REST APIs',
      'Docker Fundamentals'
    ],
    engineeringDecisions: [
      'Divided application domains into microservices: Node.js/MongoDB for dealerships and reviews, React for client-side browsing, and Python services for analytics.',
      'Implemented robust client-side input validation and error feedback loops to prevent malformed review submissions.',
      'Containerized development environments with Docker to replicate production container runtimes reliably.'
    ],
    keyFeatures: [
      'Filterable dealership directory by US state and geographic area',
      'Verified customer review submission and real-time listing feeds',
      'Dealer inventory showcase with responsive layout',
      'Stateless REST endpoints and cloud deployment configuration'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/Vachigubhu',
    architectureHighlights: 'Microservice-oriented full-stack design with React UI, Express and Python backend endpoints, and document database persistence.'
  },
  {
    id: 'emotion-detection',
    name: 'Emotion Detection API',
    category: 'Artificial Intelligence / Python Backend Development',
    categoryType: 'ai',
    shortDescription: 'Python Flask REST API integrating machine learning models to classify text sentiment and granular emotional categories.',
    fullDescription: 'An AI-backed backend application engineered as part of IBM practical engineering projects to evaluate emotional tones (joy, sadness, anger, fear, disgust) in user-provided text inputs.',
    problem: 'Applications analyzing customer sentiment or text communications need fast, programmatic APIs that return deterministic emotional scoring rather than generic positive/negative binary flags.',
    solution: 'Constructed a modular Flask web service that accepts text payloads, invokes pre-trained natural language processing model endpoints, and returns normalized probability scores with comprehensive unit test coverage.',
    technologies: [
      'Python',
      'Flask',
      'REST API',
      'NLP / Machine Learning',
      'JSON Payloads',
      'Unit Testing'
    ],
    engineeringDecisions: [
      'Decoupled the API request handler from the model interface layer, enabling easy model swapping without modifying client-facing routes.',
      'Implemented defensive validation on incoming strings, returning appropriate HTTP 400 Bad Request codes on empty or blank inputs.',
      'Wrote comprehensive Python unit test suites checking edge cases (ambiguous text, extreme emotion markers, neutral phrasing).'
    ],
    keyFeatures: [
      'Clean RESTful `/emotionDetector` POST endpoint accepting JSON text payloads',
      'Multi-class emotion scoring (anger, disgust, fear, joy, sadness) and dominant emotion detection',
      'Explicit HTTP status handling and graceful fallback on malformed or blank inputs',
      'Unit test suite asserting response schema accuracy and model output stability'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/Vachigubhu',
    architectureHighlights: 'Lightweight Flask microservice with clean separation between HTTP controller, model inference adapter, and response serializer.'
  },
  {
    id: 'farmers-connect',
    name: 'Farmers Connect',
    category: 'Full-Stack Development / AI / Agricultural Technology',
    categoryType: 'ai',
    shortDescription: 'Upcoming agricultural platform concept exploring intelligent digital advisory services and agentic AI for farming communities.',
    fullDescription: 'Farmers Connect is a forward-looking engineering roadmap project aimed at bridging smallholder farmers with practical digital tools, localized agronomy insights, and potential agentic AI advisory assistants.',
    problem: 'Farmers often struggle with timely access to localized crop pest identification, accurate weather intelligence, fair market pricing data, and practical agricultural extension services.',
    solution: 'Architecting an intuitive web platform designed to aggregate agricultural resources and explore the integration of Large Language Model (LLM) agents that can converse in natural language to answer farming queries.',
    technologies: [
      'React / TypeScript (Planned)',
      'Python / FastAPI (Planned)',
      'Agentic AI Concepts',
      'LLM Integration',
      'PostgreSQL',
      'Mobile-First Design'
    ],
    engineeringDecisions: [
      'Planning a mobile-first, low-bandwidth architecture prioritizing cached offline access for rural connectivity scenarios.',
      'Designing safe prompt engineering pipelines and guardrails to prevent agricultural misinformation or hazardous chemical guidance.',
      'Evaluating lightweight agentic loops where an AI assistant can fetch external weather and market data before formulating responses.'
    ],
    keyFeatures: [
      'Digital marketplace and local produce pricing feed concept',
      'Pest and crop health guidance library',
      'Interactive AI advisory prototype workflow (in architectural definition)',
      'Community inquiry board for verified peer-to-peer farmer solutions'
    ],
    plannedFeatures: [
      'Speech-to-text integration for localized language accessibility',
      'Agentic weather-crop risk assessment triggers'
    ],
    status: 'Upcoming Concept',
    githubUrl: 'https://github.com/Vachigubhu',
    architectureHighlights: 'Future-ready decoupled architecture pairing a mobile-first client with Python AI microservices and verified agronomy knowledge stores.'
  }
];
