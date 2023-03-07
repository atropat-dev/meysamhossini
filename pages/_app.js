import "../styles/global.css"
import { Vazirmatn } from "@next/font/google"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
})

export default function App({ Component, pageProps }) {
  return (
    <html lang="fa-ir" className={vazirmatn.className}>
      <body>
        <main>
          <Component {...pageProps} />
        </main>
      </body>
    </html>
  )
}
