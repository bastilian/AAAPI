import { describe, expect, test } from 'vitest'

import { create, updateJobById } from '../../models/job.server';
import {loader} from './job.$jobID'
 
describe('Returns proper status based off jobs current attribute', () => {
  test('should return status of new', async () => {
    const newJob = await create();
    const job = await updateJobById(newJob.id, { status: 'new'});
    expect(await loader(job.status) === (<div>{'new status'}</div>))
  })
  test('should return status of pending', async () => {
    const pendingJob = await create();
    const job = await updateJobById(pendingJob.id, { status: 'pending'});
    expect(await loader(job.status) === (<div>{'pending status'}</div>))
  })
  test('should return status of done', async () => {
    const doneJob = await create();
    const job = await updateJobById(doneJob.id, { status: 'done'});
    expect(await loader(job.status) === (<div>{'done status'}</div>))
  })
 
})
