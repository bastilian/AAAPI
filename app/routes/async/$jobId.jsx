import { json } from "@remix-run/node";
import { create } from '../../../app/models/job.server'

export const loader = async () => {
  // handle "GET" request
  const response = await create()
  return json(response)
};

