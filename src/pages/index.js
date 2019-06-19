import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useConvert from "../components/ConvertHook"

const IndexPage = () => {
  const [convertAmount, setConvertAmount] = useState()
  const [convertRate, setConvertRate] = useState(0.028)

  const converted = useConvert(convertAmount, convertRate)

  const convert = event => {
    setConvertAmount(event.target.value)
  }
  return (
    <Layout>
      <SEO title="PHP to AUD" />
      <div
        style={{
          backgroundColor: `#bb86fc`,
          marginTop: `5rem`,
          padding: `2rem`,
          borderRadius: `0 65px 0 65px`,
        }}
      >
        <h1
          style={{
            color: `white`,
          }}
        >
          Peso
        </h1>
        <input
          value={convertAmount}
          type="number"
          className="Money-Input"
          onChange={convert}
        />
      </div>
      <div
        style={{
          marginTop: `6rem`,
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <h2
          style={{
            color: `#ff7597`,
            fontSize: `66px`,
          }}
        >
          {new Intl.NumberFormat("au-AU", {
            style: "currency",
            currency: "AUD",
          }).format(converted)}
        </h2>
        <p
          style={{
            color: `whitesmoke`,
            textAlign: `center`,
          }}
        >
          Converting at{" "}
          <a
            style={{
              color: `whitesmoke`,
            }}
            href="#"
          >
            {convertRate}
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
