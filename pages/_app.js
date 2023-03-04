import "../styles/gl8obal.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>header</header>
      <Component {...pageProps} />
      <footer>footer</footer>
    </>
  )
}
