import { useState, useEffect } from 'react'

const useVisible = (): [boolean, boolean] => {
  const [transY, setTransY] = useState(false)
  const [visiblity, setVisiblity] = useState(false)

  useEffect(() => {
    setTransY(true)
    setVisiblity(true)
  }, [])

  return [transY, visiblity]
}

export default useVisible
