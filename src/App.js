import "./styles.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function App() {
  const [listdata, setListdata] = useState([]);
  const [loading, setLoading] = useState(false);
  // api call to fetch emoji data
  const apiCall = () => {
    setLoading(true);
    axios
      .get("https://emojihub.yurace.pro/api/all")
      .then((res) => {
        if (res?.data?.length) {
          console.log("data------", res?.data);
          setListdata([...res.data]);
        } else {
          alert("API ERROR");
        }
      })
      .catch((err) => {
        console.log("api error data------", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div className="App">
      <div className="row">
        {listdata.map((item) => {
          return (
            <div className="col-3">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p>{item.htmlCode[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
