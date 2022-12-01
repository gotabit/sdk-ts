import { COSMOS_MAINNET_CHAINS, TCosmosChain } from '../data/COSMOSData'
import { Col, Divider, Row, Text } from '@nextui-org/react'
import { Fragment } from 'react'

/**
 * Types
 */
interface IProps {
  chains: string[]
  protocol: string
}

/**
 * Component
 */
export default function RequesDetailsCard({ chains, protocol }: IProps) {
  return (
    <Fragment>
      <Row>
        <Col>
          <Text h5>Blockchain(s)</Text>
          <Text color="$gray400">
            {chains
              .map(
                (chain) =>
                  COSMOS_MAINNET_CHAINS[chain as TCosmosChain]?.name ?? chain,
              )
              .join(', ')}
          </Text>
        </Col>
      </Row>

      <Divider y={2} />

      <Row>
        <Col>
          <Text h5>Relay Protocol</Text>
          <Text color="$gray400">{protocol}</Text>
        </Col>
      </Row>
    </Fragment>
  )
}
