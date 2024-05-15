"use client";
import React, { useState } from "react";
import Quiz from "../../components/Quiz";
import BudgetingBasicsArticle from "../../components/BudgetingArticle";
import InvestingForBeginnersArticle from "../../components/InvestmentArticle";
import SavingArticle from "../../components/SavingArticle";
import DebtManagementArticle from "../../components/Debt";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const EducationalResources = () => {
  const [activeTopic, setActiveTopic] = useState(null);
  const { data: session } = useSession();

  if (!session) {
    redirect("/auth/login");
  }

  const topics = [
    {
      id: 1,
      title: "Budgeting Basics",
      content: [
        { type: "article", compo: <BudgetingBasicsArticle /> },
        {
          type: "quiz",
          questions: [
            {
              questionText: "What is the primary purpose of a budget?",
              answerOptions: [
                {
                  answerText: "To track your income and expenses",
                  isCorrect: true,
                },
                {
                  answerText: "To invest in the stock market",
                  isCorrect: false,
                },
                { answerText: "To calculate your taxes", isCorrect: false },
                {
                  answerText: "To predict future economic trends",
                  isCorrect: false,
                },
              ],
            },
            {
              questionText:
                "Which of the following is NOT a common budgeting method?",
              answerOptions: [
                { answerText: "Envelope system", isCorrect: false },
                { answerText: "50/30/20 rule", isCorrect: false },
                { answerText: "Zero-based budgeting", isCorrect: false },
                { answerText: "Compound interest budgeting", isCorrect: true }, // This is not a budgeting method
              ],
            },
            {
              questionText: "What is a 'fixed expense' in a budget?",
              answerOptions: [
                {
                  answerText: "An expense that changes every month",
                  isCorrect: false,
                },
                {
                  answerText: "An expense that you can easily eliminate",
                  isCorrect: false,
                },
                {
                  answerText:
                    "An expense that remains the same amount each month",
                  isCorrect: true,
                },
                {
                  answerText: "An expense that is related to your hobbies",
                  isCorrect: false,
                },
              ],
            },
            {
              questionText: "What is a 'variable expense'?",
              answerOptions: [
                {
                  answerText: "An expense that is always the same",
                  isCorrect: false,
                },
                {
                  answerText: "An expense that you can't control",
                  isCorrect: false,
                },
                {
                  answerText: "An expense that fluctuates from month to month",
                  isCorrect: true,
                },
                {
                  answerText: "An expense that is paid annually",
                  isCorrect: false,
                },
              ],
            },
            {
              questionText:
                "Which of the following is a good practice for successful budgeting?",
              answerOptions: [
                {
                  answerText: "Reviewing and adjusting your budget regularly",
                  isCorrect: true,
                },
                { answerText: "Ignoring small expenses", isCorrect: false },
                {
                  answerText: "Using credit cards for all purchases",
                  isCorrect: false,
                },
                {
                  answerText: "Setting unrealistic savings goals",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Investing for Beginners",
      content: [
        { type: "article", compo: <InvestingForBeginnersArticle /> },
        {
          type: "quiz",
          questions: [
            {
              questionText: "What does 'diversification' mean in investing?",
              answerOptions: [
                {
                  answerText: "Putting all your eggs in one basket",
                  isCorrect: false,
                },
                {
                  answerText: "Predicting the future of the stock market",
                  isCorrect: false,
                },
                {
                  answerText:
                    "Spreading your investments across different assets",
                  isCorrect: true,
                },
                {
                  answerText: "Investing only in high-risk stocks",
                  isCorrect: false,
                },
              ],
            },
            {
              questionText:
                "Which of the following is a long-term investment strategy?",
              answerOptions: [
                { answerText: "Day trading", isCorrect: false },
                { answerText: "Buy and hold", isCorrect: true },
                { answerText: "Timing the market", isCorrect: false },
                { answerText: "Panic selling", isCorrect: false },
              ],
            },
            {
              questionText: "What is the primary goal of investing in stocks?",
              answerOptions: [
                { answerText: "Guaranteed income", isCorrect: false },
                { answerText: "Avoiding all risk", isCorrect: false },
                {
                  answerText: "Capital appreciation (growth in value)",
                  isCorrect: true,
                },
                { answerText: "Short-term profits", isCorrect: false },
              ],
            },
            {
              questionText: "What is an ETF (Exchange-Traded Fund)?",
              answerOptions: [
                { answerText: "A type of savings account", isCorrect: false },
                {
                  answerText:
                    "A basket of stocks or other assets that trade like a stock",
                  isCorrect: true,
                },
                { answerText: "A government bond", isCorrect: false },
                {
                  answerText: "A type of high-risk investment",
                  isCorrect: false,
                },
              ],
            },
            {
              questionText:
                "Which of the following is NOT a common mistake for beginner investors?",
              answerOptions: [
                {
                  answerText: "Investing without a clear goal",
                  isCorrect: false,
                },
                {
                  answerText: "Panic selling during market downturns",
                  isCorrect: false,
                },
                { answerText: "Diversifying your portfolio", isCorrect: true }, // This is not a mistake
                { answerText: "Trying to time the market", isCorrect: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Saving",
      content: [{ type: "article", compo: <SavingArticle /> }],
    },
    {
      id: 4,
      title: "Debt Management",
      content: [{ type: "article", compo: <DebtManagementArticle /> }],
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md px-16 py-4">
      <h2 className="text-3xl font-bold mb-4">Financial Education</h2>
      <a
        href="/calculator"
        className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-md text-center block lg:w-1/5 md:2/5"
      >
        Try out the calculators &rarr;
      </a>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Topic Navigation */}
        <ul className="space-y-2 md:w-1/4">
          {topics.map((topic) => (
            <li
              key={topic.id}
              onClick={() => setActiveTopic(topic.id)}
              className={`cursor-pointer ${
                activeTopic === topic.id ? "font-bold" : ""
              }`}
            >
              {topic.title}
            </li>
          ))}
        </ul>

        <div className="md:w-3/4">
          {activeTopic && (
            <div className="flex flex-col lg:flex-row gap-4">
              {topics
                .find((t) => t.id === activeTopic)
                .content.map((item, index) => (
                  <div key={index} className="mb-4">
                    {" "}
                    {/* Added margin-bottom */}
                    {item.type === "article" && (
                      <div className="md:w-full lg:mt-[-80px]">
                        {item.compo}
                      </div>
                    )}
                    <div>
                      {item.type === "quiz" && (
                        <div
                          key={index}
                          className="bg-slate-100 rounded-lg p-6"
                        >
                          <h4 className="text-lg font-semibold mb-2 md:w-[400px] sm:[200px]">
                            Test Your Knowledge
                          </h4>
                          <Quiz questions={item.questions} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
