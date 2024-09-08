import { useSearchParams } from "react-router-dom";
import Select from "./Select";

// Re-usable component originally designed by Jonas Schmedtmann.
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return <Select value={sortBy} options={options} onChange={handleChange} />;
}

export default SortBy;
