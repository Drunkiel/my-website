import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../Components/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  );
}

export default MyApp;
