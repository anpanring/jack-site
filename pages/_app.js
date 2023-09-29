import '../styles/global.scss';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}