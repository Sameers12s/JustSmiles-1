import { Link } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import { IconUser, IconLock, IconEye } from "@tabler/icons-react";
const Login = () => {
  document.title = "JustSmile | Login";

  return (
    <AuthLayout>
      <div className=" my-8 text-4xl font-bold text-center text-white us">
        L O G I N
      </div>
      <form className="flex flex-col h-full space-y-2 text-neutrals-600">
        <div className="join items-center justify-center pl-2 bg-neutrals-900">
          <div className="join-item ">
            <IconUser />
          </div>
          <input
            type="email"
            id="email"
            placeholder="Username"
            className="input w-full  rounded-lg text-bold pl-2 focus:outline-none"
            required
          />
        </div>
        <div className="join items-center justify-center pl-2 bg-neutrals-900 ">
          <div className="join-item">
            <IconLock />
          </div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input w-full rounded-lg text-bold pl-2 focus:outline-none"
            required
          />
          <div className="join-item pr-2">
            <IconEye />
          </div>
        </div>

        <div className="flex w-full justify-between items-center pt-9">
          <a href="#" className="text-white">
            <u>Forget Password?</u>
          </a>

          <div className="flex justify-end">
            <Link to="/signup">
              <button className="btn bg-neutrals-700 w-28 text-white mx-1 hover:bg-neutrals-700">
                SIGN UP
              </button>
            </Link>
            <button
              type="submit"
              value="Submit"
              className="btn bg-primary text-white mx-1 w-28 border-spacing-1 hover:bg-blue-500"
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
