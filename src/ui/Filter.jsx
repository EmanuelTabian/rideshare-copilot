import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
// Styled component originally created by: Jonas Schmedtmann
const StyledFilter = styled.div`
  border: none;
  display: flex;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: white;
    `}

  border-radius: 0px 15px 15px 15px;
  font-weight: 600;
  font-size: 1rem;

  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: white;
  }
`;

// Component originally created by: Jonas Schmedtmann
function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
