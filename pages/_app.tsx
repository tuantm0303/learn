import "../styles/globals.scss";
import { SWRConfig } from "swr";
import instance from "../api/instance";
import Layout from "../components/Layout";
import { AppPropsWithLayout } from "../models/layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      <SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
        <Component {...pageProps} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
      </SWRConfig>
    </LayoutWrapper>
  );
}
export default MyApp;
