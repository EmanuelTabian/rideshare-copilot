import { useSearchParams } from "react-router-dom";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { useEffect } from "react";
import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0.44rem 0.8rem;
    border: none;
    border-radius: 0 10px 10px 10px;
    font-size: 0.75rem;
    font-weight: 900;
    cursor: pointer;

    display: inline;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--color-brand-600);
      color: white;
    }
  }
`;

function Pagination({ count, pagination, pageLength }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    current_page: currentPage,
    has_next: hasNextPage,
    has_previous: hasPreviousPage,
    total_pages: totalPages,
  } = pagination;
  console.log(pageLength);

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
    <StyledPagination>
      <button onClick={previousPage} disabled={!hasPreviousPage}>
        <HiChevronLeft /> <span>Previous</span>
      </button>
      <span>
        Page {currentPage} of {totalPages}. Showing{" "}
        {pageLength <= 10 ? pageLength : 10} of {count} results
      </span>
      <button onClick={nextPage} disabled={!hasNextPage}>
        <HiChevronRight />
        <span>Next</span>
      </button>
    </StyledPagination>
  );
}

export default Pagination;
