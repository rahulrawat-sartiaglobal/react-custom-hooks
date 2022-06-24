import useCopy from "./Hooks/useCopy";
import useGeolocation from "./Hooks/useGeolocation";
import useLocalStorage from "./Hooks/useLocalStorage";

const App = () => {
	const [data, setData] = useLocalStorage("data", "");
	const [isCopied, handleCopy] = useCopy();
	const [location, getLocation, error] = useGeolocation();

	return (
		<div className="App">
			<h2>React Custom Hooks</h2>
			<input
				type="text"
				value={data}
				onChange={(e) => setData(e.target.value)}
			/>
			<button type="button" onClick={() => handleCopy(data)}>
				Copy
			</button>
			{error === "" ? (
				<h3>
					My Location is <br /> {`lat => ${location?.lat}`} <br />{" "}
					{`long => ${location?.long}`}
				</h3>
			) : (
				<p style={{ color: "red" }}>{error}</p>
			)}

			<button type="button" onClick={getLocation}>
				Location
			</button>
		</div>
	);
};

export default App;
