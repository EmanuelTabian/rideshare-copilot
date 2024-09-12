import { useSearchParams } from "react-router-dom";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

function Pagination({ count, pagination }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    current_page: currentPage,
    has_next: hasNextPage,
    has_previous: hasPreviousPage,
    total_pages: totalPages,
  } = pagination;

  function nextPage() {
    const next = currentPage === totalPages ? currentPage : currentPage + 1;
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
      <button onClick={previousPage} disabled={!hasPreviousPage}>
        <HiChevronLeft /> <span>Previous</span>
      </button>
      <span>
        Page {currentPage} of {totalPages}. Showing 10 of {count} results
      </span>
      <button onClick={nextPage} disabled={!hasNextPage}>
        <span>Next</span>
        <HiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
