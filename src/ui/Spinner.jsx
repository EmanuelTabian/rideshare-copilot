import styled from "styled-components";

// The following spiner was taken from:
// "I made 100 CSS loaders for your next project" by Temani Afif
// https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje#the-spinner

const StyledSpinner = styled.div`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #34d186;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

function Spinner() {
  return <StyledSpinner></StyledSpinner>;
}

export default Spinner;
