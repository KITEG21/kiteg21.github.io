export const locales = ['en', 'es', 'it'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const copy = {
	en: {
		nav: {
			projects: 'Projects',
			about: 'About',
			contact: 'Contact',
			cv: 'CV',
		},
		hero: {
			title1: 'Backend',
			title2: 'Systems Engineer',
			name: 'Gabriel Esteban Rodriguez Delgado',
			subtitle1: 'I design systems that scale.',
			subtitle2: 'Currently building at Horizon.gh and Crescendo Digital.',
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
			detailsLabel: 'Project details',
			repoLabel: 'GitHub',
			demoLabel: 'Demo',
		},
		about: {
			title1: 'About',
			title2: 'Me',
			paragraphs: [
				'I\'m a Backend Software Engineer and Tech Lead with 5+ years building production systems in C#/.NET — from multi-tenant booking platforms to distributed microservices handling contracts, payments, and reservations at scale. I\'ve progressed from individual contributor to leading engineering teams, taking ownership of architecture decisions, service design, and end-to-end backend delivery.',
				'Currently I co-found and lead the technical direction of Horizon.gh, where I design and build products like ZitaSmart (a multi-tenant SaaS booking platform) alongside specialized ERP and yacht management systems. I also build AI-powered backend automation at Crescendo Digital, integrating LLM workflows into omnichannel customer systems across Facebook, Instagram, SMS, and WhatsApp.',
				'My work is driven by a deep interest in system design — distributed workflows, event-driven patterns, performance bottlenecks, and translating complex business requirements into clean, maintainable code. I enjoy building things that users genuinely love and engineers are proud to work on.',
			],
			stats: {
				years: 'Years Building',
				delivered: 'Projects Delivered',
				languages: 'Languages',
				learn: 'To Learn',
			},
			skillsTitle: 'Core Focus Areas',
			downloadCv: 'Download CV',
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
		footer: 'Engineered with purpose.',
	},
	es: {
		nav: {
			projects: 'Proyectos',
			about: 'Sobre mí',
			contact: 'Contacto',
			cv: 'CV',
		},
		hero: {
			title1: 'Ingeniero de',
			title2: 'Sistemas Backend',
			name: 'Gabriel Esteban Rodriguez Delgado',
			subtitle1: 'Diseño sistemas que escalan.',
			subtitle2: 'Actualmente construyendo en Horizon.gh y Crescendo Digital.',
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
			detailsLabel: 'Detalles del proyecto',
			repoLabel: 'GitHub',
			demoLabel: 'Demo',
		},
		about: {
			title1: 'Sobre',
			title2: 'mí',
			paragraphs: [
				'Soy un Backend Software Engineer y Tech Lead con más de 5 años construyendo sistemas de producción en C#/.NET — desde plataformas de reservas multi-tenant hasta microservicios distribuidos que gestionan contratos, pagos y reservas a escala. He avanzado de colaborador individual a liderar equipos de ingeniería, tomando ownership de decisiones de arquitectura, diseño de servicios y entrega backend end-to-end.',
				'Actualmente co-fundo y lidero la dirección técnica de Horizon.gh, donde diseño y construyo productos como ZitaSmart (una plataforma SaaS de reservas multi-tenant) junto a sistemas ERP especializados y plataformas de gestión náutica. También construyo automatización backend impulsada por IA en Crescendo Digital, integrando flujos de trabajo LLM en sistemas omnicanal.',
				'Mi trabajo está impulsado por un profundo interés en el diseño de sistemas — flujos de trabajo distribuidos, patrones orientados a eventos, cuellos de botella de rendimiento y la traducción de requisitos de negocio complejos en código limpio y mantenible. Disfruto construir cosas que los usuarios realmente aman y los ingenieros se enorgullecen de mantener.',
			],
			stats: {
				years: 'Años construyendo',
				delivered: 'Proyectos entregados',
				languages: 'Lenguajes',
				learn: 'Por aprender',
			},
			skillsTitle: 'Áreas principales',
			downloadCv: 'Descargar CV',
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
		footer: 'Diseñado con propósito.',
	},
	it: {
		nav: {
			projects: 'Progetti',
			about: 'Chi sono',
			contact: 'Contatto',
			cv: 'CV',
		},
		hero: {
			title1: 'Backend',
			title2: 'Systems Engineer',
			name: 'Gabriel Esteban Rodriguez Delgado',
			subtitle1: 'Progetto sistemi che scalano.',
			subtitle2: 'Attualmente in costruzione presso Horizon.gh e Crescendo Digital.',
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
			detailsLabel: 'Dettagli del progetto',
			repoLabel: 'GitHub',
			demoLabel: 'Demo',
		},
		about: {
			title1: 'Chi',
			title2: 'sono',
			paragraphs: [
				"Sono un Backend Software Engineer e Tech Lead con oltre 5 anni di esperienza nella costruzione di sistemi di produzione in C#/.NET — da piattaforme di prenotazione multi-tenant a microservizi distribuiti che gestiscono contratti, pagamenti e prenotazioni su larga scala. Sono passato da contributor individuale a guidare team di ingegneria, assumendo la responsabilità di decisioni architetturali, progettazione dei servizi e consegna backend end-to-end.",
				"Attualmente co-fondo e guido la direzione tecnica di Horizon.gh, dove progetto e costruisco prodotti come ZitaSmart (una piattaforma SaaS di prenotazione multi-tenant) insieme a sistemi ERP specializzati e piattaforme di gestione nautica. Sviluppo anche automazione backend alimentata da AI presso Crescendo Digital, integrando flussi di lavoro LLM in sistemi di customer automation omnicanale.",
				"Il mio lavoro è guidato da un profondo interesse per il system design — flussi di lavoro distribuiti, pattern event-driven, colli di bottiglia nelle performance e la traduzione di requisiti di business complessi in codice pulito e manutenibile. Mi piace costruire prodotti che gli utenti amano davvero e di cui gli ingegneri vanno orgogliosi.",
			],
			stats: {
				years: 'Anni di esperienza',
				delivered: 'Progetti consegnati',
				languages: 'Linguaggi',
				learn: 'Da imparare',
			},
			skillsTitle: 'Aree principali',
			downloadCv: 'Scarica CV',
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
		footer: 'Progettato con scopo.',
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
