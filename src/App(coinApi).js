import {useState, useEffect} from "react"

function App() {
    const [loading, setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    const [money,setMoney] = useState(0);
    useEffect(() => {
        fetch("http://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    },[]);

    const onChange = (event) => setMoney(event.target.value)
    return (
        <div>
            <h1>The Coins! ({loading ? "" : `${coins.length}`})</h1>
            <input onChange={onChange} value={money}></input>
            {loading ? (<strong>Loading...</strong>) : (
            <select>
                {coins.map((item) =>
                    <option>
                        {item.name} ({item.symbol}) : {money/item.quotes.USD.price}
                    </option>
                )}
            </select>)}
            
        </div>
    );
}

export default App;
