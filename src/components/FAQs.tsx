"use client";

import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];
const Accordian = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      key={question}
      className=" border-b border-white/30"
    >
      <div className="flex w-full items-center py-7">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {open ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className={clsx("mt-4 ", {
              hidden: !open,
              "": open,
            })}
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:max-w-[648px] mx-auto sm:text-6xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-12">
          {items.map(({ question, answer }) => (
            <Accordian question={question} answer={answer} key={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
