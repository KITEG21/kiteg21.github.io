import type { Locale } from '../i18n';

type ProjectLike = {
	slug: string;
	name: string;
	description: string;
	overview?: string;
	architectureNotes?: string;
	decisions?: string[];
	challenges?: string[];
	tradeoffs?: string[];
};

type LocalizedProjectFields = Partial<
	Pick<ProjectLike, 'name' | 'description' | 'overview' | 'architectureNotes' | 'decisions' | 'challenges' | 'tradeoffs'>
>;

const projectTranslations: Record<'es' | 'it', Record<string, LocalizedProjectFields>> = {
	es: {
		renta: {
			description:
				'API Web en .NET 9.0 para alquileres premium (autos, yates) y gestión de eventos con boletos QR, pagos con Stripe y manejo multimedia.',
			overview:
				'Backend modular de alto rendimiento para alquileres de lujo y gestión de eventos, con inventario multi-entidad para autos, yates y eventos, además de ticketing QR y flujos de pago integrados.',
			architectureNotes:
				'Renta.WebApi -> Renta.Application (CQRS) -> Renta.Domain -> Renta.Infrastructure. Rutas con FastEndpoints, FluentValidation, doble DbContext para lectura/escritura, webhooks de Stripe y media con Cloudinary.',
			decisions: [
				'Patrón CQRS para separar operaciones de lectura y escritura',
				'FastEndpoints para APIs modernas y mínimas en lugar de MVC',
				'Patrón repositorio para acceso a datos testeable',
				'Doble DbContext para separar lectura/escritura orientado a CQRS',
				'FluentValidation para validación declarativa de requests',
				'Cloudinary para CDN multimedia escalable',
				'Webhooks de Stripe para pagos asíncronos e idempotentes',
				'Autenticación JWT para seguridad stateless por roles',
			],
			challenges: [
				'El doble DbContext aumenta la complejidad de migraciones',
				'Las pruebas de webhooks requieren CLI o entorno staging',
				'Validación QR offline frente a sincronización en tiempo real',
				'Cloudinary introduce dependencia de proveedor',
				'CQRS agrega sobrecarga de archivos/modelos, pero mejora consultas',
			],
			tradeoffs: [
				'Complejidad de API monolítica vs servicios modulares',
				'Complejidad de CQRS vs optimización de consultas',
				'Esquema de FluentValidation vs mayor código de aplicación',
				'JWT stateless vs gestión formal de sesiones',
				'Dependencia de Cloudinary vs beneficios de media gestionada',
			],
		},
		'rules-engine': {
			name: 'Amán Rules Engine',
			description:
				'Plataforma full-stack para autoría y evaluación de reglas: UI React + Next.js con conversiones de lenguaje natural a AST usando IA, y evaluador de alto rendimiento en Go.',
			overview:
				'Engine de reglas texto-a-AST donde el usuario escribe intención, pulsa Generar, un LLM externo (Gemini) devuelve AST, la UI renderiza JSON + editor interactivo y el motor evalúa con salida de trazas.',
			architectureNotes:
				'UI Next.js / React -> API de LLM (Gemini) para NL-to-AST -> render AST + datos de prueba en UI -> evaluador de reglas en Go (+ trazas) -> salida de resultados. Persistencia en Postgres JSONB y evaluación en memoria por request.',
			decisions: [
				'Go por rendimiento y tipado fuerte',
				'PostgreSQL JSONB para modelos de reglas flexibles',
				'chi para routing mínimo y middleware extensible',
				'Gemini para evitar alojar un modelo propio y aprovechar capacidades modernas',
			],
			challenges: [
				'Serialización JSON de pgx JSONB []byte en respuestas',
				'Seguridad de tipos con payloads de reglas dinámicas',
				'Flexibilidad de operadores para eq/gte/string/colecciones',
				'Resolución de campos anidados con parser de notación por puntos',
			],
			tradeoffs: [
				'El parser se crea por request (costo de asignación en MVP)',
				'Regex compiladas en cada evaluación en lugar de caché',
				'Sin caché de reglas a nivel DB todavía (posible Redis después)',
				'Evaluador en un solo nodo vs distribución (elegido para versión inicial)',
				'Sin auth en API de reglas aún; primero MVP, JWT después',
			],
		},
		zitasmart: {
			description:
				'Plataforma SaaS multi-tenant de reservas para negocios de servicios (salones, clínicas, consultores). Gestiona citas, colaboradores, servicios y suscripciones.',
			overview:
				'ZitaSmart es un sistema full-stack de gestión de reservas diseñado para negocios de servicios. Incluye multi-tenancy con roles (SuperAdmin, TenantAdmin, Worker, Client), gestión de reservas con estados y planes de suscripción flexibles (Free, Basic $20, Professional $50, Enterprise $100). Cloudinary permite branding por tenant con gestión de imágenes.',
			architectureNotes:
				'Arquitectura monorepo (pnpm + Turbo) con frontend Next.js 15 y backend .NET Core. El backend sigue Clean Architecture: WebApi -> Application (CQRS) -> Domain -> Infrastructure (EF Core + PostgreSQL). La base incluye esquemas de identidad, multi-tenancy, reservas y pagos.',
			decisions: [
				'Monorepo con pnpm + Turbo para código compartido, builds rápidos y CI/CD unificado',
				'Next.js 15 App Router para server components, SEO y patrones modernos de React',
				'.NET Clean Architecture para separación de responsabilidades y mantenibilidad',
				'EF Core con PostgreSQL para datos relacionales y migraciones',
				'JWT + Refresh Tokens para autenticación stateless segura con rotación',
				'Soft Delete para retención lógica y filtros globales',
				'Repositorios genéricos para aplicar DRY en operaciones CRUD',
				'Planes de suscripción por niveles con límites por plan',
			],
			challenges: [
				'Concurrencia: manejar reservas simultáneas en el mismo horario',
				'Aislamiento multi-tenant con consultas eficientes',
				'Aplicar límites de plan en colaboradores, servicios y citas',
				'Disponibilidad de trabajadores con lógica de excepciones y vacaciones',
				'Integración de pagos con carga de comprobantes y sesiones',
			],
			tradeoffs: [
				'Complejidad de monorepo vs despliegues independientes',
				'EF Core (productividad) vs SQL puro (rendimiento)',
				'Repositorios genéricos (DRY) vs queries específicas',
				'JWT (stateless) vs sesiones de servidor',
				'Acoplamiento frontend/backend vs SOA para iterar más rápido en MVP',
			],
		},
	},
	it: {
		renta: {
			description:
				'Web API .NET 9.0 per noleggi premium (auto, yacht) ed eventi con biglietti QR, pagamenti Stripe e gestione multimedia.',
			overview:
				'Backend modulare ad alte prestazioni per noleggi di lusso e gestione eventi, con inventario multi-entità per auto, yacht ed eventi, oltre a ticketing QR e flussi di pagamento integrati.',
			architectureNotes:
				'Renta.WebApi -> Renta.Application (CQRS) -> Renta.Domain -> Renta.Infrastructure. Routing FastEndpoints, FluentValidation, doppio DbContext lettura/scrittura, webhook Stripe e media con Cloudinary.',
			decisions: [
				'Pattern CQRS per separare operazioni di lettura e scrittura',
				'FastEndpoints per API moderne e minimali al posto di MVC',
				'Repository pattern per accesso ai dati testabile',
				'Doppio DbContext per separazione read/write orientata a CQRS',
				'FluentValidation per validazione dichiarativa delle richieste',
				'Cloudinary come CDN multimedia scalabile',
				'Webhook Stripe per pagamenti asincroni e idempotenti',
				'Autenticazione JWT per sicurezza stateless basata su ruoli',
			],
			challenges: [
				'Il doppio DbContext aumenta la complessità delle migrazioni',
				'Test dei webhook richiede CLI o ambiente di staging',
				'Validazione ticket QR offline vs sincronizzazione real-time',
				'Cloudinary introduce lock-in del fornitore',
				'CQRS aggiunge overhead ma migliora performance in query',
			],
			tradeoffs: [
				'Complessità API monolitica vs servizi modulari',
				'Complessità CQRS vs ottimizzazione query',
				'Schema FluentValidation vs maggiore codice applicativo',
				'JWT stateless vs gestione sessioni tradizionale',
				'Lock-in Cloudinary vs benefici del media gestito',
			],
		},
		'rules-engine': {
			name: 'Amán Rules Engine',
			description:
				'Piattaforma full-stack per authoring e valutazione regole: UI React + Next.js con conversione da linguaggio naturale ad AST tramite AI e valutatore ad alte prestazioni in Go.',
			overview:
				'Rules engine text-to-AST: l utente scrive l intento, clicca Generate, un LLM esterno (Gemini) restituisce AST, la UI mostra JSON + editor interattivo e il motore valuta con output di trace.',
			architectureNotes:
				'UI Next.js / React -> API LLM (Gemini) per NL-to-AST -> render AST + dati di test UI -> valutatore Go (+ trace) -> output risultati. Persistenza in Postgres JSONB, valutazione in memoria per richiesta.',
			decisions: [
				'Go per prestazioni e tipizzazione forte',
				'PostgreSQL JSONB per modelli regola flessibili',
				'chi per routing minimale e middleware estendibile',
				'Gemini per evitare hosting di un modello proprietario',
			],
			challenges: [
				'Serializzazione JSON di pgx JSONB []byte nelle risposte',
				'Type safety con payload regole dinamici',
				'Flessibilità operatori per eq/gte/string/collection',
				'Risoluzione campi annidati con parser dot notation',
			],
			tradeoffs: [
				'Parser creato a ogni richiesta (overhead allocazioni MVP)',
				'Regex compilate ad ogni valutazione invece che in cache',
				'Nessuna cache regole lato DB per ora (Redis possibile)',
				'Valutatore single-node vs distribuito (scelto per release iniziale)',
				'Nessuna auth API regole al momento; prima MVP, poi JWT',
			],
		},
		zitasmart: {
			description:
				'Piattaforma SaaS multi-tenant per prenotazioni di attività di servizi (saloni, cliniche, consulenti). Gestione appuntamenti, operatori, servizi e abbonamenti.',
			overview:
				'ZitaSmart è un sistema full-stack di booking per attività di servizi. Offre multi-tenancy con ruoli (SuperAdmin, TenantAdmin, Worker, Client), gestione prenotazioni con stati e piani abbonamento flessibili (Free, Basic $20, Professional $50, Enterprise $100). Cloudinary abilita branding tenant e gestione immagini.',
			architectureNotes:
				'Architettura monorepo (pnpm + Turbo) con frontend Next.js 15 e backend .NET Core. Il backend usa Clean Architecture: WebApi -> Application (CQRS) -> Domain -> Infrastructure (EF Core + PostgreSQL). Database con schemi identità, multi-tenancy, booking e pagamenti.',
			decisions: [
				'Monorepo con pnpm + Turbo per codice condiviso, build rapide e CI/CD unificata',
				'Next.js 15 App Router per server components, SEO e pattern React moderni',
				'.NET Clean Architecture per separazione responsabilità e manutenibilità',
				'EF Core con PostgreSQL per dati relazionali e migrazioni',
				'JWT + Refresh Token per autenticazione stateless sicura con rotazione',
				'Soft Delete per retention logica e filtri globali',
				'Repository generici per applicare DRY nelle CRUD',
				'Piani multi-tier con limiti d uso per livello',
			],
			challenges: [
				'Concorrenza: gestire prenotazioni simultanee sullo stesso slot',
				'Isolamento multi-tenant con query efficienti',
				'Applicare limiti piano su operatori, servizi e prenotazioni',
				'Disponibilità operatori con logiche di eccezioni e ferie',
				'Integrazione pagamenti con upload prova manuale e sessioni',
			],
			tradeoffs: [
				'Complessità monorepo vs deploy indipendenti',
				'EF Core (produttività) vs SQL raw (performance)',
				'Repository generici (DRY) vs query specifiche',
				'JWT stateless vs session management tradizionale',
				'Coupling frontend/backend vs SOA per iterare più veloce in MVP',
			],
		},
	},
};

export function localizeProject<T extends ProjectLike>(project: T, locale: Locale): T {
	if (locale === 'en') {
		return project;
	}

	const translated = projectTranslations[locale][project.slug];
	if (!translated) {
		return project;
	}

	return {
		...project,
		...translated,
	};
}
