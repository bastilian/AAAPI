import { json } from "@remix-run/node";
import { getById } from "../../models/job.server";

export const loader = async ({ params: { jobId }})=>  {
  //function displays different statuses based of api response
  const foundJob = await getById(jobId)
  const renderSwitch = () => {
    switch (foundJob.status) {
      case "new":
        return "new status";
      case "done":
        return "done status";
      case "pending":
        return "pending status"
        default:
        return "Unable to fetch status";
    }
  };
  let results =  json({ "statusKey": renderSwitch()})
  return results
}
