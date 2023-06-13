
import * as job from '../../models/job.server'
import * as jobReq from '../../models/job_request.server'

export const loader = async ({request: { body } }) => {
  const newJob = await job.create();
  for (const newJobRequest of body.urls) {
    await jobReq.create({data: {
        jobId: newJob.id,
        url: newJobRequest.url,
      }})
  }
  return job.findFirst({ where: { id: newJob.id }, include: { jobRequests: true } })
};

export const action = loader;
