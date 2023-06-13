import { loader } from './job'
import { prisma } from '../../db.server'

describe('loader test', () => {
    const body = {
        "urls": [
          {"url": "http://example.org/items", "params": { "testParam": "testParamValue", "page": 1 }},
          {"url": "http://example.org/items", "params": { "testParam": "testParamValue", "page": 2 }}
        ]
      }
    test('compare the job requests length', async () => {
        const jobsAmount = await prisma.job.findMany()
        loader({ data: { request :
            body
        }});
        const newJobsAmount = await prisma.job.findMany()
        expect(newJobsAmount.length).toEqual(jobsAmount.length + 1)
    })
})
