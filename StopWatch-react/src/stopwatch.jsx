import { useState } from 'react'
import './App.css'

function StopWatch() {
  const [time, setTime] = useState('00:00:00:00')
  const [timerId, setTimerId] = useState(null)
  const [isRunning, setIsRunning] = useState(false)

  const formatTime = (value) => {
    const hours = Math.floor(value / 3600000)
    const minutes = Math.floor((value % 3600000) / 60000)
    const seconds = Math.floor((value % 60000) / 1000)
    const milliseconds = Math.floor((value % 1000) / 10)

    const pad = (num) => String(num).padStart(2, '0')

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`
  }

  const StartTimer = () => {
    if (isRunning) return

    setIsRunning(true)

    const id = setInterval(() => {
      setTime((prevTime) => {
        const parts = prevTime.split(':').map(Number)
        let [hours, minutes, seconds, milliseconds] = parts

        milliseconds += 1

        if (milliseconds >= 100) {
          milliseconds = 0
          seconds += 1
        }

        if (seconds >= 60) {
          seconds = 0
          minutes += 1
        }

        if (minutes >= 60) {
          minutes = 0
          hours += 1
        }

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`
      })
    }, 10)

    setTimerId(id)
    console.log('Timer started')
  }

  const StopTimer = () => {
    if (timerId) {
      clearInterval(timerId)
    }

    setIsRunning(false)
    console.log('Timer stopped')
  }

  const ResetTimer = () => {
    if (timerId) {
      clearInterval(timerId)
    }

    setIsRunning(false)
    setTimerId(null)
    setTime('00:00:00:00')
    console.log('Timer reset')
  }

  return (
    <>
      <h1>Stop watch</h1>
      <br></br>

      <h2>Time: {time}</h2>

      <div className="buttons">
        <button onClick={StartTimer} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', margin: '5px' }}>Start Timer</button>
        <button onClick={StopTimer} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', margin: '5px' }}>Stop Timer</button>
        <button onClick={ResetTimer} style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px 20px', margin: '5px' }}>Reset Timer</button>
      </div>
    </>
  )
}

export default StopWatch
