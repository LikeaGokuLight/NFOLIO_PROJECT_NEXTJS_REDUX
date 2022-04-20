import '../styles/globals.css'
import {Provider} from "react-redux";
import {store, wrapper} from "../redux/store/store";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="shortcut icon" href="/favicon.ico"/>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <title>NFOLIO || JERRY</title>
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
