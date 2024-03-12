import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Orbit OS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Orbit OS:" />
        <p className="description">
          we test the bounderys of software, hardware and security. we're also open source!
        </p>
    <iframe src="https://discordapp.com/widget?id=1216948283784691792&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </main>

      <Footer />
    </div>
  )
}
