import { Navigate, Route, Routes } from "react-router-dom";
import { BudgetPage } from "../pages";

export const BudgetRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BudgetPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
