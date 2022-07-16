import { useState } from 'react'

import Frontend from '../templates/Index'



function Main() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Frontend> Vasco </Frontend>
    </div>
  )
}

export default Main
