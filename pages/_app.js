import Head from "next/head";
import { Provider } from "mobx-react";
import { useStore } from "../store/Store";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>미라클 모닝</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
