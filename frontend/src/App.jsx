import "./App.css";

function App() {
    return (
        <>
            <Text display={"What's Up?"} />
            <Text display={"Hello"} />
        </>
    );
}

function Text({ display }) {
    return (
        <div>
            <p>{display}</p>
        </div>
    );
}

export default App;
