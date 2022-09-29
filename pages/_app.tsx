import type { AppProps } from 'next/app';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
