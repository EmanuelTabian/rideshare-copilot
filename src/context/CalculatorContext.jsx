import { createContext, useContext } from "react";
import { useState } from "react";
const CalcContext = createContext();

function UseCalculatorContext({ children }) {
  const [test, setTest] = useState();
  const [income, setIncome] = useState("");
  const [rideCom, setRideCom] = useState("");
  const [emplCom, setEmplCom] = useState("");
  const [otherCom, setOtherCom] = useState("");
  const [gasExp, setGasExp] = useState("");
  const [mealsExp, setMealsExp] = useState("");
  const [otherExp, setOtherExp] = useState("");
  const [toggle, setToggle] = useState(false);
  const commissionPerc = rideCom + emplCom;
  const totalExpenses =
    Number(gasExp) + Number(mealsExp) + Number(otherExp) + Number(otherCom);
  const netIncome = Math.round(
    income - (commissionPerc * income) / 100 - totalExpenses
  );

  return (
    <CalcContext.Provider
      value={{
        test,
        setTest,
        income,
        setIncome,
        rideCom,
        setRideCom,
        emplCom,
        setEmplCom,
        otherCom,
        setOtherCom,
        gasExp,
        setGasExp,
        mealsExp,
        setMealsExp,
        otherExp,
        setOtherExp,
        toggle,
        setToggle,
        commissionPerc,
        totalExpenses,
        netIncome,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
}

function UseCalculator() {
  const context = useContext(CalcContext);
  if (context === undefined)
    throw new Error("Calculator context used outside CalcContext provider!");
  return context;
}

export { UseCalculatorContext, UseCalculator };
