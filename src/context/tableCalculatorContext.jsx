import { createContext, useReducer } from "react";

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
          state.income -
            (state.commission * state.income) / 100 -
            state.expenses
        ),
      };
    case "setCommission":
      return {
        ...state,
        commission: action.payload,
        earnings: Math.round(
          state.income -
            (state.commission * state.income) / 100 -
            state.expenses
        ),
      };
    case "setExpenses":
      return {
        ...state,
        expenses: action.payload,
        earnings: Math.round(
          state.income -
            (state.commission * state.income) / 100 -
            state.expenses
        ),
      };
    default:
      throw new Error("Action unrecognized!");
  }
}

const TableCalculatorContext = createContext();

function tableCalculatorProvider({ children }) {
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
