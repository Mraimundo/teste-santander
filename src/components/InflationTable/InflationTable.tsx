import { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import data from "../../services/data/inflationsData.json";
import styles from "./InflationTable.module.css";

interface Inflation {
  id: number;
  month: string;
  projection: string;
}

interface InflationTableProps {
  inflations: Inflation[];
  searchInflations: (searchValue: string) => void;
  filteredInflations: Inflation[];
  searchInput: string;
}

export function InflationTableContainer() {
  const [inflations, setInflations] = useState<Inflation[]>([]);
  const [filteredInflations, setFilteredInflations] = useState<Inflation[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setInflations(data.data);
  }, []);

  const searchInflations = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = inflations.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredInflations(filteredData);
    } else {
      setFilteredInflations(inflations);
    }
  };

  return (
    <InflationTable
      inflations={inflations}
      searchInflations={searchInflations}
      searchInput={searchInput}
      filteredInflations={filteredInflations}
    />
  );
}

export function InflationTable({
  searchInflations,
  searchInput,
  filteredInflations,
  inflations,
}: InflationTableProps) {
  return (
    <div className={styles.Container}>
      <form className={styles.formContainer}>
        <input
          type="text"
          onChange={(e) => searchInflations(e.target.value)}
          placeholder="Busque inflação por mês"
        />

        <button type="button">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </form>
      {searchInput.length > 1 ? (
        <table className={styles.tableContainer}>
          <thead>
            <tr>
              <th>Mês/Ano</th>
              <th>Projeção (%) </th>
            </tr>
          </thead>
          <tbody>
            {filteredInflations?.map((item) => (
              <tr key={item.id}>
                <th>{item.month}</th>
                <th>{item.projection}%</th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className={styles.tableContainer}>
          <thead>
            <tr>
              <th>Mês/Ano</th>
              <th>Projeção (%) </th>
            </tr>
          </thead>
          <tbody>
            {inflations?.map((item) => (
              <tr key={item.id}>
                <th>{item.month}</th>
                <th>{item.projection}%</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
