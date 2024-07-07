"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import QuizzesArea from "./Components/QuizzesArea";
import useGlobalContextProvider from "./ContextApi";

import { Toaster } from "react-hot-toast";
import ScoreComponent from "./Components/ScoreComponent";
import Page from "./quiz-start/page";
// import Page from "./quiz-build/page";

export default function Home() {
  const { quizToStartObject, selectedQuizObject } = useGlobalContextProvider();
  const { setSelectQuizToStart } = quizToStartObject;
  const { selectedQuiz, setSelectedQuiz } = selectedQuizObject;

  useEffect(() => {
    setSelectQuizToStart(null);
    // set the selectedQuiz back to null
    setSelectedQuiz(null);
  }, []);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpenMenu(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function once initially to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeChange = (event) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <header>
        <Navbar />
        {/* <ScoreComponent /> */}
      </header>
      <QuizzesArea />
    </div>
  );
}
