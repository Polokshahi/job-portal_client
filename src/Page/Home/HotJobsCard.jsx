import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HotJobsCard = ({ job }) => {
    const { company_logo, company, title, description, location, requirements } = job;
    return (
        <div className="card  bg-base-100 shadow-xl border-2 border-blue-400">

            <div className="flex items-center gap-2">
                <figure>
                    <img className="w-16" src={company_logo} alt="img" />

                </figure>

                <div>
                    <h3 className="text-2xl">{company}</h3>
                    <p className="flex items-center gap-1"><FaLocationDot />{location}
                        
                    </p>

                </div>
            </div>


            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {
                    requirements?.map((skill, idx) => <p key={idx} className="border rounded text-center px-2">{skill}</p>)

                }
                </div>
                <div className="mt-2 flex justify-end">
                    <Link to={`/jobs/${job._id}`}>
                    <button className="btn bg-blue-500 text-white">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;