import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Board from '../containers/Board'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TIC TAC GEL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        TIC TAC TOE
        <Board />
      </main>


    </div>
  )
}

export default Home
