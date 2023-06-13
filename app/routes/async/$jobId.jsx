import { json } from "@remix-run/node";

export const loader = async ({params}) => {
  // handle "GET" request
  return json(params.jobId);
};

