import type { Example } from "../domain/entities.js";

export type createExampleService = (example: Example) => Promise<Example>
