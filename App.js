import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Provider as PaperProvider, Text, TextInput, Button, Title } from "react-native-paper";
import ModalDropdown from "react-native-modal-dropdown";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [currencies, setCurrencies] = useState([]);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [fromCurrency]);

  const handleAmountChange = (input) => {
    if (/^\d*\.?\d*$/.test(input)) {
      setAmount(input);
      setConvertedAmount(null); 
    }
  };

  const convertCurrency = () => {
    if (!amount) {
      setConvertedAmount(null);
      return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates[toCurrency];
        if (rate) {
          const result = parseFloat(amount) * rate;
          setConvertedAmount(result.toFixed(2));
        } else {
          setConvertedAmount("Invalid Currency");
        }
      })
      .catch((err) => console.error("Conversion error:", err));
  };

  return (
    <View style={{ padding: 20, width: "100%" }}>
      <Title style={{ textAlign: "center", marginBottom: 20, color: "black" }}>CURRENCY CONVERTER</Title>

      <TextInput
        label="Amount"
        value={amount}
        onChangeText={handleAmountChange}
        mode="flat"
        style={{ marginBottom: 16 }}
      />

      <Text style={{ color: "black" }}>From Currency:</Text>
      <ModalDropdown
        options={currencies}
        defaultValue={fromCurrency}
        onSelect={(i, v) => setFromCurrency(v)}
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 4,
          marginBottom: 16,
        }}
        dropdownStyle={{ width: "80%" }}
      />

      <Text style={{ marginTop: 16, color: "black" }}>To Currency:</Text>
      <ModalDropdown
        options={currencies}
        defaultValue={toCurrency}
        onSelect={(i, v) => setToCurrency(v)}
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 4,
          marginBottom: 16,
        }}
        dropdownStyle={{ width: "80%" }}
      />

      <Button mode="contained" onPress={convertCurrency} style={{ marginTop: 10 }}>
        Convert
      </Button>

      {convertedAmount !== null && (
        <Text style={{ marginTop: 20, fontSize: 16, textAlign: "center", color: "black" }}>
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </Text>
      )}
    </View>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <CurrencyConverter />
    </PaperProvider>
  );
}
