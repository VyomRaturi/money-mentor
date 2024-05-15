'use client';
import React from 'react';

function DebtManagementArticle() {
  return (
    <div className="prose lg:prose-xl max-w-none mx-auto">
      <div className="bg-gradient-to-r from-red-50 to-red-200 rounded-t-lg p-6 mb-4">
        <h2 className="text-3xl font-semibold text-center mb-2 text-red-700">
          <span className="inline-block mr-2">💸</span>  
          Taking Control of Debt
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 text-center">A Guide for Young Adults</p>
      </div>

      <p className="text-lg leading-relaxed text-gray-700">
        Debt is a common part of life for many young adults, whether it's student loans, credit card balances, or car loans. While debt can be a useful tool, it's important to manage it wisely to avoid financial stress and build a solid financial foundation.
      </p>

      {/* Understanding Debt Section */}
      <div className="bg-gray-100 rounded-lg p-4 my-4">
        <span className="inline-block mr-2">💡</span> {/* Lightbulb emoji */}
        <h3 className="text-xl font-semibold text-gray-800 inline-block">Understanding Debt:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Good Debt vs. Bad Debt: Good debt (e.g., student loans, mortgages) can help you build wealth over time. Bad debt (e.g., high-interest credit card debt) can quickly spiral out of control.</li>
          <li>Interest Rates: Understand how interest rates work and how they affect the total amount you owe.</li>
          <li>Minimum Payments: Always pay at least the minimum amount due to avoid late fees and negative impacts on your credit score.</li>
        </ul>
      </div>

      {/* Strategies for Debt Management Section */}
      <div className="bg-white rounded-lg p-4 my-4 shadow-md">
        <span className="inline-block mr-2">✅</span> {/* Checkmark emoji */}
        <h3 className="text-xl font-semibold text-green-700 inline-block">Strategies for Debt Management:</h3>
        <ol className="list-decimal list-inside mt-2 text-gray-700">
          <li>Create a Budget: Know where your money is going and allocate funds for debt repayment.</li>
          <li>Debt Snowball or Avalanche Method: Choose a method to prioritize paying off your debts (either smallest to largest or highest interest rate to lowest).</li>
          <li>Increase Payments: Pay more than the minimum whenever possible to reduce the principal faster.</li>
          <li>Consider Consolidation or Refinancing: Explore options to simplify your debts or get a lower interest rate.</li>
          <li>Avoid Taking on New Debt: Be mindful of your spending habits and only use credit when necessary.</li>
        </ol>
      </div>

      {/* Seeking Help Section */}
      <div className="bg-indigo-50 rounded-lg p-4 my-4">
        <span className="inline-block mr-2">🤝</span> {/* Handshake emoji */}
        <h3 className="text-xl font-semibold text-indigo-700 inline-block">Seeking Help:</h3>
        <p className="mt-2 text-gray-700">
          If you're struggling with debt, don't hesitate to seek help from a financial advisor or credit counselor. They can provide personalized advice and resources to help you get back on track.
        </p>
      </div>
    </div>
  );
}
export default DebtManagementArticle;