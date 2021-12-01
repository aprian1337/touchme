import { useLazyQuery } from "@apollo/client";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AlertError from "../../components/AlertError";
import Loading from "../../components/Loading";
import { QUERY_GET_USER_FOR_LOGIN } from "../../graphql/queries";
import { AuthCheckAuthenticated, AuthLogin } from "../../utils/Auth";

export default function Login() {
  const [getUser, { data, loading, error }] = useLazyQuery(
    QUERY_GET_USER_FOR_LOGIN
  );
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
    error: false,
  });
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  const handleChange = (e: any) => {
    setSignIn({
      ...signIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getUser({
      variables: {
        username: {
          _eq: signIn.username,
        },
        password: {
          _eq: signIn.password,
        },
      },
    });
  };

  useEffect(() => {
    AuthCheckAuthenticated(cookie);
    if (data?.touchme_users.length > 0) {
      AuthLogin(setCookie, signIn.username);
      Router.push("/admin/experiences");
    } else {
      setSignIn({
        username: "",
        password: "",
        error: true,
      });
    }
  }, [data]);

  return (
    <div
      style={{
        backgroundImage: `url("/assets/bglogin.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {loading ? <Loading /> : ""}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-8 lg:px-8">
        <div className="rounded-lg bg-white p-12">
          <div className={!signIn.error ? "hidden" : ""}>
            <AlertError error="Masih gagal nih :(" />
          </div>
          <div className="max-w-md w-full">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign In With <span className="text-red-500">Your Secret</span>
              </h2>
              <p>Insert your credential account</p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label className="sr-only">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="username"
                    value={signIn.username}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                </div>
                <div className="space-y-2">
                  <label className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={signIn.password}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={handleSubmit}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-white group-hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
