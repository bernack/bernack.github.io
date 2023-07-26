import Link from "next/link"

export default function Home() {
  return (
    <>
      <h2>Impressum</h2>
      <p>
        Jan Christoph Bernack<br />
        Charlotte-Mügge-Weg 25<br />
        22045 Hamburg<br />
        E-Mail: info@bernack.de
      </p>
      <Link href="/">Go back</Link>
    </>
  )
}
