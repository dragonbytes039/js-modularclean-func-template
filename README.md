# Template: Modular Monolith (Mini-Clean Architecture per Module)

**Goal:** Build a monolith composed of loosely coupled modules. Each module is a self-contained feature slice employing Clean Architecture principles internally.
**Purpose:** To maximize development speed now while ensuring near-zero friction if a module needs to be extracted into a standalone microservice later.

## Global Structure (Shared Infrastructure)

These folders contain the shared technical foundation that runs the monolithic server. They should contain minimal business logic.

- **/src/config/DB**:
  - Shared database configuration and connection setup used by all modules (e.g., TypeORM DataSource, Mongoose connection).
- **/src/infraestructure/http**:
  - The shared HTTP server implementation (e.g., Express, Fastify).
  - Global middleware (logging, CORS, error handling).
  - Main routing mechanism that mounts module-specific routes.

## Modular Structure (`/src/modules`)

This directory contains the functional core of the application. Each folder here represents a distinct business domain (a potential microservice).

### Module Anatomy: `/modules/example`

Every module follows the exact same internal structure, representing a complete, isolated vertical slice of functionality.

#### 1. Domain Layer (Inner Core)
- **/modules/example/domain**:
  - The heart of the module. Contains Entities, Value Objects, and pure business logic specific to this module.
  - **Crucial:** This folder must have **zero dependencies** on other layers or external libraries.
  - Contains Repository Interfaces (the contracts for data access).

#### 2. Application Layer (Orchestration)
- **/modules/example/app**:
  - Contains the **Use Cases** (Services) for this module.
  - Orchestrates data flow between the Domain entities and the Repository interfaces.
  - Depends only on the module's own Domain layer.

#### 3. Adapters Layer (Interface)
- **/modules/example/adapters/express** (or /controllers):
  - Contains Controllers specific to the shared HTTP framework (e.g., Express handlers).
  - Responsible for receiving HTTP requests, calling the module's Application Services, and returning responses.

#### 4. Infrastructure Layer (Implementation)
- **/modules/example/repositories**:
  - Concrete implementations of the Repository Interfaces defined in the Domain layer.
  - Uses the shared configuration from `/src/config/DB` to access the database.

#### Module Assembly
- **/modules/example/index.ts**:
  - The "Public API" of the module.
  - It is responsible for wiring up its own internal dependencies (injecting repositories into services).
  - It exports **only** what the main application needs (normally the module adapters that will mount the main server).

---

### Main Entry Point

- **/src/index.ts**:
  - The composition root of the entire monolith.
  - It initializes the shared HTTP server and Database connection.
  - It imports the entry points of all modules (`/modules/*/index.ts`) and mounts their routes onto the main server.

### Key Rule for Future Splitting

To ensure ease of extraction later, **Rule #1 is strict boundary enforcement**:

A module's code (Application or Domain layers) **must never directly import** code from another module's folders. Inter-module communication must happen via public interfaces exposed in the module's `index.ts` or via event bus/messaging patterns, never direct file imports across module boundaries.
