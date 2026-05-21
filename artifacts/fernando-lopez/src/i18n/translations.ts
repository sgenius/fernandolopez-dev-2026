export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      content: 'Content',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      tags: ['ENGINEERING', 'AI', 'PROFESSIONAL DEVELOPMENT'],
      roles: 'Staff Software Developer · Professor · Content Creator',
      cta: 'Get in touch',
    },
    about: {
      heading: 'Engineering with purpose,',
      headingItalic: 'always for the person.',
      values: [
        {
          title: 'People first',
          description: 'Technology is only as good as the human problems it solves. I build for people, not for the sake of code.',
        },
        {
          title: 'Work with efficiency',
          description: 'Maximizing impact requires minimizing friction. I prioritize clean architectures and scalable processes.',
        },
        {
          title: 'Practical excellence',
          description: "Rigorous engineering doesn't mean over-engineering. Deliver quality that matters.",
        },
        {
          title: 'Balance',
          description: 'Sustainable careers are built on healthy boundaries. Rest is part of the work.',
        },
        {
          title: 'Leadership through coherence',
          description: 'Actions speak louder than titles. I aim to lead by setting the standard and bringing others along.',
        },
      ],
    },
    work: {
      label: 'Selected Work',
      heading: 'Projects & Engineering',
      subheading: 'A selection of architectural implementations, open source contributions, and educational materials.',
      projects: [
        {
          type: 'SYSTEM ARCHITECTURE',
          title: 'Scaling Event-Driven Microservices',
          description: 'A comprehensive teardown of transitioning a monolithic legacy system to an event-driven architecture handling 10k+ requests per second, focusing on data consistency and developer experience.',
          topics: ['Architecture', 'Kafka', 'Go'],
          ctaText: 'Read case study →',
        },
        {
          type: 'AI INTEGRATION',
          title: 'LLMs in Production: Beyond the Prototype',
          description: 'Practical strategies for moving Large Language Models from Jupyter notebooks to production-ready API services with robust error handling, caching, and rate limiting.',
          topics: ['AI', 'Python', 'MLOps'],
          ctaText: 'Read more →',
        },
        {
          type: 'EDUCATION',
          title: 'Advanced Data Structures Curriculum',
          description: 'A semester-long university curriculum designed to bridge the gap between theoretical computer science and practical software engineering requirements in modern tech companies.',
          topics: ['Teaching', 'CS', 'Curriculum'],
          ctaText: 'View syllabus →',
        },
        {
          type: 'OPEN SOURCE',
          title: 'TypeScript API Generator',
          description: 'A widely-used open source utility that generates type-safe frontend clients directly from OpenAPI specifications, reducing integration bugs by 40%.',
          topics: ['TypeScript', 'OpenAPI', 'Tooling'],
          ctaText: 'View repository →',
        },
      ],
    },
    content: {
      label: 'Writing & Speaking',
      heading: 'Ideas & Perspectives',
      tabs: { articles: 'Articles', videos: 'Videos' },
      articles: [
        {
          type: 'ARTICLE',
          duration: '8 MIN',
          title: 'The Myth of the 10x Developer',
          description: 'Why engineering organizations should optimize for 10x teams rather than chasing mythical individual contributors, and how to build environments that foster collective excellence.',
          topics: ['Leadership', 'Culture', 'Management'],
          ctaText: 'Read article →',
        },
        {
          type: 'ARTICLE',
          duration: '12 MIN',
          title: 'Defensive Programming in React',
          description: 'Patterns for building resilient React applications that gracefully handle API failures, unexpected state changes, and erratic user inputs without crashing.',
          topics: ['React', 'Frontend', 'Patterns'],
          ctaText: 'Read article →',
        },
        {
          type: 'ARTICLE',
          duration: '5 MIN',
          title: 'Balancing the Technical Debt Ledger',
          description: 'A framework for categorizing technical debt and communicating its impact to non-technical stakeholders to secure time for refactoring.',
          topics: ['Engineering', 'Strategy', 'Communication'],
          ctaText: 'Read article →',
        },
      ],
      videos: [
        {
          type: 'VIDEO',
          duration: '45 MIN',
          title: 'Mastering System Design Interviews',
          description: 'A comprehensive breakdown of how to approach complex system design problems, focusing on tradeoffs, bottlenecks, and scaling strategies.',
          topics: ['System Design', 'Interviews', 'Architecture'],
          ctaText: 'Watch video',
        },
        {
          type: 'VIDEO',
          duration: '18 MIN',
          title: 'Effective Code Reviews',
          description: 'How to conduct code reviews that actually improve code quality without damaging team morale. Moving from nitpicking to architectural guidance.',
          topics: ['Code Review', 'Best Practices', 'Culture'],
          ctaText: 'Watch video',
        },
      ],
    },
    contact: {
      heading: "Let's connect",
      subheading: "I'm always open to discussing engineering leadership, speaking opportunities, or architectural challenges.",
      copyright: 'All rights reserved.',
    },
  },

  es: {
    nav: {
      about: 'Acerca',
      work: 'Trabajo',
      content: 'Contenido',
      contact: 'Contacto',
      cta: 'Contáctame',
    },
    hero: {
      tags: ['INGENIERÍA', 'IA', 'DESARROLLO PROFESIONAL'],
      roles: 'Desarrollador de Software Staff · Profesor · Creador de Contenido',
      cta: 'Contáctame',
    },
    about: {
      heading: 'Ingeniería con propósito,',
      headingItalic: 'siempre para las personas.',
      values: [
        {
          title: 'Las personas primero',
          description: 'La tecnología es tan buena como los problemas humanos que resuelve. Construyo para las personas, no por el código en sí.',
        },
        {
          title: 'Trabajar con eficiencia',
          description: 'Maximizar el impacto requiere minimizar la fricción. Priorizo arquitecturas limpias y procesos escalables.',
        },
        {
          title: 'Excelencia práctica',
          description: 'La ingeniería rigurosa no significa sobreingeniería. Entrega calidad que importa.',
        },
        {
          title: 'Balance',
          description: 'Las carreras sostenibles se construyen sobre límites saludables. El descanso es parte del trabajo.',
        },
        {
          title: 'Liderazgo por coherencia',
          description: 'Las acciones hablan más que los títulos. Mi objetivo es liderar marcando el estándar y llevando a otros consigo.',
        },
      ],
    },
    work: {
      label: 'Trabajo Selecto',
      heading: 'Proyectos e Ingeniería',
      subheading: 'Una selección de implementaciones arquitectónicas, contribuciones de código abierto y materiales educativos.',
      projects: [
        {
          type: 'ARQUITECTURA DE SISTEMAS',
          title: 'Escalando Microservicios Basados en Eventos',
          description: 'Un análisis completo de la transición de un sistema monolítico heredado a una arquitectura basada en eventos que maneja más de 10k solicitudes por segundo, con enfoque en consistencia de datos y experiencia del desarrollador.',
          topics: ['Arquitectura', 'Kafka', 'Go'],
          ctaText: 'Leer caso →',
        },
        {
          type: 'INTEGRACIÓN DE IA',
          title: 'LLMs en Producción: Más Allá del Prototipo',
          description: 'Estrategias prácticas para pasar Modelos de Lenguaje Grandes de Jupyter notebooks a servicios API listos para producción con manejo robusto de errores, caché y limitación de tasa.',
          topics: ['IA', 'Python', 'MLOps'],
          ctaText: 'Leer más →',
        },
        {
          type: 'EDUCACIÓN',
          title: 'Plan de Estudios de Estructuras de Datos Avanzadas',
          description: 'Un plan de estudios universitario de un semestre diseñado para cerrar la brecha entre la informática teórica y los requisitos prácticos de ingeniería de software en empresas tecnológicas modernas.',
          topics: ['Enseñanza', 'CS', 'Currículo'],
          ctaText: 'Ver plan →',
        },
        {
          type: 'CÓDIGO ABIERTO',
          title: 'Generador de API en TypeScript',
          description: 'Una utilidad de código abierto ampliamente usada que genera clientes frontend type-safe directamente desde especificaciones OpenAPI, reduciendo los errores de integración en un 40%.',
          topics: ['TypeScript', 'OpenAPI', 'Herramientas'],
          ctaText: 'Ver repositorio →',
        },
      ],
    },
    content: {
      label: 'Escritura y Ponencias',
      heading: 'Ideas y Perspectivas',
      tabs: { articles: 'Artículos', videos: 'Videos' },
      articles: [
        {
          type: 'ARTÍCULO',
          duration: '8 MIN',
          title: 'El Mito del Desarrollador 10x',
          description: 'Por qué las organizaciones de ingeniería deben optimizar para equipos 10x en lugar de perseguir contribuidores individuales míticos, y cómo construir entornos que fomenten la excelencia colectiva.',
          topics: ['Liderazgo', 'Cultura', 'Gestión'],
          ctaText: 'Leer artículo →',
        },
        {
          type: 'ARTÍCULO',
          duration: '12 MIN',
          title: 'Programación Defensiva en React',
          description: 'Patrones para construir aplicaciones React resilientes que manejan graciosamente los fallos de API, cambios de estado inesperados y entradas de usuario erráticas sin fallar.',
          topics: ['React', 'Frontend', 'Patrones'],
          ctaText: 'Leer artículo →',
        },
        {
          type: 'ARTÍCULO',
          duration: '5 MIN',
          title: 'Equilibrando el Libro Mayor de Deuda Técnica',
          description: 'Un marco para categorizar la deuda técnica y comunicar su impacto a las partes interesadas no técnicas para asegurar tiempo para la refactorización.',
          topics: ['Ingeniería', 'Estrategia', 'Comunicación'],
          ctaText: 'Leer artículo →',
        },
      ],
      videos: [
        {
          type: 'VIDEO',
          duration: '45 MIN',
          title: 'Dominando las Entrevistas de Diseño de Sistemas',
          description: 'Un análisis exhaustivo de cómo abordar problemas complejos de diseño de sistemas, enfocándose en concesiones, cuellos de botella y estrategias de escalado.',
          topics: ['Diseño de Sistemas', 'Entrevistas', 'Arquitectura'],
          ctaText: 'Ver video',
        },
        {
          type: 'VIDEO',
          duration: '18 MIN',
          title: 'Revisiones de Código Efectivas',
          description: 'Cómo realizar revisiones de código que realmente mejoran la calidad del código sin dañar la moral del equipo. Pasando de la corrección de detalles a la guía arquitectónica.',
          topics: ['Revisión de Código', 'Buenas Prácticas', 'Cultura'],
          ctaText: 'Ver video',
        },
      ],
    },
    contact: {
      heading: 'Conectemos',
      subheading: 'Siempre estoy disponible para discutir liderazgo en ingeniería, oportunidades de ponencias o desafíos arquitectónicos.',
      copyright: 'Todos los derechos reservados.',
    },
  },
} as const;

export type Translations = typeof translations[Language];
