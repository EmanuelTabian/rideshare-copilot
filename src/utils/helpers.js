import { format } from "date-fns";
import { cs } from "date-fns/locale";
import { useSearchParams } from "react-router-dom";

export function dateFormatter(date) {
  const formattedDate = format(date, "dd.MM.yyyy HH:mm", { locale: cs });
  return formattedDate;
}

export function carPostsSorter(cars, searchParams) {
  // // Get sortBy params and account for a name-asc default value
  const sortBy = searchParams.get("sortBy") || "car_name-asc";
  // // // Split param components and destructure it into sort criteria and direction
  const [fieldName, direction] = sortBy.split("-");
  // // // Set up a modifier that will serve for sorting calculation depending on direction
  const modifier = direction === "asc" ? "1" : "-1";
  // // // Ascending/Descending sorting algorithm accounts for a separate scenario, so when the field is a string we use local compare to perform an alphabetical order
  const sortedCarPosts = cars.sort((a, b) =>
    typeof a[fieldName] === "string"
      ? a[fieldName].localeCompare(b[fieldName]) * modifier
      : (a[fieldName] - b[fieldName]) * modifier
  );

  return sortedCarPosts;
}
