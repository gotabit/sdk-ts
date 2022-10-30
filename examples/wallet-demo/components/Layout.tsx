import SignClient from '@walletconnect/sign-client'
import Navigation from '../components/Navigation'
import RouteTransition from '../components/RouteTransition'
import { Card, Container, Loading } from '@nextui-org/react'
import { Fragment, ReactNode } from 'react'

/**
 * Types
 */
interface Props {
  signClient?: SignClient
  children: ReactNode | ReactNode[]
}

/**
 * Container
 */
export default function Layout({ children, signClient }: Props) {
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      css={{
        width: '100vw',
        height: '100vh',
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Card
        variant="bordered"
        borderWeight="light"
        css={{
          height: '100%',
          width: '100%',
          justifyContent: signClient ? 'normal' : 'center',
          alignItems: signClient ? 'normal' : 'center',
          borderRadius: 0,
          paddingBottom: 5,
          '@xs': {
            borderRadius: '$lg',
            height: '95vh',
            maxWidth: '450px',
          },
        }}
      >
        {signClient ? (
          <Fragment>
            <RouteTransition>
              <Card.Body
                css={{
                  display: 'block',
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingBottom: '40px',
                  '@xs': {
                    padding: '20px',
                    paddingBottom: '40px',
                  },
                }}
              >
                {children}
              </Card.Body>
            </RouteTransition>

            <Card.Footer
              css={{
                height: '85px',
                minHeight: '85px',
                position: 'sticky',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                boxShadow: '0 -30px 20px #111111',
                backgroundColor: '#111111',
                zIndex: 200,
                bottom: 0,
                left: 0,
              }}
            >
              <Navigation />
            </Card.Footer>
          </Fragment>
        ) : (
          <Loading />
        )}
      </Card>
    </Container>
  )
}
