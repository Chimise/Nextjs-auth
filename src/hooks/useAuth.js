import { useContext } from "react";
import AuthContext from "@/store/auth";

const useAuth = () => {
    const ctx = useContext(AuthContext);
    if(!ctx) {
        throw new Error('Ensure the AuthProvider is wrapped');
    }
    return ctx;
}

export default useAuth;