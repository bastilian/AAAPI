import { describe, expect, test } from 'vitest'

import { create, updateJobById } from '../../models/job.server';
import {loader} from './job.$jobID'
 
describe('Returns proper status based off jobs current attribute', () => {
  
  test('should return status of new', async () => {
    const newJob = await create();
    const doneJob = await updateJobById(newJob.id, { status: 'new'});
    const response = await loader({ params: { jobId: doneJob.id }});

    expect(response.status).toBe(200)
    expect( await response.json()).toEqual({
      statusKey: 'new status'
    })
  })
  test('should return status of pending', async () => {
    const newJob = await create();
    const doneJob = await updateJobById(newJob.id, { status: 'pending'});
    const response = await loader({ params: { jobId: doneJob.id }});

    expect(response.status).toBe(200)
    expect( await response.json()).toEqual({
      statusKey: 'pending status'
    })
  })

  test('should return status of done', async () => {
    const newJob = await create();
    const doneJob = await updateJobById(newJob.id, { status: 'done'});
    const response = await loader({ params: { jobId: doneJob.id }});

    expect(response.status).toBe(200)
    expect( await response.json()).toEqual({
      statusKey: 'done status'
    })
  })
 
})
