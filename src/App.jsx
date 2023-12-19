import { useState } from 'react'
import head from './components/head'
import tasks from './components/task'

function App() {
  const [authKey, setAuthKey] = useState()  
  return (
    <>
      <head />
      <main className='vh-100 container text-center'>
        <tasks></tasks>
      </main>
    </>
  )
}

export default App