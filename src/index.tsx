import { useState } from 'react'
import reactDOM from 'react-dom'

const App = () => {
    const [input, setInput] = useState("")
    const [code, setCode] = useState("")

    const handleSubmit = () => {
        if (input.trim() !== "") {
            setCode(input)
        }
    }

    return (
        <div>
            <textarea onChange={e => setInput(e.target.value)} value={input} ></textarea>
            <div>
                <button onClick={handleSubmit}>Change to</button>
            </div>
            <pre>{code}</pre>
        </div>
    )
}

reactDOM.render(<App />, document.querySelector("#root"))

