import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bernack</title>
        <meta name="description" content="Personal site of Timo and Jan Christoph Bernack and Sina Hosbach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.profileList}>
          <div className={styles.profile}>
            <Image
              alt="Profile picture of Jan Christoph Bernack"
              src="/profile-jcb.jpg"
              width="150"
              height="150"
              priority
            />
            <div className={styles.content}>
              <h2 className={inter.className}>
                Jan Christoph Bernack
              </h2>
              <div className={styles.description}>
                <p className={inter.className}>
                  Hamburg, Germany
                </p>
                <p className={inter.className}>
                  CTO @ <a href="https://www.rocknitive.com/">Rocknitive</a>
                </p>
              </div>
              <ul className={styles.social}>
                <li>
                  <a href="https://www.linkedin.com/in/jan-christoph-bernack-248798196/"><FaLinkedinIn /></a>
                </li>
                {/*<li>*/}
                {/*  <a href="mailto:jc.bernack@gmail.com"><FaMailBulk /></a>*/}
                {/*</li>*/}
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
            <div className={styles.content}>
              <h2 className={inter.className}>
                Timo Bernack
              </h2>
              <div className={styles.description}>
                <p className={inter.className}>
                  Oldenburg, Germany
                </p>
                <p className={inter.className}>
                  Sr. Full Stack Developer @ <a href="https://www.adference.com/">Adference</a>
                </p>
              </div>
              <ul className={styles.social}>
                <li>
                  <a href="https://www.linkedin.com/in/timo-bernack-165721253/"><FaLinkedinIn /></a>
                </li>
                {/*<li>*/}
                {/*  <a href="mailto:timo.bernack@bernack.de"><FaMailBulk /></a>*/}
                {/*</li>*/}
              </ul>
            </div>
          </div>
          <div className={styles.profile}>
            <Image
              alt="Profile picture of Sina Hosbach"
              src="/profile-sh.jpg"
              width="150"
              height="150"
              priority
            />
            <div className={styles.content}>
              <h2 className={inter.className}>
                Sina Hosbach
              </h2>
              <div className={styles.description}>
                <p className={inter.className}>
                  Oldenburg, Germany
                </p>
                <p className={inter.className}>
                  Editor @ <a href="https://www.scolix.de/">scolix-Verlag, AAP Lehrerwelt GmbH</a>
                </p>
              </div>
              <ul className={styles.social}>
                <li>
                  <a href="https://www.linkedin.com/in/sina-hosbach-541ab4133/"><FaLinkedinIn /></a>
                </li>
                {/*<li>*/}
                {/*  <a href="mailto:"><FaMailBulk /></a>*/}
                {/*</li>*/}
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
