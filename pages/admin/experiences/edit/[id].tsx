import React, { useEffect } from "react";
import FormExperience from "../../../../components/FormExperience";
import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import {
  MUTATION_UPDATE_DATA,
  QUERY_GET_DATA_BY_UUID,
} from "../../../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import Loading from "../../../../components/Loading";
import { AuthCheckLogin } from "../../../../utils/Auth";
import { useCookies } from "react-cookie";

export default function Edit(props: any) {
  const router = useRouter();
  const { id } = router.query;
  const [cookie] = useCookies(["user"]);

  const { loading, error, data, refetch } = useQuery(QUERY_GET_DATA_BY_UUID, {
    notifyOnNetworkStatusChange: true,
    variables: {
      id: id,
    },
  });

  const [
    updateData,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useMutation(MUTATION_UPDATE_DATA);

  const handleUpdate = (form: any) => {
    let periodEnd = form.isNow ? null : form.periodEnd;
    updateData({
      variables: {
        id: id,
        desc: form.desc,
        employeer: form.employeer,
        period_end: periodEnd,
        period_start: form.periodStart,
        role: form.role,
      },
    });
    refetch();
  };

  useEffect(() => {
    AuthCheckLogin(cookie);
  }, []);

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
            <span className="float-right font-black mt-4">EDIT FORM</span>
          </div>
        </div>
        <div className="mt-5">
          {errorUpdate ? console.log(errorUpdate.message) : ""}
          {loading || loadingUpdate ? (
            <Loading />
          ) : (
            <FormExperience
              isEdit={true}
              role={data?.touchme_experiences_by_pk.role}
              employeer={data?.touchme_experiences_by_pk.employeer}
              periodStart={data?.touchme_experiences_by_pk.period_start}
              periodEnd={data?.touchme_experiences_by_pk.period_end}
              func={handleUpdate}
              desc={data?.touchme_experiences_by_pk.desc}
            />
          )}
        </div>
      </div>
    </div>
  );
}
