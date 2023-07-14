import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './ExamplePage.css'
import { useNavigate } from 'react-router-dom'
import ExampleComponent from '../../components/ExampleComponent';

export function ExamplePage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex flex-row justify-center'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-red-200 underline uppercase'>Ollie Bot</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <button onClick={() => navigate("/")}> send me back :&#40; </button>
      <ExampleComponent/>

      <p className="read-the-docs">
        Click on the <code>Vite</code> and <code>React</code> logos to learn more
      </p>
    </>
  )
}
