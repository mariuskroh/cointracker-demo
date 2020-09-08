import React, { useState, useEffect } from "react";
import axios from "axios";
import Routes from "./Routes";

const CryptoStatusWidget = () => {
  const [appState, setAppState] = useState({
    loading: true,
    coins: null,
  });

  const { loading, coins } = appState;

  useEffect(() => {
    const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=1000";
    const getData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setAppState({
          loading: false,
          coins: data.coins,
        });
        setTimeout(getData, 1000);
      } catch (err) {
        console.error(err);
        setTimeout(getData, 1000);
      }
    };
    getData();
  }, [setAppState]);

  return (
    <div>
      <Routes loading={loading} coins={coins} />
    </div>
  );
};

export default CryptoStatusWidget;
