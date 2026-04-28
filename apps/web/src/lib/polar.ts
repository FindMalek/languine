import { Polar } from "@polar-sh/sdk";

let _api: Polar | null = null;

export function getPolarApi() {
  if (!_api) {
    _api = new Polar({
      accessToken: process.env.POLAR_ACCESS_TOKEN!,
      server: process.env.NEXT_PUBLIC_POLAR_ENVIRONMENT as
        | "production"
        | "sandbox",
    });
  }
  return _api;
}
