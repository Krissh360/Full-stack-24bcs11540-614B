import {useState} from 'react';
import './index.css';

function Counter()
{
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("white");
    return (
        
        <div style={{ backgroundColor: color, minHeight: '100vh', padding: '20px', transition: 'background-color 0.3s' }}>
            <h2 style={{ color: color === 'white' ? 'black' : 'white' }}>count: {count}</h2>

            <br></br>

            <button onClick={() => setCount(count + 1)} style={{backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginBottom: '15px'}}>
                Click me
            </button>

            <br></br>
                
            <button onClick={() => setColor(color === 'white' ? 'olive' : 'white')} style={{backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginTop: '15px'}}>
                Change color
            </button>


        </div>
    
    );
}

export default Counter


// hooks - used to change states, UI, backend to frontend working. etc
// eg - useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, useLayoutEffect, useDebugValue

// hooks used to change state - useState, useReducer