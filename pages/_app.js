import "../styles/global.css"
import { Vazirmatn } from "@next/font/google"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
})

export default function App({ Component, pageProps }) {
  return (
    <html className={vazirmatn.className}>
      <header>header</header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>فوتر</footer>
    </html>
  )
}
