import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-loginBg min-h-screen w-screen bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="bg-white bg-opacity-80 z-10 p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md">
        <form className="flex flex-col gap-3 md:gap-5">
          <div className="flex items-center justify-center">
            <img src={"logo.png"} />
          </div>
          <p className="text-center font-bold text-xl">
            Sign in to your account
          </p>
          <div className="flex flex-col gap-1">
            <label className="font-medium">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="rollno@vvit.net"
              className="p-2 border border-black shadow-md rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="......."
              className="p-2 border border-black shadow-md rounded-md"
            />
          </div>
          <div>
            <Link
              to={"/resetPassword"}
              className="text-blue-600 hover:text-blue-700"
            >
              Forgot password ?
            </Link>
          </div>
          <div>
            <input
              type="button"
              value="Log in"
              className="bg-blue-700 p-2 rounded-md text-white font-bold w-full cursor-pointer hover:bg-blue-800"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link
              to={"/register"}
              className="text-blue-600 font-medium cursor-pointer"
            >
              Don&apos;t have a Account ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
