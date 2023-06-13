import { create } from '../../models/job_request.server'
import { prisma } from '../../db.server'

export const loader = async ({request: { body } }) => {
  console.log(body, 'request')
  const data = body
  const newJob = await prisma.job.create()
  for (const newJobRequest of new data) {
    await create({data: {
        jobId: newJob.id,
        url: newJobRequest.url,
        params: newJobRequest.params
      }})
  }
  return prisma.job.findFirst({ where: { id: newJob.id }, include: { jobRequests: true } })
};

export const action = loader;
