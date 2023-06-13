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
        loader({request : {
            body
        }});
        const requestsAmount = await prisma.jobRequest.findMany()
        console.log(requestsAmount)
        /* expect(await prisma.jobRequest.findMany()).toEqual() */
    })
})