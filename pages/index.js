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
      </main>

      <Footer />
    </div>
  )
}
