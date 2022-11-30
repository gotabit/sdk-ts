import PageHeader from '../components/PageHeader'
import SettingsStore from '../store/SettingsStore'
import { cosmosWallets } from '../utils/CosmosWalletUtil'
import { Card, Divider, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'

export default function SettingsPage() {
  const { cosmosAddress } = useSnapshot(
    SettingsStore.state,
  )
    console.log(cosmosAddress);

  return (
    <Fragment>
      <PageHeader title="Settings" />

      <Divider y={2} />

      <Text
        css={{
          color: '$yellow500',
          marginBottom: '$5',
          textAlign: 'left',
          padding: 0,
        }}
      >
        Warning: mnemonics and secret keys are provided for development purposes
        only and should not be used elsewhere!
      </Text>

      <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
        Cosmos Mnemonic
      </Text>
      <Card variant="bordered" borderWeight="light" css={{ minHeight: '100px' }}>
        <Text css={{ fontFamily: '$mono' }}>
          {cosmosWallets[cosmosAddress].getMnemonic()}
        </Text>
      </Card>
    </Fragment>
  )
}
