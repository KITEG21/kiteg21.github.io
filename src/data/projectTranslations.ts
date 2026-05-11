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
		tinkerSet: {
			description:
				'App escritorio/web para buscar y organizar archivos mediante reglas configurables y asistencia de LLMs. UI en React+Tauri con backend FastAPI para gestión y ejecución de acciones.',
			overview:
				'Monorepo que combina una interfaz de usuario en React (con estado gestionado por Zustand) empacada para escritorio con Tauri y un backend en Python (FastAPI). Permite definir "jobs" JSON que se pueden previsualizar o ejecutar sobre el sistema de ficheros, y ofrece interpretación de prompts naturales vía múltiples proveedores LLM. Dispone de CLI, rutas HTTP, y motores modulares de filtros y acciones.',
			architectureNotes:
				'Estructura de carpetas: frontend contiene la UI (React + TypeScript + Vite) y el wrapper Tauri (src-tauri/). app aloja el backend FastAPI con services/ (llm_service, processor, action_engine, filter_engine), models/ (Job), y cli.py. La app expone endpoints (p.ej. /preview, /execute, /ai/interpret) a los que la UI o el CLI pueden llamar; Tauri ofrece integración IPC para el ejecutable de escritorio. Configuración centralizada en config.py que carga .env. LLM integrations soportan groq, ollama y openai y están encapsuladas en services/llm_service.py.',
			decisions: [
				'Monorepo para mantener frontend (Tauri) y backend (FastAPI) juntos y facilitar pruebas locales',
				'Tauri + React para ofrecer experiencia de escritorio y desarrollo web con la misma base de código',
				'FastAPI + Pydantic para validación y endpoints HTTP rápidos y tipados',
				'Arquitectura basada en servicios (services/) para separar llm_service, processor, action_engine y filter_engine',
				'CLI (cli.py) para workflows offline y pruebas reproducibles',
				'Centralizar carga de .env en config.py para consistencia en entorno',
				'Tipado reforzado en frontend (evitar any, usar unknown y helper de errores) para mayor seguridad',
				'Estándar de nombres consistente para proveedores LLM',
			],
			challenges: [
				'Gestión de secretos en .env (riesgo de exponer API keys si se comite) — requiere políticas y CI secrets',
				'Tauri añade complejidad de build multiplataforma (Rust toolchain y dependencias nativas en Windows)',
				'Probar integraciones LLM puede requerir claves externas o sistemas de emulación para CI',
				'Sin base de datos persistente en el core: operaciones sobre ficheros y jobs en memoria/JSON requieren cuidado para concurrencia y recuperación',
				'Dependencias dev (Black, Ruff, pre-commit, pytest) incrementan la huella local y complican reproducibilidad sin CI',
			],
			tradeoffs: [
				'Monorepo facilita sincronía entre UI y backend pero puede aumentar tamaño del repositorio',
				'Tauri ofrece APIs nativas y empaquetado desktop a costa de builds más complejos y dependencias nativas',
				'Soportar múltiples proveedores LLM incrementa flexibilidad pero añade complejidad en el código y en la gestión de credenciales',
				'No usar una DB relacional simplifica el diseño inicial pero limita auditoría/rollback y facilita inconsistencias si hay fallos en ejecución',
				'Reescribir errores en frontend para usar unknown y helper mejora seguridad de tipos pero requiere cambios extensivos en componentes existentes',
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
		tinkerSet: {
			description:
				'Applicazione desktop/web per esplorare e organizzare file tramite regole configurabili e assistenza LLM. UI React+Tauri con backend FastAPI per elaborazione ed esecuzione azioni.',
			overview:
				'Monorepo che combina un\'interfaccia utente React (con stato gestito da Zustand) pacchettizzata per desktop con Tauri e backend Python (FastAPI). Consente di definire "job" JSON che possono essere visualizzati in anteprima o eseguiti sul file system, e offre interpretazione di prompt naturali tramite più provider LLM. Include CLI, rotte HTTP e motori modulari di filtri e azioni.',
			architectureNotes:
				'Struttura cartelle: frontend contiene l\'UI (React + TypeScript + Vite) e wrapper Tauri (src-tauri/). app ospita backend FastAPI con services/ (llm_service, processor, action_engine, filter_engine), models/ (Job) e cli.py. L\'app espone endpoint (ad es. /preview, /execute, /ai/interpret) che UI o CLI possono chiamare; Tauri fornisce integrazione IPC per l\'eseguibile desktop. Configurazione centralizzata in config.py che carica .env. Integrazioni LLM supportano groq, ollama e openai ed sono incapsulate in services/llm_service.py.',
			decisions: [
				'Monorepo per mantenere frontend (Tauri) e backend (FastAPI) insieme e facilitare test locali',
				'Tauri + React per offrire esperienza desktop e sviluppo web con la stessa base di codice',
				'FastAPI + Pydantic per validazione ed endpoint HTTP veloci e tipizzati',
				'Architettura basata su servizi (services/) per separare llm_service, processor, action_engine e filter_engine',
				'CLI (cli.py) per workflow offline e test riproducibili',
				'Centralizzare caricamento .env in config.py per coerenza ambiente',
				'Tipizzazione rafforzata in frontend (evitare any, usare unknown e helper errori) per sicurezza maggiore',
				'Standard di denominazione coerente per provider LLM',
			],
			challenges: [
				'Gestione segreti in .env (rischio di esporre API key se commessi) — richiede policy e CI secrets',
				'Tauri aggiunge complessità build multipiattaforma (Rust toolchain e dipendenze native su Windows)',
				'Test integrazioni LLM può richiedere chiavi esterne o sistemi emulazione per CI',
				'Senza database persistente nel core: operazioni file system e job in memoria/JSON richiedono attenzione per concorrenza e recupero',
				'Dipendenze dev (Black, Ruff, pre-commit, pytest) aumentano impronta locale e complicano riproducibilità senza CI',
			],
			tradeoffs: [
				'Monorepo facilita sincronizzazione UI-backend ma può aumentare dimensione repository',
				'Tauri offre API native e packaging desktop al costo di build più complessi e dipendenze native',
				'Supportare più provider LLM aumenta flessibilità ma aggiunge complessità codice e gestione credenziali',
				'Non usare DB relazionale semplifica design iniziale ma limita audit trail/rollback e agevola inconsistenze se esecuzione fallisce',
				'Riscrivere errori frontend per usare unknown e helper migliora sicurezza tipi ma richiede cambiamenti estensivi componenti',
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
