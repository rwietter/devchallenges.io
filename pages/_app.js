import propType from 'prop-types';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: propType.any.isRequired,
  pageProps: propType.any.isRequired
};

export default MyApp;
