import { useLoaderData, Link } from 'react-router-dom';

const JobDetails = () => {
  const singleJob = useLoaderData();

  const {
    _id,
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    status,
    title,
  } = singleJob;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="flex items-center gap-4 mb-6">
        {company_logo && (
          <img src={company_logo} alt={`${company} logo`} className="w-20 h-20 object-contain" />
        )}
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <div className="mb-4">
            <p><strong>Job Type:</strong> {jobType}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Location:</strong> {location}</p>
            <p>
              <strong>Salary Range:</strong> {salaryRange?.currency} {salaryRange?.min} - {salaryRange?.max}
            </p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Application Deadline:</strong> {applicationDeadline}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {responsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-6 text-gray-700">
              {requirements?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">HR Contact</h2>
            <p><strong>Name:</strong> {hr_name}</p>
            <p><strong>Email:</strong> {hr_email}</p>
          </div>

          <div className="text-center">
            <Link to={`/jobApply/${_id}`}>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
