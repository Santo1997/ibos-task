import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {IoEyeOff, IoEyeSharp} from "react-icons/io5";
import {Link, useNavigate} from "react-router-dom";
import Title from "../utilities/Title";
import {AuthContext} from "../../provider/AuthProvider";
import {GoogleAuthProvider} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const {createUser, handleGoogleSignIn} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {register, reset, handleSubmit} = useForm();
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const from = "/";

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    createUser(data.email, data.pass)
      .then((userCredential) => {
        if (userCredential.user) {
          reset();
          navigate(from, {replace: true});
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };

  const googleHandle = () => {
    handleGoogleSignIn(googleProvider).then((result) => {
      GoogleAuthProvider.credentialFromResult(result);
      navigate(from, {replace: true});
    });
  };

  return (
    <>
      <Title title="Signup" />
      <div className="grid grid-cols-2">
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col">
              <div className=" w-[550px] py-20 bg-[#F5F5F5] p-5">
                <div className="grid items-center justify-items-center gap-2">
                  <h1 className="text-xl font-bold">Welcome To</h1>
                  <img src="./logo_4.png" alt="" />
                  <p className="pb-6 text-[#707070]">Signup for purchase your desire products</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="form-control bg-white border-2 p-2 rounded-lg leading-3 mb-5">
                      <label className="label text-[#707070]">
                        <span>First name (optional)</span>
                      </label>
                      <input type="text" placeholder="Jordan" className="text-xl text-black outline-none px-1 bg-white input-placeholder" {...register("fname")} />
                    </div>

                    <div className="form-control bg-white border-2 p-2 rounded-lg leading-3 mb-5">
                      <label className="label text-[#707070]">
                        <span>Last name (optional)</span>
                      </label>
                      <input type="text" placeholder="Ken" className="text-xl text-black outline-none px-1 bg-white input-placeholder" {...register("lname")} />
                    </div>
                  </div>

                  <div className="form-control bg-white border-2 p-2 rounded-lg leading-3 mb-5">
                    <label className="label text-[#707070]">
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jordan@email.com"
                      className="text-xl text-black outline-none px-1 bg-white input-placeholder"
                      {...register("email")}
                      required
                    />
                  </div>

                  <div className="form-control bg-white border-2 p-2 rounded-lg leading-3">
                    <label className="label">
                      <span className="label-text text-[#707070]">Password</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        className="text-xl text-black outline-none px-1 bg-white input-placeholder w-full pr-10"
                        {...register("pass")}
                        required
                      />
                      <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-600" onClick={togglePasswordVisibility}>
                        {showPassword ? <IoEyeSharp className="text-2xl" /> : <IoEyeOff className="text-2xl" />}
                      </button>
                    </div>
                  </div>

                  {err && (
                    <>
                      <p className="text-sm text-red-600 mt-5">{err}</p>
                    </>
                  )}

                  <div className="flex items-start my-5 ">
                    <div className="flex items-center h-5">
                      <input id="terms" type="checkbox" value="" className="w-4 h-4 border-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                    </div>
                    <label htmlFor="terms" className="ms-2 font-semibold text-black">
                      I agree with the{"  "}
                      <Link to="#" className="underline">
                        Terms & Policy
                      </Link>
                    </label>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn bg-black text-white text-lg">Sign In</button>
                  </div>
                </form>
                <div className="divider">OR</div>
                <div className="flex justify-center gap-5">
                  <button onClick={googleHandle} className="btn btn-lg btn-outline text-lg">
                    <img src="./icons8-google.svg" className="w-9" />
                    <span>Sign in with Google</span>
                  </button>
                  <button className="btn btn-lg btn-outline text-lg">
                    <img src="./icons8-apple.svg" className="w-9" />
                    <span>Sign in with Apple</span>
                  </button>
                </div>

                <p className="text-center text-lg font-semibold mt-5">
                  Have an account?{" "}
                  <Link to="/login" className="text-[#0F3DDE]">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(./chris-lee-unsplash.jpg)",
            }}>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md grid justify-items-center">
                <img src="./logo_3.png" />
                <p className="mb-5">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
