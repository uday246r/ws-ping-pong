import { useEffect, useState, useRef } from 'react';
import './App.css'


function App() {
  //@ts-ignore
  const [socket, setSocket] = useState();
  //@ts-ignore
  const inputRef = useRef();

  function sendMessage(){
    if(!socket) return;
    const message = inputRef?.current?.value;
        //@ts-ignore

    socket.send(message);
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
        //@ts-ignore

    setSocket(ws)
    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  },[]);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="message"></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
