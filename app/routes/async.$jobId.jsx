import { useParams } from "@remix-run/react";

export default function JobId() {
    const { jobId } = useParams();
    return (
        <div>
            <h2>
                Dynamic job ID {jobId}
            </h2>
        </div>
    )
}