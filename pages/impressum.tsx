import Link from "next/link"

export default function Home() {
  return (
    <>
      <h2>Impressum</h2>
      <p>
        Jan Christoph Bernack<br />
        Felicitas-Kukuck-Straße 5c<br />
        22765 Hamburg<br />
        E-Mail: info@bernack.de
      </p>
      <Link href="/">Go back</Link>
    </>
  )
}
