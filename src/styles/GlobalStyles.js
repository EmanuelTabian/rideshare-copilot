import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --app-background-color: linear-gradient(to bottom, #BFFFDA, #e0f7e9);
    --color-grey-100: #1f2937;
    --color-grey-200: #6b7280;
    --color-grey-300: #9ca3af;
    --color-grey-400: #d1d5db;
    --color-grey-500: #e5e7eb;
    --color-grey-600: #f3f4f6;
    --color-grey-700: #f9fafb;

    --color-brand-100: #021E0E;
    --color-brand-200: #043C1C;
    --color-brand-300: #065A2B;
    --color-brand-400: #087638;
    --color-brand-500: #0A9245;
    --color-brand-600: #0CAE53;
    --color-brand-700: #0ECB60;
}
body {
    margin: 0;
    padding: 0;
    background-image: var(--app-background-color);
    color: var(--color-grey-100);
    line-height: 1.6;
    font-size: 1rem;
    @media (max-width: 768px) {
        font-size: 0.875rem;
    }
    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
}
body {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    transition: color 0.3s;
}
ul {
    list-style: none;
    padding: 0;
}
a {
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyles;
