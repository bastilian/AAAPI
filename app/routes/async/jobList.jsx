import { json } from "@remix-run/node";
import { getJobList } from '../../models/job.server'

export const loader = async () => {
  // handle "GET" request
  const response = await getJobList()
  return json(response)
};

