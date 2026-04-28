ALTER TABLE "organizations" ALTER COLUMN "tier" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organizations" ALTER COLUMN "tier" SET DATA TYPE integer USING tier::integer;--> statement-breakpoint
ALTER TABLE "organizations" ALTER COLUMN "tier" SET DEFAULT 0;