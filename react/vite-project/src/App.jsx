import RickYMorty from "./components/RickYMorty";

import GetPosts from "./components/GetPosts";
import { Estado } from "./components/estado/Estado";
import { Write } from "./components/miPrimerComponente/Write";

function App() {
  return (
    <>
      {/*<Write name={"Nacho"} lastName={"Torres"} />
      <div>
        <Estado />
      </div>
      <GetPosts />
 */}
      <RickYMorty />
    </>
  );
}

export default App;
