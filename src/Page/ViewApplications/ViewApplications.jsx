import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ViewApplications = () => {
    const applications = useLoaderData();



        const handleStatusUpdate = (e, id) => {
            const data = {
                status: e.target.value
            }


            axios.patch(`https://job-portal-server-six-phi.vercel.app/job-application/${id}`, data)
            .then((res) =>{
                console.log(res.data);
                if(res.data.modifiedCount > 0){
                   Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Status Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                   })
                }
            })

         
           
            
        }






    return (
         <div>
            <h2 className="text-3xl">Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select
                                     
                                        defaultValue={app.status || 'Change Status'}
                                        onChange={(e) => handleStatusUpdate(e, app._id)}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;