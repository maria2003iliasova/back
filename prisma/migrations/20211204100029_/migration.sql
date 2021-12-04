-- CreateTable
CREATE TABLE "record" (
    "record_id" SERIAL NOT NULL,
    "user" INTEGER NOT NULL,
    "worker_service" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME(6) NOT NULL,

    CONSTRAINT "record_pkey" PRIMARY KEY ("record_id")
);

-- CreateTable
CREATE TABLE "role" (
    "role_id" SERIAL NOT NULL,
    "role_title" VARCHAR(255) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "service" (
    "service_id" SERIAL NOT NULL,
    "service_title" VARCHAR(100) NOT NULL,
    "price" DECIMAL(20,2),

    CONSTRAINT "service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "middle_name" VARCHAR(255) NOT NULL,
    "login" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "telephone" VARCHAR(100) NOT NULL,
    "mail" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_role" (
    "user_role_id" SERIAL NOT NULL,
    "user" INTEGER NOT NULL,
    "role" INTEGER NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_role_id")
);

-- CreateTable
CREATE TABLE "worker" (
    "worker_id" SERIAL NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "middle_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "worker_pkey" PRIMARY KEY ("worker_id")
);

-- CreateTable
CREATE TABLE "worker_service" (
    "worker_service_id" SERIAL NOT NULL,
    "worker" INTEGER NOT NULL,
    "service" INTEGER NOT NULL,

    CONSTRAINT "worker_service_pkey" PRIMARY KEY ("worker_service_id")
);

-- AddForeignKey
ALTER TABLE "record" ADD CONSTRAINT "fk_user_record" FOREIGN KEY ("user") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "record" ADD CONSTRAINT "fk_worker_service_record" FOREIGN KEY ("worker_service") REFERENCES "worker_service"("worker_service_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "fk_role_user_role" FOREIGN KEY ("role") REFERENCES "role"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "fk_user_user_role" FOREIGN KEY ("user") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "worker_service" ADD CONSTRAINT "fk_service_worker_service" FOREIGN KEY ("service") REFERENCES "service"("service_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "worker_service" ADD CONSTRAINT "fk_worker_worker_service" FOREIGN KEY ("worker") REFERENCES "worker"("worker_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
