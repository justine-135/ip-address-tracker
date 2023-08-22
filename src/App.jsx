import { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import Banner from "./Banner";
import Header from "./Header";

const App = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  const fetchGeolocation = async () => {
    await axios
      .get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=60f6c91d9c494b1eb9ad9c7b785c31e0&ip=`
      )
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setErr(true);
      });
  };

  useEffect(() => {
    fetchGeolocation();
  }, []);

  return (
    <div className="App">
      <Header setData={setData} setErr={setErr} />
      {data && <Banner data={data} />}
      {err && <p className="err-message">IP Address not found.</p>}
      <Map data={data} />
    </div>
  );
};

export default App;
