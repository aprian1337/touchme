import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Container from "../../../components/Container";
import { useQuery } from "@apollo/client";
import { QUERY_GET_DATA } from "../../../graphql/queries";
import Table from "../../../components/Table";
import Loading from "../../../components/Loading";
import { useEffect } from "react";

export default function AdminExperiences() {
  const { loading, error, data, refetch } = useQuery(QUERY_GET_DATA, {
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
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
        <div className="mt-10">
          {loading ? <Loading /> : <Table data={data} />}
        </div>
      </Container>
    </div>
  );
}
