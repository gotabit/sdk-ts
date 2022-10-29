import Layout from '../components/Layout'
import Modal from '../components/Modal'
import { useSignClient } from '../hooks/useSignClient'
import useWalletConnectEventsManager from '../hooks/useWalletConnectEventsManager'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { AppProps } from 'next/app'
import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps) {
  // Step 1 - Initialize wallets and wallet connect client
  const signClient = useSignClient()

  // Step 2 - Once initialized, set up wallet connect event manager
  useWalletConnectEventsManager(signClient)

  return (
    <NextUIProvider theme={createTheme({ type: 'dark' })}>
      <Layout signClient={signClient}>
        <Component {...pageProps} />
      </Layout>

      <Modal />
    </NextUIProvider>
  )
}
