ALTER TABLE "organizations" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "canceled_at" timestamp;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "polar_customer_id" text;