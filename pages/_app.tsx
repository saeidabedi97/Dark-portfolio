import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/section.module.scss";
import NavBar from "../components/AtomicComponents/Navbar/NavBar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />;
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
