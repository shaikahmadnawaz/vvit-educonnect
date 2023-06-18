import { Link } from "react-router-dom";
const branches = [
  "CSE",
  "IT",
  "ECE",
  "EEE",
  "CSM",
  "AID",
  "IOT",
  "CIC",
  "MECH",
  "CIVIL",
];
const sections = ["A", "B", "C", "D"];
const years = ["I", "II", "III", "IV"];
const Register = () => {
  return (
    <div className="bg-loginBg min-h-screen w-screen bg-no-repeat bg-cover bg-center flex items-center justify-center p-4">
      <div className="bg-white z-10 p-6 w-screen rounded-lg shadow-md bg-opacity-70">
        <form className="flex flex-col gap-4">
          <div className="flex items-center justify-center">
            <img src={"logo.png"} />
          </div>
          <p className="text-center font-bold text-xl">Create your Account</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 border border-black rounded-md shadow-md md:w-4/5"
              />
            </div>
            {/* rollno */}
            <div className="flex flex-col">
              <label htmlFor="rollno" className="font-medium">
                Roll No
              </label>
              <input
                type="text"
                name="rollno"
                id="rollno"
                className="p-2 border border-black rounded-md shadow-md md:w-4/5"
              />
            </div>
            {/* email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 border border-black rounded-md shadow-md md:w-4/5"
              />
            </div>
            <div className="flex  justify-center gap-y-2 flex-col">
              <label className="font-medium" htmlFor="year">
                Year
              </label>
              <select
                className="p-3 border border-black rounded-md shadow-md md:w-4/5 bg-white"
                name="year"
                defaultValue={"Select Year"}
              >
                <option value="Select Year" key={"-1"} disabled>
                  Select Year
                </option>
                {years.map((year, index) => {
                  return (
                    <option value={year} key={index}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex  justify-center gap-y-2 flex-col">
              <label className="font-medium" htmlFor="branch">
                Branch
              </label>
              <select
                className="p-3 border border-black rounded-md shadow-md md:w-4/5  bg-white"
                name="branch"
                defaultValue={"Select Branch"}
              >
                <option value="Select Branch" key={"-1"} disabled>
                  Select Branch
                </option>
                {branches.map((branch, index) => {
                  return (
                    <option value={branch} key={index}>
                      {branch}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex  justify-center gap-y-2 flex-col">
              <label className="font-medium" htmlFor="section">
                Section
              </label>
              <select
                className="p-3 border border-black rounded-md shadow-md md:w-4/5  bg-white"
                name="section"
                defaultValue={"Select Section"}
              >
                <option value="Select Section" key={"-1"} disabled>
                  Select Section
                </option>
                {sections.map((section, index) => {
                  return (
                    <option value={section} key={index}>
                      {section}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="aicteStudentId" className="font-medium">AICTE Student ID</label>
              <input
                type="text"
                name="aicteId"
                className="p-2 border border-black rounded-md shadow-md md:w-4/5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="p-2 border border-black rounded-md shadow-md md:w-4/5"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="aicteStudentId" className="font-medium">Confirm Password</label>
              <input
                type="text"
                name="aicteId"
                className="p-2 border border-black rounded-md shadow-md md:w-4/5"
              />
            </div>
						<div></div>
						<div className="mt-2 flex flex-col gap-2">
							<input type="button" value="Register" className="bg-blue-700 p-2 rounded-md text-white font-bold w-full cursor-pointer hover:bg-blue-800 justify-self-center md:w-4/5" />
							<p className="text-center md:w-4/5 mt-2" >Already have an account? <Link to={"/login"} className="text-blue-600 font-medium cursor-pointer">Login here</Link></p>
						</div>
						<div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
