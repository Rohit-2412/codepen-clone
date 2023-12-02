import DataProvider from "./context/DataProvider";
//components
import Home from "./components/Home";

function App() {
    return (
        <DataProvider>
            <Home />
        </DataProvider>
    );
}

export default App;
