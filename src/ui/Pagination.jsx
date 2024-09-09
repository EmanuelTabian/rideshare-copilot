import { useSearchParams } from "react-router-dom";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

function Pagination({ count, pagination }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // On a future refactor the value 10 will be modified to a specific value selected by the user that will also be sent to backend for specific post number fetch
  const pageCount = Math.ceil(count / 10);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <button onClick={previousPage} disabled={currentPage === 1}>
        <HiChevronLeft /> <span>Previous</span>
      </button>
      <button onClick={nextPage} disabled={currentPage === pageCount}>
        <span>Next</span>
        <HiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
