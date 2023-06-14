import { beforeAll, describe, expect, test, vi } from 'vitest'
import { prisma } from '../db.server';
import { create, deleteById, getById, updateJobById } from './job.server';

describe('getById', () => {
  beforeAll(async () => {
    for (const _job of new Array(10)) {
      await prisma.job.create({ data: {} })
    }
  })

  test('should render with correct props', async () => {
    const jobs = await prisma.job.findMany()
    expect((await getById(jobs[0].id)).id).toBe(jobs[0].id)
  })
})

describe('create', () => {
  test('should render with correct props', async () => {
    expect(await create()).toBeDefined()
  })
})

describe('create', () => {
  test('should render with correct props', async () => {
    const job = await create();

    expect((await deleteById(job.id)).id).toBe(job.id)
    expect(await getById(job.id)).toBeUndefined();
  })
})


describe('update job', () => {
  test('should render with correct props', async () => {
    const newJob = await create();
    const job = await updateJobById(newJob.id, { createdAt: '1990-06-13T10:36:18.759Z'});
    expect(await getById(newJob.id).createdAt === '1990-06-13T10:36:18.759Z');
  })
})

describe('create a job with passed params', () => {
  test('getbyid should return the correct result', async () => {
    const newJob = await create();
    const urlsArray = [
      {
        url: 'example.org'
      },
      {
        url: 'example.org'
      }
    ]
  for (const jobRequest of urlsArray) {
    await prisma.jobRequest.create({
      data: {
        jobId: newJob.id,
        url: jobRequest.url
      }
    })
  }

    expect(await getById(newJob.id)).toBeDefined()
    expect((await prisma.job.findFirst({ where: { id: newJob.id }, include: { jobRequests: true } })).jobRequests.length).toBe(2)
  })
})
