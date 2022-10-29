import PageHeader from '../components/PageHeader'
import SettingsStore from '../store/SettingsStore'
import { cosmosWallets } from '../utils/CosmosWalletUtil'
import { Card, Divider, Row, Switch, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import packageJSON from '../package.json'

export default function SettingsPage() {
  const { testNets, eip155Address, cosmosAddress, solanaAddress } = useSnapshot(
    SettingsStore.state,
  )

  return (
    <Fragment>
      <PageHeader title="Settings" />

      <Text h4 css={{ marginBottom: '$5' }}>
        Packages
      </Text>
      <Row justify="space-between" align="center">
        <Text color="$gray400">@walletconnect/sign-client</Text>
        <Text color="$gray400">
          {packageJSON.dependencies['@walletconnect/sign-client']}
        </Text>
      </Row>
      <Row justify="space-between" align="center">
        <Text color="$gray400">@walletconnect/utils</Text>
        <Text color="$gray400">
          {packageJSON.dependencies['@walletconnect/utils']}
        </Text>
      </Row>
      <Row justify="space-between" align="center">
        <Text color="$gray400">@walletconnect/types</Text>
        <Text color="$gray400">
          {packageJSON.devDependencies['@walletconnect/types']}
        </Text>
      </Row>

      <Divider y={2} />

      <Text h4 css={{ marginBottom: '$5' }}>
        Testnets
      </Text>
      <Row justify="space-between" align="center">
        <Switch checked={testNets} onChange={SettingsStore.toggleTestNets} />
        <Text>{testNets ? 'Enabled' : 'Disabled'}</Text>
      </Row>

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
      <Card bordered borderWeight="light" css={{ minHeight: '100px' }}>
        <Text css={{ fontFamily: '$mono' }}>
          {cosmosWallets[cosmosAddress].getMnemonic()}
        </Text>
      </Card>
    </Fragment>
  )
}
