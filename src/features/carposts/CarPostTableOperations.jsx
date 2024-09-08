import SortBy from "../../ui/SortBy";

function CarPostTableOperations() {
  return (
    <div>
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by car name (A-Z)" },
          { value: "name-desc", label: "Sort by car name (Z-A)" },
          { value: "price-asc", label: "Sort by price (low first)" },
          { value: "price-desc", label: "Sort by price (high first)" },
          { value: "date-asc", label: "Sort by date (oldest first)" },
          { value: "date-desc", label: "Sort by date (recent first)" },
        ]}
      />
    </div>
  );
}

export default CarPostTableOperations;
