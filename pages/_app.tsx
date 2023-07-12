import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps & { pageProps: { session?: any } }) {
  const { session, ...rest } = pageProps;

  return (
    <>
      <SessionProvider session={session}>
        <Component {...rest} />
      </SessionProvider>
    </>
  );
}
