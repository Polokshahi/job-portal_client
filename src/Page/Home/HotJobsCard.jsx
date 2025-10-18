import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const { company_logo, company, title, description, location, requirements } = job;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img className="w-12 h-12 object-contain rounded-full border p-1" src={company_logo} alt={company} />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
          <p className="flex items-center text-sm text-gray-500 gap-1">
            <FaLocationDot className="text-blue-500"/> {location}
          </p>
        </div>
      </div>

      {/* Job Info */}
      <h2 className="text-md font-bold mb-1 flex items-center justify-between text-gray-900">
        {title}
        <span className="text-xs bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-2 py-0.5 rounded-full font-medium">
          NEW
        </span>
      </h2>
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>

      {/* Requirements */}
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements?.map((skill, idx) => (
          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200">
            {skill}
          </span>
        ))}
      </div>

      {/* Apply Button */}
      <div className="text-right">
        <Link to={`/jobs/${job._id}`}>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm px-4 py-1.5 rounded-lg hover:scale-105 transform transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotJobsCard;
