export const locales = ['en', 'es', 'it'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const copy = {
	en: {
		nav: {
			projects: 'Projects',
			about: 'About',
			contact: 'Contact',
		},
		hero: {
			title1: 'Backend',
			title2: 'Systems Engineer',
			name: 'Gabriel Esteban Rodriguez Delgado',
			subtitle1: 'I design systems that scale.',
			subtitle2: 'Currently exploring AI infrastructure and backend optimization.',
			primaryCta: 'View My Work',
			secondaryCta: 'Get In Touch',
			scroll: '↓ scroll',
		},
		projects: {
			title1: 'Featured',
			title2: 'Projects',
			subtitle:
				'A selection of systems I\'ve engineered. Each represents deep focus on scalability, reliability, and architectural clarity.',
			cta: 'View all projects →',
			repoLabel: 'GitHub',
			demoLabel: 'Demo',
		},
		about: {
			title1: 'About',
			title2: 'Me',
			paragraphs: [
				'Im a Backend Engineer focused on building scalable, reliable systems with clean architecture and strong performance characteristics. I have hands-on experience developing production-grade APIs using .NET and PostgreSQL, where I have worked on optimizing queries, improving system efficiency, and implementing complex business logic. I enjoy creating products that satisfy clients—not just making something useful, but building applications that users genuinely love.',
				'My work is driven by a deep interest in system design and backend architecture, with a focus on creating solutions that are not only useful but also scalable and easy to maintain. I am particularly interested in designing services that scale effectively while remaining maintainable.',
				'Currently, I am expanding my skill set toward AI-powered applications, combining backend engineering with modern AI capabilities to build smarter systems. I enjoy learning by building, continuously refining my approach, and working on projects that push me to think like an engineer, not just a developer.',
			],
			stats: {
				years: 'Years Building',
				delivered: 'Projects Delivered',
				languages: 'Languages',
				learn: 'To Learn',
			},
			skillsTitle: 'Core Focus Areas',
		},
		contact: {
			title1: "Let's",
			title2: 'Build',
			subtitle:
				"Whether you're exploring backend infrastructure, scaling challenges, or just want to chat about distributed systems—let's connect.",
			statusPrefix: 'Currently',
			statusHighlight: 'available',
			statusSuffix: 'for consulting & full-time roles',
		},
		projectPage: {
			overview: 'Overview',
			architecture: 'Architecture',
			decisions: 'Key Technical Decisions',
			challenges: 'Challenges',
			tradeoffs: 'Trade-offs',
			resources: 'Resources',
			repo: 'GitHub Repository →',
			demo: 'Live Demo →',
			diagramComing: 'Diagram coming soon.',
		},
		footer: '© 2025. Engineered with purpose.',
	},
	es: {
		nav: {
			projects: 'Proyectos',
			about: 'Sobre mí',
			contact: 'Contacto',
		},
		hero: {
			title1: 'Ingeniero de',
			title2: 'Sistemas Backend',
			name: 'Gabriel Esteban Rodriguez Delgado',
			subtitle1: 'Diseño sistemas que escalan.',
			subtitle2: 'Actualmente explorando infraestructura de IA y optimización backend.',
			primaryCta: 'Ver mi trabajo',
			secondaryCta: 'Contactar',
			scroll: '↓ desplazar',
		},
		projects: {
			title1: 'Proyectos',
			title2: 'Destacados',
			subtitle:
				'Una selección de sistemas que he diseñado. Cada uno refleja enfoque en escalabilidad, confiabilidad y claridad arquitectónica.',
			cta: 'Ver todos los proyectos →',
			repoLabel: 'GitHub',
			demoLabel: 'Demo',
		},
		about: {
			title1: 'Sobre',
			title2: 'mí',
			paragraphs: [
				'Soy un Backend Engineer enfocado en construir sistemas escalables y confiables con arquitectura limpia y buen rendimiento. Tengo experiencia práctica desarrollando APIs de producción usando .NET y PostgreSQL, donde he trabajado optimizando consultas, mejorando la eficiencia del sistema e implementando lógica de negocio compleja. Disfruto crear productos que satisfacen a los clientes, no solo algo útil, sino aplicaciones que realmente les encantan a los usuarios.',
				'Mi trabajo está impulsado por el diseño de sistemas y la arquitectura backend, buscando soluciones que no solo sean útiles sino también escalables y fáciles de mantener. Me interesa especialmente diseñar servicios que crezcan de forma efectiva sin perder mantenibilidad.',
				'Actualmente estoy ampliando mis habilidades hacia aplicaciones impulsadas por IA, combinando backend engineering con capacidades modernas de inteligencia artificial para construir sistemas más inteligentes. Me gusta aprender construyendo, mejorar continuamente mi enfoque y trabajar en proyectos que me hagan pensar como ingeniero, no solo como desarrollador.',
			],
			stats: {
				years: 'Años construyendo',
				delivered: 'Proyectos entregados',
				languages: 'Lenguajes',
				learn: 'Por aprender',
			},
			skillsTitle: 'Áreas principales',
		},
		contact: {
			title1: 'Hagamos',
			title2: 'algo',
			subtitle:
				'Si estás explorando infraestructura backend, desafíos de escalado o simplemente quieres hablar de sistemas distribuidos, conectemos.',
			statusPrefix: 'Actualmente',
			statusHighlight: 'disponible',
			statusSuffix: 'para consultoría y tiempo completo',
		},
		projectPage: {
			overview: 'Resumen',
			architecture: 'Arquitectura',
			decisions: 'Decisiones técnicas clave',
			challenges: 'Desafíos',
			tradeoffs: 'Compromisos',
			resources: 'Recursos',
			repo: 'Repositorio en GitHub →',
			demo: 'Demo en vivo →',
			diagramComing: 'Diagrama próximamente.',
		},
		footer: '© 2025. Diseñado con propósito.',
	},
	it: {
		nav: {
			projects: 'Progetti',
			about: 'Chi sono',
			contact: 'Contatto',
		},
		hero: {
			title1: 'Backend',
			title2: 'Systems Engineer',
			name: 'Gabriel Esteban Rodriguez Delgado',
			subtitle1: 'Progetto sistemi che scalano.',
			subtitle2: 'Sto esplorando infrastrutture AI e ottimizzazione backend.',
			primaryCta: 'Vedi i miei lavori',
			secondaryCta: 'Contattami',
			scroll: '↓ scorri',
		},
		projects: {
			title1: 'Progetti',
			title2: 'In evidenza',
			subtitle:
				'Una selezione di sistemi che ho realizzato. Ogni progetto riflette attenzione a scalabilità, affidabilità e chiarezza architettonica.',
			cta: 'Vedi tutti i progetti →',
			repoLabel: 'GitHub',
			demoLabel: 'Demo',
		},
		about: {
			title1: 'Chi',
			title2: 'sono',
			paragraphs: [
				'Sono un Backend Engineer focalizzato sulla costruzione di sistemi scalabili e affidabili con architettura pulita e prestazioni solide. Ho esperienza pratica nello sviluppo di API di produzione con .NET e PostgreSQL, dove ho lavorato sull ottimizzazione delle query, sul miglioramento dell efficienza del sistema e sull implementazione di logiche di business complesse. Mi piace creare prodotti che soddisfano i clienti, non solo qualcosa di utile, ma applicazioni che gli utenti apprezzano davvero.',
				'Il mio lavoro nasce da un forte interesse per il system design e l architettura backend, con l obiettivo di creare soluzioni non solo utili ma anche scalabili e facili da mantenere. Sono particolarmente interessato a progettare servizi che crescano in modo efficace restando manutenibili.',
				'Attualmente sto ampliando le mie competenze verso applicazioni basate su AI, combinando backend engineering con capacità moderne di intelligenza artificiale per costruire sistemi più intelligenti. Mi piace imparare costruendo, perfezionare continuamente il mio approccio e lavorare su progetti che mi spingono a pensare come un ingegnere, non solo come uno sviluppatore.',
			],
			stats: {
				years: 'Anni di esperienza',
				delivered: 'Progetti consegnati',
				languages: 'Linguaggi',
				learn: 'Da imparare',
			},
			skillsTitle: 'Aree principali',
		},
		contact: {
			title1: 'Costruiamo',
			title2: 'insieme',
			subtitle:
				'Se stai esplorando infrastrutture backend, problemi di scalabilità o vuoi parlare di sistemi distribuiti, contattami.',
			statusPrefix: 'Attualmente',
			statusHighlight: 'disponibile',
			statusSuffix: 'per consulenza e ruoli full-time',
		},
		projectPage: {
			overview: 'Panoramica',
			architecture: 'Architettura',
			decisions: 'Decisioni tecniche chiave',
			challenges: 'Sfide',
			tradeoffs: 'Compromessi',
			resources: 'Risorse',
			repo: 'Repository GitHub →',
			demo: 'Demo live →',
			diagramComing: 'Diagramma in arrivo.',
		},
		footer: '© 2025. Progettato con scopo.',
	},
} as const;

export function getLocale(value?: string): Locale {
	return value === 'es' || value === 'it' ? value : 'en';
}

export function withLocalePath(pathname: string, locale: Locale): string {
	const normalized = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

	if (locale === 'en') {
		return normalized;
	}

	if (normalized === '/') {
		return `/${locale}`;
	}

	if (normalized.startsWith('/es/') || normalized.startsWith('/it/')) {
		return normalized;
	}

	return `/${locale}${normalized}`;
}
