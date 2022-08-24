import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/shared/Header";
import useAuth from "../hooks/useAuth";
const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      {localStorage.getItem("token") ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen">
            <main className="flex-1 p-10">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        setTimeout(() => {
          navigate("/Login");
        }, 2000)
      )}
    </>
  );
};

export default Main;
