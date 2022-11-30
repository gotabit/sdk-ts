import { Fragment } from 'react'
import { createMsgSignData } from '@gotabit/messages'
import RequestModalContainer from '../components/RequestModalContainer'
import ModalStore from '../store/ModalStore'
import { Button, Col, Divider, Modal, Row, Text } from '@nextui-org/react'
import { createOrRestoreCosmosWallet } from '../utils/CosmosWalletUtil'
import { authClient } from '../utils/WalletConnectUtil'

export default function AuthenticationRequestModal() {
  const authenticationRequest = ModalStore.state.data?.authenticationRequest

  if (!authenticationRequest) {
    return <Text>Missing authentication request</Text>
  }

  const { params, id } = authenticationRequest

  async function onApprove() {
    if (authenticationRequest) {
      const { cosmosAddresses, cosmosWallets } =
        await createOrRestoreCosmosWallet()
      console.log(params.message, '====')
      const result = await cosmosWallets[cosmosAddresses[0]].signAmino(
        cosmosAddresses[0],
        createMsgSignData(params.message, cosmosAddresses[0]),
      )

      console.log('====sign result', result, cosmosAddresses[0])
      await authClient.respond({
        id,
        signature: {
          s: result.signature.signature,
        },
      })
      ModalStore.close()
    }
  }

  // Handle reject action
  async function onReject() {
    ModalStore.close()
  }

  return (
    <Fragment>
      <RequestModalContainer title="Authentication Request">
        <Row>
          <Col>
            <Text h5>Message</Text>
            <Text style={{ whiteSpace: 'pre-wrap' }} color="$gray400">
              {params.message}
            </Text>
          </Col>
        </Row>
      </RequestModalContainer>
      <Modal.Footer>
        <Button auto flat color="error" onClick={onReject}>
          Reject
        </Button>
        <Button auto flat color="success" onClick={onApprove}>
          Approve
        </Button>
      </Modal.Footer>
    </Fragment>
  )
}
