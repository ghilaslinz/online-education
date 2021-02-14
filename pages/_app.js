import { Provider } from "react-redux";
import { useStore } from "../redax/store";
import "../styles/globals.css";
import Head from "next/head";

// stylings
import "react-form-builder2/dist/app.css";
import "../styles/site.css";
export default function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<Head>
				<link
					rel='stylesheet'
					href='https://use.fontawesome.com/releases/v5.13.0/css/all.css'
				/>
				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
					integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
					crossorigin='anonymous'
				/>
			</Head>
			<Component {...pageProps} />
		</Provider>
	);
}
