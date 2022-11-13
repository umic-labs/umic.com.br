import { useEffect } from "react";

function App() {
  redirect()

  useEffect(() => {
    redirect()
  }, [])

  return (<>UMIC BRASIL</>);
}

export default App;


function redirect() {
  const URL = "https://linktr.ee/umicbrasil"
  window.location.replace(URL)
}