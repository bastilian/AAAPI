import { json } from "@remix-run/node";
import { create } from '../../../app/models/job.server'

export const loader = async ({params}) => {
  // handle "GET" request
  const response = await create({id: params.jobId})
  return json(response)
};

