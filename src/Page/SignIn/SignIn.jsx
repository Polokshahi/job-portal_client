
import Lottie from "lottie-react";
import SignInAnimation from "../../assets/SignIn.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
  
    console.log(location);

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                // navigate(from)
                console.log(result.user);


                const user = {email: result.user.email};
                console.log(user);


                axios.post('https://job-portal-server-six-phi.vercel.app/jwt', user, {
                    withCredentials: true})
                .then((res) =>{
                    console.log(res.data);
                })

             

                







               
            }).catch(err =>{
                console.error(err.message);
            })
        
    }

    



    return (
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[40%]">
                    <Lottie animationData={SignInAnimation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='ml-8 mt-5'>
                        <h1 className="text-3xl font-bold">Sign in now!</h1>
                    </div>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign in</button>
                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;