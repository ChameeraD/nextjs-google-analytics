import { useState } from 'react'
import * as analytics from '../analytics'

export default function Home() {
  const [query, setQuery] = useState("");
  const search = () => {
    analytics.event({
      action: "search",
      params : {
        search_term: query
      }})}

  return (
    <div>
      <div>
        <input type="text" onChange={(event) => setQuery(event.target.value)}>

        </input>
      </div>
      <div>
        <button onClick={() => search()}>Search</button>
      </div>
  </div>
  )
}