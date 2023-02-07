import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import { FaGithub, FaLinkedinIn, FaMailBulk, FaStackOverflow } from "react-icons/fa"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bernack</title>
        <meta name="description" content="Personal site of Timo and Jan Christoph Bernack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.profileList}>
          <div className={styles.profile}>
            <Image
              alt="Profile picture of Jan Christoph Bernack"
              src="/profile-jcb.jpeg"
              width="150"
              height="150"
              priority
            />
            <div className={styles.description}>
              <h2 className={inter.className}>
                Jan Christoph Bernack
              </h2>
              <div>
                <p className={inter.className}>
                  Hamburg, Germany
                </p>
                <p className={inter.className}>
                  CTO @ Rocknitive
                </p>
              </div>
              <ul className={styles.social}>
                <li>
                  <a href="https://www.linkedin.com/in/jan-christoph-bernack-248798196/"><FaLinkedinIn /></a>
                </li>
                <li>
                  <a href="mailto:jc.bernack@gmail.com"><FaMailBulk /></a>
                </li>
                <li>
                  <a href="https://github.com/jcBernack/"><FaGithub /></a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/users/804614/gigo"><FaStackOverflow /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.profile}>
            <Image
              alt="Profile picture of Timo Bernack"
              src="/profile-tb.jpg"
              width="150"
              height="150"
              priority
            />
            <div className={styles.description}>
              <h2 className={inter.className}>
                Timo Bernack
              </h2>
              <div>
                <p className={inter.className}>
                  Oldenburg, Germany
                </p>
                <p className={inter.className}>
                  Sr. Full Stack Developer @ Adference
                </p>
              </div>
              <ul className={styles.social}>
                <li>
                  <a href="https://www.linkedin.com/in/jan-christoph-bernack-248798196/"><FaLinkedinIn /></a>
                </li>
                <li>
                  <a href="mailto:jc.bernack@gmail.com"><FaMailBulk /></a>
                </li>
                <li>
                  <a href="https://github.com/jcBernack/"><FaGithub /></a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/users/804614/gigo"><FaStackOverflow /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*<div className={styles.grid}>*/}
        {/*  <a*/}
        {/*    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*    className={styles.card}*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <h2 className={inter.className}>*/}
        {/*      Docs <span>-&gt;</span>*/}
        {/*    </h2>*/}
        {/*    <p className={inter.className}>*/}
        {/*      Find in-depth information about Next.js features and&nbsp;API.*/}
        {/*    </p>*/}
        {/*  </a>*/}
        {/*</div>*/}
      </main>
    </>
  )
}
