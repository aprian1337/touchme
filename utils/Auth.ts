import Router from "next/router";

export const AuthCheckLogin = (cookie: any) => {
    if(cookie.user == null || cookie.user == "") {
        Router.push("/auth/login")
    }
}

export const AuthCheckAuthenticated = (cookie: any) => {
    if(cookie.user != null && cookie.user != "") {
        Router.push("/admin/experiences")
    }
}

export const AuthLogout = (removeCookie: any) => {
    removeCookie("user", {
        path: "/",
      });
    Router.push("/auth/login")
}

export const AuthLogin = (setCookie: any, username: string) => {
    setCookie("user", username, {
        path: "/",
        maxAge: 7200,
      });
}