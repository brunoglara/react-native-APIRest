import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';



function addZero(number) {
  return number <= 9 ? '0' + number : number
}

//Date formatting to get API
function url(qtdDias) {
  const date = new Date();
  const listLastDays = qtdDias;
  const end_date =
    `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays);
  const start_date =
    `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  //URL  GET API
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;;
}

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;
  let queryCoinsList = []
  if (selectListQuotations) {
    queryCoinsList = Object.keys(selectListQuotations).map((key) => {
      return {
        date: key.split("-").reverse().join("/"),
        value: selectListQuotations[key],
      };
    });
  }
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  let queryCoinsListG = []

  if (selectListQuotationsG) {
    queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
      return selectListQuotationsG[key];
    });
  }
  let dataG = queryCoinsListG;
  return dataG;
}

export default function App() {

  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphicList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)

  function updateDay(number) {
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() => {
    if (updateData) {
      getListCoins(url(days)).then((data) => {
        setCoinsList(data);
      });
      getPriceCoinsGraphic(url(days)).then((dataG) => {
        setCoinsGraphicList(dataG);
      });
      setUpdateData(false);
    }
  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#f50d41'
        barStyle='light-content'
      />

      <CurrentPrice lastValueCoin={coinsList} />

      <HistoryGraphic infoDataGraphic={coinsGraphicList} />

      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },

});
