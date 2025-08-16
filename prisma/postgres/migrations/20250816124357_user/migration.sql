-- CreateTable
CREATE TABLE "public"."users" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT,
    "password_hash" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("pk")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "public"."users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "public"."users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "users_pk_id_key" ON "public"."users"("pk", "id");
