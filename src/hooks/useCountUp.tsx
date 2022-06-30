import { useEffect, useState } from 'react'

const useCountUp = (rate: number, start = 0): number => {
  const [count, setCount] = useState(0)
  function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  }

  useEffect(() => {
    const frameRate = 1000 / 60
    const duration = 2000
    // 2초동안
    const totalFrame = Math.round(duration / frameRate)
    // 총 프레임 갯수
    const counter = setInterval(() => {
      const progress = easeOutExpo(++start / totalFrame)
      const nowCount = Math.round(rate * progress)
      if (rate >= nowCount) {
        setCount(nowCount)
      }
      if (start === totalFrame) {
        clearInterval(counter)
        // eslint-disable-next-line no-console
        console.log(start)
      }
    }, frameRate)
  }, [rate, start])

  return count
}

export default useCountUp
