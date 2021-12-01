import Navbar from "../../../components/Navbar";
import Link from "next/link";
import FormExperience from "../../../components/FormExperience";
import { MUTATION_INSERT_DATA, QUERY_GET_DATA } from "../../../graphql/queries";
import { useMutation } from "@apollo/client";
import Loading from "../../../components/Loading";
import { AuthCheckLogin } from "../../../utils/Auth";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Create() {
  const [
    insertData,
    { data: data, loading: loadingInsert, error: errorInsert },
  ] = useMutation(MUTATION_INSERT_DATA);
  const [cookie] = useCookies(["user"]);

  const insert = (form: any) => {
    let periodEnd = form.isNow ? null : form.periodEnd;
    insertData({
      variables: {
        object: {
          desc: form.desc,
          employeer: form.employeer,
          period_start: form.periodStart,
          period_end: periodEnd,
          role: form.role,
        },
        refetchQueries: [
          {
            query: QUERY_GET_DATA,
          },
        ],
      },
    });
  };

  useEffect(() => {
    AuthCheckLogin(cookie);
  }, []);

  return (
    <div>
      <Navbar />
      {loadingInsert ? <Loading /> : ""}
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
          <FormExperience func={insert} />
        </div>
      </div>
    </div>
  );
}
