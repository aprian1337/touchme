import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function create() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-12">
        <div className="float-left">
          <Link href="/admin/experiences">
            <a className="border px-6 py-3 border-red-500 text-red-500">Back</a>
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="inline-block">
            <h1 className="text-white bg-red-500 float-right">
              ./root/<span className="font-black">Work Experience</span>
            </h1>
            <br />
            <span className="float-right font-black mt-4">CREATE FORM</span>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <div className="block mb-4">
              <input
                className="border mb-4 p-5 w-full border-black text-black"
                type="text"
                placeholder="Insert Your Role"
              />
            </div>
            <div className="block mb-4">
              <input
                className="border mb-4 p-5 w-full border-black text-black"
                type="text"
                placeholder="Insert Your Employeer"
              />
            </div>
            <label htmlFor="">Period Start</label>
            <div className="block mb-4">
              <input
                className="border mb-4 p-5 w-full border-black text-black"
                type="date"
                placeholder="Insert Your Period Start"
              />
            </div>
            <div className="block mb-4">
              <label className="inline-flex items-center">
                <input
                  className="text-indigo-500 w-8 h-8 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
                  type="checkbox"
                />
                I am currently work here
              </label>
            </div>
            <div className="block mb-4">
              <label htmlFor="">Period End</label>
              <input
                className="border mb-4 p-5 w-full border-black text-black"
                type="date"
                placeholder="Insert Your Period Start"
              />
            </div>
            <div className="block mb-4">
              <button className="float-right border border-black py-4 px-10">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
