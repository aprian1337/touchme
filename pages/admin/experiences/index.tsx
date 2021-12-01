import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Container from "../../../components/Container";
import { useMutation, useQuery } from "@apollo/client";
import { MUTATION_DELETE_DATA, QUERY_GET_DATA } from "../../../graphql/queries";
import Table from "../../../components/Table";
import Loading from "../../../components/Loading";
import { useEffect } from "react";
import { AuthCheckLogin, AuthLogout } from "../../../utils/Auth";
import { useCookies } from "react-cookie";

export default function AdminExperiences() {
  const { loading, error, data, refetch } = useQuery(QUERY_GET_DATA, {
    notifyOnNetworkStatusChange: true,
  });
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  const [
    deleteFunc,
    { data: deleteData, loading: loadingDelete, error: errorDelete },
  ] = useMutation(MUTATION_DELETE_DATA);
  const handleDeleteData = (id: any) => {
    deleteFunc({
      variables: {
        id: id,
      },
      refetchQueries: [
        {
          query: QUERY_GET_DATA,
        },
      ],
    });
  };

  const handleLogout = () => {
    AuthLogout(removeCookie);
  };

  useEffect(() => {
    AuthCheckLogin(cookie);
    refetch();
  }, []);

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
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
          {loading || loadingDelete ? (
            <Loading />
          ) : (
            <Table data={data} handleDelete={handleDeleteData} />
          )}
        </div>
      </Container>
    </div>
  );
}
