import { beforeAll, describe, expect, test, vi } from 'vitest'
import { prisma } from '../db.server';
import { create, deleteById, getById, } from './job.server';

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
