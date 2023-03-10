import "@/styles/globals.css";
import Auth from "@/components/Auth";
import { AuthContextProvider } from "@/store/auth";
import AuthLayout from "@/components/AuthLayout";

export default function App({ Component, pageProps }) {
  const isAuth = Component.isAuth;
  return (
    <AuthContextProvider>
      {isAuth && (
        <Auth>
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        </Auth>
      )}
      {!isAuth && <Component {...pageProps} />}
    </AuthContextProvider>
  );
}
