import type { Locale } from '../i18n';

export type CvCopy = {
	header: {
		role: string;
		bio: string;
		downloadCv: string;
	};
	stats: { label: string }[];
	domains: {
		sectionLabel: string;
		title1: string;
		title2: string;
		subtitle: string;
		descriptions: [string, string, string, string, string, string];
	};
	experienceSection: {
		sectionLabel: string;
		title1: string;
		title2: string;
		jobs: { highlights: string[] }[];
	};
	education: {
		sectionLabel: string;
		degree: string;
		university: string;
		period: string;
	};
	languages: {
		sectionLabel: string;
		items: { lang: string; level: string; pct: number }[];
	};
};

const cvCopy: Record<Locale, CvCopy> = {
	en: {
		header: {
			role: 'Backend Software Engineer · Tech Lead · Co-Founder',
			bio: '5+ years building production systems in C#/.NET — distributed architectures, tech leadership, and AI-powered automation.',
			downloadCv: 'Download CV',
		},
		stats: [
			{ label: 'Years Building' },
			{ label: 'Projects' },
			{ label: 'Active Roles' },
			{ label: 'English Level' },
		],
		domains: {
			sectionLabel: 'Core Competencies',
			title1: 'Technical',
			title2: 'Domains',
			subtitle: 'Areas where I build with depth, not just breadth.',
			descriptions: [
				'Production-grade backend with years of deep framework knowledge. Clean Architecture from day one.',
				'Designing for complexity — translating messy business requirements into clean, scalable systems.',
				'Azure-native deployments, containerized workflows, and fully automated CI/CD pipelines.',
				'Reliable persistence and async inter-service communication at production scale.',
				'LLM-powered workflows embedded into real business operations — not just demos.',
				'End-to-end delivery when the product needs it — from Go microservices to React UIs.',
			],
		},
		experienceSection: {
			sectionLabel: 'Career',
			title1: 'Work',
			title2: 'Experience',
			jobs: [
				{
					highlights: [
						'Lead all technical direction, architecture decisions, and product delivery',
						'Built ZitaSmart: multi-tenant SaaS booking platform — 45% productivity improvement',
						'Designed yacht management platform with BackOffice and customer-facing website',
						'Developed specialized ERP solutions for food-service businesses',
					],
				},
				{
					highlights: [
						'Integrate LLM workflows into omnichannel automation (Facebook, Instagram, SMS, WhatsApp)',
						'Built data extraction system processing 15,000+ records in under 30 minutes',
						'Design scalable backend automation for marketing operations',
					],
				},
				{
					highlights: [
						'Promoted to Sub Tech Lead — coordinated 2 developers across 10+ domain services',
						'Improved application performance by 75% through query optimization and caching',
						'Implemented async workflows using RabbitMQ with CQRS-based Saga patterns',
					],
				},
				{
					highlights: [
						'Led team of 4 developers building a freelance marketplace platform',
						'Guided backend architecture decisions using C#/.NET across business + offer domains',
					],
				},
				{
					highlights: [
						'Built patient & disease management system with clinical workflows in C#/.NET',
						'Developed multi-vehicle rental reservation REST API (early version of Renta)',
					],
				},
			],
		},
		education: {
			sectionLabel: 'Education',
			degree: 'B.Sc. Computer Engineering',
			university: 'CUJAE – Havana, Cuba',
			period: 'Sep 2024 — Jun 2028 (Expected)',
		},
		languages: {
			sectionLabel: 'Languages',
			items: [
				{ lang: 'Spanish', level: 'Native', pct: 100 },
				{ lang: 'English', level: 'C1 Advanced', pct: 85 },
				{ lang: 'Italian', level: 'Intermediate', pct: 52 },
			],
		},
	},

	es: {
		header: {
			role: 'Ingeniero de Software Backend · Tech Lead · Co-Fundador',
			bio: 'Más de 5 años construyendo sistemas de producción en C#/.NET — arquitecturas distribuidas, liderazgo técnico y automatización con IA.',
			downloadCv: 'Descargar CV',
		},
		stats: [
			{ label: 'Años construyendo' },
			{ label: 'Proyectos' },
			{ label: 'Roles activos' },
			{ label: 'Nivel de inglés' },
		],
		domains: {
			sectionLabel: 'Competencias principales',
			title1: 'Áreas',
			title2: 'Técnicas',
			subtitle: 'Áreas en las que construyo con profundidad, no solo amplitud.',
			descriptions: [
				'Backend de grado producción con años de conocimiento profundo del framework. Arquitectura limpia desde el primer día.',
				'Diseño para la complejidad — traduciendo requisitos de negocio complicados en sistemas limpios y escalables.',
				'Despliegues nativos en Azure, flujos de trabajo containerizados y pipelines CI/CD completamente automatizados.',
				'Persistencia confiable y comunicación asíncrona entre servicios a escala de producción.',
				'Flujos de trabajo con LLMs integrados en operaciones de negocio reales — no solo demos.',
				'Entrega end-to-end cuando el producto lo necesita — desde microservicios en Go hasta UIs en React.',
			],
		},
		experienceSection: {
			sectionLabel: 'Carrera',
			title1: 'Experiencia',
			title2: 'Laboral',
			jobs: [
				{
					highlights: [
						'Lidero toda la dirección técnica, decisiones de arquitectura y entrega del producto',
						'Construí ZitaSmart: plataforma SaaS de reservas multi-tenant — 45% de mejora en productividad',
						'Diseñé plataforma de gestión de yates con BackOffice y sitio web orientado al cliente',
						'Desarrollé soluciones ERP especializadas para negocios de servicio de alimentos',
					],
				},
				{
					highlights: [
						'Integro flujos de trabajo LLM en automatización omnicanal (Facebook, Instagram, SMS, WhatsApp)',
						'Construí sistema de extracción de datos procesando 15,000+ registros en menos de 30 minutos',
						'Diseño automatización backend escalable para operaciones de marketing',
					],
				},
				{
					highlights: [
						'Ascendido a Sub Tech Lead — coordiné 2 desarrolladores en más de 10 servicios de dominio',
						'Mejoré el rendimiento de la aplicación en un 75% mediante optimización de consultas y caché',
						'Implementé flujos de trabajo asíncronos usando RabbitMQ con patrones Saga basados en CQRS',
					],
				},
				{
					highlights: [
						'Lideré equipo de 4 desarrolladores construyendo una plataforma de marketplace freelance',
						'Guié decisiones de arquitectura backend usando C#/.NET en dominios de negocio y oferta',
					],
				},
				{
					highlights: [
						'Construí sistema de gestión de pacientes y enfermedades con flujos de trabajo clínicos en C#/.NET',
						'Desarrollé API REST de reservas multi-vehículo (versión temprana de Renta)',
					],
				},
			],
		},
		education: {
			sectionLabel: 'Educación',
			degree: 'Ing. en Informática',
			university: 'CUJAE – La Habana, Cuba',
			period: 'Sep 2024 — Jun 2028 (Esperado)',
		},
		languages: {
			sectionLabel: 'Idiomas',
			items: [
				{ lang: 'Español', level: 'Nativo', pct: 100 },
				{ lang: 'Inglés', level: 'C1 Avanzado', pct: 85 },
				{ lang: 'Italiano', level: 'Intermedio', pct: 52 },
			],
		},
	},

	it: {
		header: {
			role: 'Backend Software Engineer · Tech Lead · Co-Fondatore',
			bio: 'Oltre 5 anni nella costruzione di sistemi di produzione in C#/.NET — architetture distribuite, leadership tecnica e automazione con AI.',
			downloadCv: 'Scarica CV',
		},
		stats: [
			{ label: 'Anni di esperienza' },
			{ label: 'Progetti' },
			{ label: 'Ruoli attivi' },
			{ label: 'Livello inglese' },
		],
		domains: {
			sectionLabel: 'Competenze principali',
			title1: 'Aree',
			title2: 'Tecniche',
			subtitle: 'Aree in cui costruisco con profondità, non solo ampiezza.',
			descriptions: [
				'Backend di livello produzione con anni di conoscenza approfondita del framework. Clean Architecture fin dal primo giorno.',
				'Progettare per la complessità — tradurre requisiti di business complicati in sistemi puliti e scalabili.',
				'Deployment nativi su Azure, workflow containerizzati e pipeline CI/CD completamente automatizzate.',
				'Persistenza affidabile e comunicazione asincrona tra servizi su scala di produzione.',
				'Workflow LLM integrati in operazioni di business reali — non solo demo.',
				'Consegna end-to-end quando il prodotto lo richiede — dai microservizi Go alle UI React.',
			],
		},
		experienceSection: {
			sectionLabel: 'Carriera',
			title1: 'Esperienza',
			title2: 'Lavorativa',
			jobs: [
				{
					highlights: [
						'Guido tutta la direzione tecnica, le decisioni di architettura e la consegna del prodotto',
						'Sviluppato ZitaSmart: piattaforma SaaS di prenotazione multi-tenant — 45% di miglioramento della produttività',
						'Progettato piattaforma di gestione yacht con BackOffice e sito web orientato al cliente',
						'Sviluppato soluzioni ERP specializzate per aziende di ristorazione',
					],
				},
				{
					highlights: [
						"Integro workflow LLM nell'automazione omnicanale (Facebook, Instagram, SMS, WhatsApp)",
						'Realizzato sistema di estrazione dati che elabora 15.000+ record in meno di 30 minuti',
						'Progetto automazione backend scalabile per operazioni di marketing',
					],
				},
				{
					highlights: [
						'Promosso a Sub Tech Lead — coordinato 2 sviluppatori su oltre 10 servizi di dominio',
						"Migliorato le performance dell'applicazione del 75% tramite ottimizzazione delle query e caching",
						'Implementato workflow asincroni con RabbitMQ usando pattern Saga basati su CQRS',
					],
				},
				{
					highlights: [
						'Guidato team di 4 sviluppatori nella costruzione di una piattaforma marketplace per freelance',
						'Guidato decisioni di architettura backend usando C#/.NET nei domini business e offerta',
					],
				},
				{
					highlights: [
						'Realizzato sistema di gestione pazienti e malattie con workflow clinici in C#/.NET',
						'Sviluppato REST API per prenotazione multi-veicolo (versione iniziale di Renta)',
					],
				},
			],
		},
		education: {
			sectionLabel: 'Istruzione',
			degree: 'Laurea in Ingegneria Informatica',
			university: "CUJAE – L'Avana, Cuba",
			period: 'Set 2024 — Giu 2028 (Previsto)',
		},
		languages: {
			sectionLabel: 'Lingue',
			items: [
				{ lang: 'Spagnolo', level: 'Madrelingua', pct: 100 },
				{ lang: 'Inglese', level: 'C1 Avanzato', pct: 85 },
				{ lang: 'Italiano', level: 'Intermedio', pct: 52 },
			],
		},
	},
};

export function getCvCopy(locale: Locale): CvCopy {
	return cvCopy[locale];
}
