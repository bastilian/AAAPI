import { loader } from './job'
import { prisma } from '../../db.server'

describe('loader test', () => {
    const body = {
        urls: [
          {url: "http://example.org/items", params: { testParam: "testParamValue", page: 1 }},
          {url: "http://example.org/items", params: { testParam: "testParamValue", page: 2 }}
        ]
      }
    test('compare the job requests length', async () => {
        const jobsReqAmount = await prisma.jobRequest.findMany({ where: { jobId: { not: undefined}}})
        await loader({request: {
            body
          }});
        const newJobsReqAmount = await prisma.jobRequest.findMany({ where: { jobId: { not: undefined}}})
        expect(newJobsReqAmount.length).toEqual(jobsReqAmount.length + 2)
    })
})
