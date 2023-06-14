import { beforeAll, describe, expect, test, vi } from 'vitest'
import { prisma } from '../db.server';
import { create, deleteById, getJobById, updateJobById } from './job.server';

describe('getJobById', () => {
  beforeAll(async () => {
    for (const _job of new Array(10)) {
      await prisma.job.create({ data: {} })
    }
  })

  test('should render with correct props', async () => {
    const jobs = await prisma.job.findMany()
    expect((await getJobById(jobs[0].id)).id).toBe(jobs[0].id)
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
    expect(await getJobById(job.id)).toBeUndefined();
  })
})


describe('update job', () => {
  test('should render with correct props', async () => {
    const newJob = await create();
    const job = await updateJobById(newJob.id, { createdAt: '1990-06-13T10:36:18.759Z'});
    expect(await getJobById(newJob.id).createdAt === '1990-06-13T10:36:18.759Z');
  })
})
