CREATE TABLE "thumbnail_generation" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"prompt" text NOT NULL,
	"source_url" text,
	"format" text NOT NULL,
	"output_language" text NOT NULL,
	"strategy" text,
	"layout" text,
	"assets_count" integer DEFAULT 0 NOT NULL,
	"provider_id" text NOT NULL,
	"provider_mode" text NOT NULL,
	"model" text NOT NULL,
	"prediction_id" text,
	"results" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "thumbnail_generation" ADD CONSTRAINT "thumbnail_generation_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "thumbnail_generation_user_id_idx" ON "thumbnail_generation" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "thumbnail_generation_created_at_idx" ON "thumbnail_generation" USING btree ("created_at");