import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";

const Auth = ({ children }) => {
  const { init, data, error } = useAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (!data) {
      init();
    }
  }, [data, init]);

  useEffect(() => {
    if (error) {
      push("/login");
    }
  }, [error, push]);

  if (data) {
    return children;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>Loading ...</div>
    </div>
  );
};

export default Auth;
