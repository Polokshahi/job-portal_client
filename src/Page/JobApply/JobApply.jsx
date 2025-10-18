import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";




const JobApply = () => {
    const { id } = useParams();
    const { user, Loading } = useContext(AuthContext);
    const navigate = useNavigate();
    if (Loading) {
        return <span className="loading loading-spinner loading-md"></span>
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    console.log(user?.email);


    const handleJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedIn, github, resume);


        const jobApplication = {
            jobId: id,
            email: user?.email,
            linkedIn,
            github,
            resume


        }


        axios.post('https://job-portal-server-six-phi.vercel.app/job-application', jobApplication)
            .then((res) => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        title: "Job Application Successful!",
                        icon: "success",
                        draggable: true
                    });

                    navigate('/myApplications');
                    form.reset();
                }
            })









    }





    // job-application





    return (
        <div className=" bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleJobApply} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn URL</span>
                            </label>
                            <input name="linkedIn" type="url" placeholder="LinkedIn url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github URL</span>
                            </label>
                            <input name="github" type="url" placeholder="Github URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input name="resume" type="url" placeholder="resume" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary outline-double">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;