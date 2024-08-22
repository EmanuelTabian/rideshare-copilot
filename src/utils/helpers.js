import { format } from "date-fns";
import { cs } from "date-fns/locale";

export function dateFormatter(date) {
  const formattedDate = format(date, "dd.MM.yyyy HH:mm", { locale: cs });
  return formattedDate;
}
