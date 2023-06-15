import { fetchData } from "./api";
import { getById, updateJobById } from "../models/job.server";

const buildUrlParams = (params) => {
    const urlParams = Object.entities(params);
    let urlQuery = '';

    urlParams.forEach(([key, value]) => {
        urlQuery = `${urlQuery},${key}=${value}`;
    });

    return urlQuery;
};

export const executeJob = (jobId) => {
    const job = getById(jobId);

    const urlQuery = buildUrlParams(job.params);
    try {
        const result = fetchData(job.url, urlQuery, job.method, job.payload);
        updateJobById(job.id, { result, resultStatus: 'done' });
    } catch (error) {
        throw new Error(`There was an error while executing the job ${job.jobId}: ` + error);
    }
}
