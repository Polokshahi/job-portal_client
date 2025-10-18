import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/UseAuth';
import axios from 'axios';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const MyApplication = () => {
    const { user } = useAuth();
    const useAxios = useAxiosSecure();
    const [jobs, setJobs] = useState([]);
[]
    useEffect(() => {
        if (user?.email) {
            useAxios
                .get(`/job-application?email=${user.email}`,)
                .then((res) => {
                    setJobs(res.data);
                })
                .catch((err) => console.error(err));
        }
    }, [user?.email]);

    return (
        <div>
            <h2 className="text-3xl mb-4">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Job Info</th>
                            <th>Company</th>
                            <th>Salary</th>
                            <th>Job Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo || "https://via.placeholder.com/50"}
                                                    alt={job.companyName || "Company Logo"}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.jobTitle}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{job.companyName}</td>
                                <td>{job.salary}</td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">X</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;
