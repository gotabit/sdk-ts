import { Button, Input, Loading, Text, Container } from '@nextui-org/react'
import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import QrReader from '../components/QrReader'

import { signClient } from '../utils/WalletConnectUtil'

function WalletConnectPage() {
  const [uri, setUri] = useState('')
  const [loading, setLoading] = useState(false)

  async function onConnect(uri: string) {
    if (!signClient) return
    try {
      setLoading(true)

      const pair = await signClient.pair({ uri })
    } catch (err: unknown) {
      alert(err)
    } finally {
      setUri('')
      setLoading(false)
    }
  }

  return (
    <Container>
      <PageHeader title="WalletConnect" />

      <QrReader onConnect={onConnect} />

      <Text
        size={13}
        css={{ textAlign: 'center', marginTop: '$10', marginBottom: '$10' }}
      >
        or use walletconnect uri
      </Text>

      <Input
        css={{ width: '100%' }}
        bordered
        aria-label="wc url connect input"
        placeholder="e.g. wc:a281567bb3e4..."
        onChange={(e) => setUri(e.target.value)}
        value={uri}
        contentRight={
          <Button
            size="xs"
            disabled={!uri}
            css={{ marginLeft: -60 }}
            onClick={() => onConnect(uri)}
            color="gradient"
          >
            {loading ? <Loading size="sm" /> : 'Connect'}
          </Button>
        }
      />
    </Container>
  )
}

export default WalletConnectPage
