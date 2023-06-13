import { beforeAll, describe, expect, test, vi } from 'vitest'
import { prisma } from '../db.server';
import { getById } from './job_request.server';
import * as job from './job.server';

const createJobWithRequests = async () => {
  const newJob = await job.create();
  for (const _jobRequest of new Array(10)) {
    await prisma.jobRequest.create({
      data: {
        jobId: newJob.id,
        url: 'https://example.org'
      }
    })
  }
  return prisma.job.findFirst({ where: { id: newJob.id }, include: { jobRequests: true } })
}

describe('getById', () => {
  test('should render with correct props', async () => {
    const job = await createJobWithRequests();
    const jobRequest = job.jobRequests[0]

    expect((await getById(jobRequest.id)).id).toEqual(jobRequest.id)
  })
})
