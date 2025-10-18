import{ useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() =>{

        fetch('https://job-portal-server-six-phi.vercel.app/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })


    },[])
    return (
        <div className='px-5'>


            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6  rounded-lg'>
                {
                    jobs.map(job => <HotJobsCard job={job} key={job._id}></HotJobsCard>)
                }
            </div>
            
        </div>
    );
};

export default HotJobs;