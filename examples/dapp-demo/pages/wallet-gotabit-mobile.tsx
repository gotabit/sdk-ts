import { GotabitWallet } from '@gotabit/wallet-gotabit'

function WalletGotabitMobile() {
  const handleConnect = async () => {
    GotabitWallet.init('test', null, {
      mobileLink: 'https://station.g.io/wallet/',
    })
  }

  return <button onClick={handleConnect}>connect</button>
}

export default WalletGotabitMobile
