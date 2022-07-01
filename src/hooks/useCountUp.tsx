import { useEffect, useState } from 'react'

import { easeOutExpo } from 'common/utils/animation'

const useCountUp = (rate: number, start = 0): number => {
  const [count, setCount] = useState(0)
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
      }
    }, frameRate)
  }, [rate, start])

  return count
}

export default useCountUp
