import Image from "next/image"
import styles from "@/styles/Home.module.css"
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className={styles.profileList}>
        <h1 className={styles.header}>Moin!</h1>
        <div className={styles.profile}>
          <Image
            alt="Profile picture of Jan Christoph Bernack"
            src="/profile-jcb.jpg"
            width="150"
            height="150"
            priority
          />
          <div className={styles.content}>
            <h2>Jan Christoph Bernack</h2>
            <p>
              Hamburg, Germany<br />
              CTO @ <a href="https://www.rocknitive.com/">Rocknitive</a>
            </p>
            <ul className={styles.social}>
              <li><a href="https://www.linkedin.com/in/jan-christoph-bernack-248798196/"><FaLinkedinIn /></a></li>
              <li><a href="https://github.com/jcBernack/"><FaGithub /></a></li>
              <li><a href="https://stackoverflow.com/users/804614/gigo"><FaStackOverflow /></a></li>
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
            <h2>Timo Bernack</h2>
            <p>
              Oldenburg, Germany<br />
              Sr. Full Stack Developer @ <a href="https://www.adference.com/">Adference</a>
            </p>
            <ul className={styles.social}>
              <li><a href="https://www.linkedin.com/in/timo-bernack-165721253/"><FaLinkedinIn /></a></li>
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
            <h2>Sina Hosbach</h2>
            <p>
              Oldenburg, Germany<br />
              Editor @ <a href="https://www.scolix.de/">scolix-Verlag, AAP Lehrerwelt</a>
            </p>
            <ul className={styles.social}>
              <li><a href="https://www.linkedin.com/in/sina-hosbach-541ab4133/"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
        <Link href="/impressum" className={styles.impressum}>Impressum</Link>
      </div>
    </>
  )
}
