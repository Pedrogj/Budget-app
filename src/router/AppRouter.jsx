import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { BudgetRoutes } from "../budget/routes/BudgetRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Login */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* App */}
        <Route path="/*" element={<BudgetRoutes />} />
      </Routes>
    </>
  );
};
