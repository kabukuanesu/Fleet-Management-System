import React from "react";

// Assume this function fetches data from the API endpoint
const fetchDataFromApi = async () => {
  const response = await fetch("http://localhost:5013/api/Fuel");
  const data = await response.json();
  return data;
};

// Function to calculate the total fuel quantity by day of the week
const calculateFuelConsumption = (fuelData) => {
  const today = new Date();
  const lastWeekStart = new Date(today);
  lastWeekStart.setDate(today.getDate() - today.getDay() - 6); // Start of the previous week

  const totals = Array(7).fill(0);

  fuelData.forEach((entry) => {
    const entryDate = new Date(entry.vehicleFuelCreatedDate);
    if (entryDate >= lastWeekStart && entryDate < today) {
      const dayOfWeek = entryDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
      totals[dayOfWeek] += parseFloat(entry.vehicleFuelQuantity);
    }
  });

  return totals;
};

const FuelConsumptionChartData = async () => {
  const fuelData = await fetchDataFromApi();
  const totalFuelByDay = calculateFuelConsumption(fuelData);

  return {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: { label: "Sales", data: totalFuelByDay },
  };
};

export default FuelConsumptionChartData;
