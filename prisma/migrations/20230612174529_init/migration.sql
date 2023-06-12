-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "JobRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jobId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "params" TEXT,
    "resultStatus" TEXT,
    "result" TEXT,
    CONSTRAINT "JobRequest_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "JobRequest_jobId_key" ON "JobRequest"("jobId");
