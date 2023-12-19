import Router from 'next/router'
import NProgress from 'nprogress'
import {RecoilRoot} from 'recoil'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/nprogress.css'
import {ToastContainer} from 'react-toastify';
import {ThemeProvider} from "next-themes";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = 'G-JY62XD8WSB';
NProgress.configure({showSpinner: false})
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

ReactGA.initialize(GA_MEASUREMENT_ID);

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider attribute={"class"}>
            <RecoilRoot>
                <Layout>
                    <ToastContainer/>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        </ThemeProvider>
    )
}

export default MyApp
