import { Estado } from "./components/estado/Estado";
import { Write } from "./components/miPrimerComponente/Write";

function App() {
  return (
    <>
      <Write name={"Nacho"} lastName={"Torres"} />
      <div>
        <Estado />
      </div>
    </>
  );
}

export default App;
