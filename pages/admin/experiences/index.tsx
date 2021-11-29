import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function experiences() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-12">
        <div className="flex justify-end">
          <div className="inline-block">
            <h1 className="text-white bg-red-500 float-right">
              ./root/Work Experience
            </h1>
            <br />
            <button className="mt-2 px-6 py-3 border border-black">
              <Link href="/admin/experiences/create">
                Create New Experience
              </Link>
            </button>
          </div>
        </div>
        <table className="table-fixed min-w-full border-collapse border border-black mt-12">
          <thead>
            <tr className="border border-black">
              <th className="p-3">#</th>
              <th className="p-3">Role</th>
              <th className="p-3">Employeer</th>
              <th className="p-3">Period</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-black">
              <td className="p-3">1</td>
              <td className="p-3">1</td>
              <td className="p-3">1</td>
              <td className="p-3">1</td>
              <td className="p-3">1</td>
            </tr>
            <tr className="border border-black">
              <td className="p-3">1</td>
              <td className="p-3">1</td>
              <td className="p-3">1</td>
              <td className="p-3">1</td>
              <td className="p-3">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
