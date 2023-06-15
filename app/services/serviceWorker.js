import { fetchData } from "./api";
import { getById, updateJobById } from "../models/job.server";

const buildUrlParams = (params) => {

    const urlParams = Object.entities(params);
    const searchParams = new URLSearchParams('');

    urlParams.forEach(([key, value]) => {
        searchParams.append(key, value);
    });

    return searchParams;
};

export const executeJob = (jobId) => {
    const job = getById(jobId);

    const { jobRequests } = job;
    jobRequests.forEach((jobRequest) => {
        const searchParams = buildUrlParams(jobRequest.params);
        try {
            const result = fetchData(jobRequest.url, searchParams.toString, jobRequest.method, jobRequest.payload);
            updateJobById(jobRequest.id, { result, resultStatus: 'done' });
        } catch (error) {
            throw new Error(`There was an error while executing the job ${job.jobId}: ` + error);
        }
    });
}
