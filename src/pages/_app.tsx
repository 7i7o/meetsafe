/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Auth0Provider } from '@auth0/auth0-react';

import "~/styles/globals.css";

export const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (

    <Auth0Provider
      domain={"dev-dv4pexsy1xqw6v8y.us.auth0.com"}
      clientId="I6EqG2lfPiblq4qlZyP4dCztYys10Djx"
      authorizationParams={{
        redirect_uri: process.env.NEXTAUTH_URL
      }}
    >
      <WagmiConfig client={client}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </WagmiConfig>
    </Auth0Provider>
  );
};

export default api.withTRPC(MyApp);
