"use client";
import { useState } from "react";
import BudgetCalculator from "../../components/BudgetCalculator";
import InvestmentCalculator from "../../components/InvestmentCalculator";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function FinancialCalculators() {
  const [activeTab, setActiveTab] = useState("budget");
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth/login");
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-center mb-4 underline  text-black">
        Financial Tools
      </h2>

      <div className="mb-4">
        <button
          className={`py-2 px-4 text-sm font-medium rounded-t-lg ${
            activeTab === "budget"
              ? "bg-gray-900 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("budget")}
        >
          Budget Calculator
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium rounded-t-lg ${
            activeTab === "investing"
              ? "bg-gray-900 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("investing")}
        >
          Investment Calculator
        </button>
      </div>

      <div>
        {activeTab === "budget" && <BudgetCalculator />}
        {activeTab === "investing" && <InvestmentCalculator />}
      </div>
    </div>
  );
}

export default FinancialCalculators;
