import { useRouter } from "next/router";
import React from "react";
import Button from '../ui/Button';
import { useState } from "react";

const Select = ({ year, month }) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedMonth, setSelectedMonth] = useState("01");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  const handleYearSelect = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthSelect = (e) => {
    setSelectedMonth(e.target.value);
  };
  return (
    <div>
      <select onChange={handleYearSelect}>
        <option>--year--</option>
        {year.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <select onChange={handleMonthSelect}>
        <option>--month--</option>
        {month.map((month) => (
          <option value={month}>{month}</option>
        ))}
      </select>
      <button onClick={handleSearch}>search!</button>
    </div>
  );
};

export default Select;
