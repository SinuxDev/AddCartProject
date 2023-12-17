import Main from "./layout/Main";
import ItemContextProvider from "./store/ItemContext";

function App() {
  return (
    <section>
      <ItemContextProvider>
        <Main />
      </ItemContextProvider>
    </section>
  );
}

export default App;
