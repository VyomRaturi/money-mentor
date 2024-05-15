'use client';
import React from 'react';

function BudgetingBasicsArticle() {
  return (
    <div className="prose max-w-none mx-auto">
      <div className='bg-gradient-to-r from-red-50 to-violet-200 rounded-t-lg p-6 mb-4'>
      <h2 className="text-3xl font-semibold text-center mb-4 text-violet-900">Your Roadmap to Financial Freedom</h2>
      </div>
      <p className="text-lg leading-relaxed text-gray-700">
        A budget is your financial plan, a roadmap guiding you towards your financial goals. It helps you track your income and expenses, ensuring you make informed choices about your money.
      </p>

      {/* Why Budget Section */}
      <div className="bg-blue-50 rounded-lg p-4 my-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg> {/* Annotation Icon (Replaced Heroicon) */}
        <h3 className="text-xl font-semibold text-blue-700 inline-block">Why Budget?</h3>

        <ul className="list-disc list-inside mt-2">
          <li>Gain control over your spending and avoid impulsive buys.</li>
          <li>Achieve your financial dreams, from dream vacations to a comfortable retirement.</li>
          <li>Reduce and eliminate existing debt, paving the way for a debt-free future.</li>
          <li>Build a financial safety net for unexpected expenses or emergencies.</li>
          <li>Enjoy peace of mind knowing your finances are in order and your future is secure.</li>
        </ul>
      </div>

      {/* How to Create a Budget Section */}
      <div className="bg-green-50 rounded-lg p-4 my-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> {/* Check Circle Icon (Replaced Heroicon) */}
        <h3 className="text-xl font-semibold text-green-700 inline-block">How to Create a Budget:</h3>

        <ol className="list-decimal list-inside mt-2">
          <li>Calculate Your Income:  Sum up all your income sources, including salary, side gigs, and investments.</li>
          <li>Track Your Expenses: List all your monthly expenses, categorizing them as fixed (e.g., rent, utilities) or variable (e.g., groceries, entertainment).</li>
          <li>Compare Income and Expenses: Subtract your total expenses from your income to see if you're overspending or saving.</li>
          <li>Make Adjustments: If spending exceeds income, identify areas to cut back. If there's a surplus, allocate it towards savings or debt repayment.</li>
        </ol>
      </div>
      <div className="bg-yellow-50 rounded-lg p-4 my-4">
        <h3 className="text-xl font-semibold text-yellow-700 mb-2">Pro Budgeting Tips:</h3>

        <ul className="list-disc list-inside">
          <li>Start with Realistic Goals: Don't set yourself up for failure with overly ambitious targets.</li>
          <li>Every Penny Counts: Track all expenses, no matter how small, to get a complete picture of your spending.</li>
          <li>Leverage Technology: Utilize budgeting apps or spreadsheets to streamline the process and gain insights.</li>
          <li>Review and Adapt: Regularly review your budget to ensure it aligns with your changing financial situation and goals.</li>
          <li>Celebrate Success:  Acknowledge your progress and reward yourself for sticking to your budget – it's a journey worth celebrating!</li>
        </ul>
      </div>
    </div>
  );
}
export default BudgetingBasicsArticle;