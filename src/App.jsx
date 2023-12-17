import Main from "./layout/Main";
import ItemContextProvider from "./store/ItemContext";

function App() {
  return (
    <>
      <ItemContextProvider>
        <Main />
      </ItemContextProvider>
    </>
  );
}

export default App;
