import { act, createContext, useContext, useReducer } from "react";

const InitialState = {
  income: "",
  commission: "",
  expenses: "",
  earnings: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setIncome":
      return {
        ...state,
        income: action.payload,
        earnings: Math.round(
          action.payload -
            (state.commission / 100) * action.payload -
            state.expenses
        ),
      };
    case "setCommission":
      return {
        ...state,
        commission: action.payload,
        earnings: Math.round(
          state.income - (action.payload / 100) * state.income - state.expenses
        ),
      };
    case "setExpenses":
      return {
        ...state,
        expenses: action.payload,
        earnings:
          state.income -
          Math.round((state.commission / 100) * state.income - action.payload),
      };
    default:
      throw new Error("Action unrecognized!");
  }
}

const TableCalculatorContext = createContext();

function TableCalculatorProvider({ children }) {
  const [{ income, commission, expenses, earnings }, dispatch] = useReducer(
    reducer,
    InitialState
  );

  return (
    <TableCalculatorContext.Provider
      value={{ income, commission, expenses, earnings, dispatch }}
    >
      {children}
    </TableCalculatorContext.Provider>
  );
}

function useTableCalculator() {
  const context = useContext(TableCalculatorContext);
  if (context === undefined)
    throw new Error("Table Calculator used outside Table Calculator Provider");
  return context;
}

export { useTableCalculator, TableCalculatorProvider };
