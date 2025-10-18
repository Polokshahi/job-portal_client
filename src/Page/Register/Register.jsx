import Lottie from "lottie-react";
import registerAnimationsData from "../../assets/Register.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
     const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // ✅ Correct RegExp object
        const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        const isValid = validatePassword.test(password);

        if (!isValid) {
            alert('Password must be 8–32 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            })
            .catch(err => {
                console.error(err.message);
            });
    };

   const handleGoogleSignIn = () =>{

        googleSignIn()
        .then(result => {
            navigate('/');
            console.log(result.user);
        }).catch(err => {
            console.error(err.message);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[60%]">
                    <Lottie animationData={registerAnimationsData} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='ml-8 mt-5'>
                        <h1 className="text-3xl font-bold">Register now!</h1>
                    </div>
                    <form onSubmit={handleRegister} className="card-body">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <h2 className="text-center">Or</h2>
                    <div className="flex justify-center items-center mb-8">
                          <button onClick={handleGoogleSignIn} className="btn w-[320px] bg-red-600 text-black mt-3">Sign in Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
