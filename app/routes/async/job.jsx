import { json } from "@remix-run/node";
import { create } from '../../models/job.server'

export const loader = async ({request}) => {
  const response = await create(request)
  return json(response)
};

export const action = loader;
