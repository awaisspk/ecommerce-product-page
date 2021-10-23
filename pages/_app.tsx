import {Layout} from '@src/component/Layout';
import {ProductContext} from '@src/Context/ProductContext';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useState} from 'react';
import {globalStyles} from 'styles/globalStyles';

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  const [product, setProduct] = useState({pricePerItem: 125, totalItems: 0});

  return (
    <ProductContext.Provider value={{product, setProduct}}>
      <Layout>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          ;
        </Head>

        <Component {...pageProps} />
      </Layout>
    </ProductContext.Provider>
  );
}
export default MyApp;
