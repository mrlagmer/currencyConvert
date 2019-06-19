import { useState, useEffect } from "react"

const useConvert = (convertAmount, convertRate) => {
  const [convertedRate, setConvertedRate] = useState(0.0)

  useEffect(() => {
    setConvertedRate(convertAmount * convertRate)
  }, [convertAmount, convertRate])

  return convertedRate
}

export default useConvert
