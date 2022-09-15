import Layout from '../components/Layout';

import '../styles/fonts.css';
import '../styles/colors.css';
import '../styles/globals.css';
import '../styles/type.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
