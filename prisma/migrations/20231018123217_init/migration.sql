-- CreateEnum
CREATE TYPE "Unversity" AS ENUM ('Singapore Management University', 'National University of Singapore', 'Nanyang Technological University');

-- CreateEnum
CREATE TYPE "ReviewLabelName" AS ENUM ('COURSE_INTERESTING', 'COURSE_PRACTICAL', 'COURSE_GAINED_NEW_SKILLS', 'PROFESSOR_ENGAGING', 'PROFESSOR_FAIR_GRADING', 'PROFESSOR_EFFECTIVE_TEACHING');

-- CreateEnum
CREATE TYPE "ReviewLabelType" AS ENUM ('COURSE', 'PROFESSOR');

-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "tips" TEXT,
    "rating" INTEGER NOT NULL,
    "reviewed_professor_id" INTEGER NOT NULL,
    "reviewed_course_id" INTEGER NOT NULL,
    "reviewer_university_id" INTEGER NOT NULL,
    "reviewer_faculty_id" INTEGER NOT NULL,
    "reviewer_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "telegram_id" TEXT,
    "photo_url" TEXT,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "university_id" INTEGER NOT NULL,
    "faculty_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Universities" (
    "id" SERIAL NOT NULL,
    "name" "Unversity" NOT NULL,
    "site_url" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Universities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "credit_units" DOUBLE PRECISION NOT NULL,
    "belong_to_university" INTEGER NOT NULL,
    "belong_to_faculty" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "belong_to_university" INTEGER NOT NULL,
    "belong_to_faculty" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Professors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faculties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "site_url" TEXT NOT NULL,
    "belong_to_university" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Faculties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classes" (
    "id" SERIAL NOT NULL,
    "course_id" INTEGER NOT NULL,
    "professor_id" INTEGER NOT NULL,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Votes" (
    "id" SERIAL NOT NULL,
    "review_id" INTEGER NOT NULL,
    "voter_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Votes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Labels" (
    "id" SERIAL NOT NULL,
    "name" "ReviewLabelName" NOT NULL,
    "type_of" "ReviewLabelType" NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Labels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewLabels" (
    "id" SERIAL NOT NULL,
    "label_id" INTEGER NOT NULL,
    "review_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "ReviewLabels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewLabelStatistic" (
    "id" SERIAL NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,
    "label_id" INTEGER NOT NULL,
    "review_statistic_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "ReviewLabelStatistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewStatistic" (
    "id" SERIAL NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,
    "reviewed_professor_id" INTEGER NOT NULL,
    "review_course_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "ReviewStatistic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_telegram_id_key" ON "Users"("telegram_id");

-- CreateIndex
CREATE UNIQUE INDEX "Universities_site_url_key" ON "Universities"("site_url");

-- CreateIndex
CREATE UNIQUE INDEX "Faculties_site_url_key" ON "Faculties"("site_url");

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_reviewed_professor_id_fkey" FOREIGN KEY ("reviewed_professor_id") REFERENCES "Professors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_reviewed_course_id_fkey" FOREIGN KEY ("reviewed_course_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_reviewer_university_id_fkey" FOREIGN KEY ("reviewer_university_id") REFERENCES "Universities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_reviewer_faculty_id_fkey" FOREIGN KEY ("reviewer_faculty_id") REFERENCES "Faculties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_reviewer_id_fkey" FOREIGN KEY ("reviewer_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "Universities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "Faculties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_belong_to_university_fkey" FOREIGN KEY ("belong_to_university") REFERENCES "Universities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_belong_to_faculty_fkey" FOREIGN KEY ("belong_to_faculty") REFERENCES "Faculties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professors" ADD CONSTRAINT "Professors_belong_to_university_fkey" FOREIGN KEY ("belong_to_university") REFERENCES "Universities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professors" ADD CONSTRAINT "Professors_belong_to_faculty_fkey" FOREIGN KEY ("belong_to_faculty") REFERENCES "Faculties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faculties" ADD CONSTRAINT "Faculties_belong_to_university_fkey" FOREIGN KEY ("belong_to_university") REFERENCES "Universities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_professor_id_fkey" FOREIGN KEY ("professor_id") REFERENCES "Professors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "Reviews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_voter_id_fkey" FOREIGN KEY ("voter_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewLabels" ADD CONSTRAINT "ReviewLabels_label_id_fkey" FOREIGN KEY ("label_id") REFERENCES "Labels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewLabels" ADD CONSTRAINT "ReviewLabels_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "Reviews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewLabelStatistic" ADD CONSTRAINT "ReviewLabelStatistic_label_id_fkey" FOREIGN KEY ("label_id") REFERENCES "Labels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewLabelStatistic" ADD CONSTRAINT "ReviewLabelStatistic_review_statistic_id_fkey" FOREIGN KEY ("review_statistic_id") REFERENCES "ReviewStatistic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewStatistic" ADD CONSTRAINT "ReviewStatistic_reviewed_professor_id_fkey" FOREIGN KEY ("reviewed_professor_id") REFERENCES "Professors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewStatistic" ADD CONSTRAINT "ReviewStatistic_review_course_id_fkey" FOREIGN KEY ("review_course_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
