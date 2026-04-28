import { appendFileSync } from "node:fs";
import type { Config } from "../utils/config.ts";
import { runCommand } from "../utils/exec.ts";
import { logger } from "../utils/logger.ts";

interface ExecError extends Error {
  stderr?: string;
}

export class TranslationService {
  #getCliCommand(cliVersion = "latest") {
    return `languine@${cliVersion}`;
  }

  async runTranslation(config: Config) {
    try {
      const { apiKey, projectId, cliVersion, workingDirectory, baseUrl } = config;

      const cliCommand = this.#getCliCommand(cliVersion);

      logger.debug(`CLI Command: bun x ${cliCommand}`);
      logger.debug(`Project ID: ${projectId}`);
      logger.debug(`CLI Version: ${cliVersion}`);
      logger.debug(`Working Directory: ${process.cwd()}`);
      logger.debug(`Base URL: ${baseUrl}`);

      // Write LANGUINE_BASE_URL to .env so the CLI picks it up regardless of version
      appendFileSync(`${process.cwd()}/.env`, `\nLANGUINE_BASE_URL=${baseUrl}\n`);

      await runCommand([
        "bunx",
        cliCommand,
        "translate",
        "--project-id",
        projectId,
        "--api-key",
        apiKey,
      ]);
    } catch (error) {
      logger.error(`Translation process failed: ${error}`);
      throw error;
    }
  }
}
