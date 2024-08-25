import { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notifications/Notifications.jsx";
import Options from "./components/Options/Options.jsx";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(
      window.localStorage.getItem("saved-feedback")
    );
    const originalFeedback = { good: 0, neutral: 0, bad: 0 };
    return savedFeedback !== null ? savedFeedback : originalFeedback;
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive =
    totalFeedback > 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const handleReset = () => {
    setFeedback({
      ...feedback,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        reset={handleReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positive}
        />
      )}
    </div>
  );
};

export default App;
