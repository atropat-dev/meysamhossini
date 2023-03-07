import Link from "next/link"
import style from "../styles/Home.module.css"
import Image from "next/image"
import meysam from "../images/meysam.jpg"
import { useState, useEffect } from "react"

function Home() {
  const [count, setCount] = useState(66)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1)
    }, 86400000) // 1 day in milliseconds
    return () => clearInterval(intervalId)
  }, [])
  return (
    <>
      <div className={style.container}>
        <h1>صدای ماندگار</h1>
        <h2>میثم حسینی</h2>
        <div className={style.center}>
          <Image src={meysam} className={style.meysam} alt="یادگاری از میثم" />
          <h1>خیانت</h1>
        </div>
      </div>
      <div className={style.child}>
        <div className={style.content}>
          <div className={style.center}>
            <p id="time">میثم امروز {count} روزه که از پیشمون رفتی 🖤</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
