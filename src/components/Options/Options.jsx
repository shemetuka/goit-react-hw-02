import css from "./Options.module.css";
import { SlHeart } from "react-icons/sl";
import { SlReload } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";

const Options = ({ updateFeedback, total, reset }) => {
  return (
    <div className={css.buttonsContainer}>
      <button
        className={css.feedbackBtn}
        onClick={() => updateFeedback("good")}
      >
        <SlHeart size={40} />
      </button>
      <button
        className={css.feedbackBtn}
        onClick={() => updateFeedback("neutral")}
      >
        <SlLike size={40} />
      </button>
      <button className={css.feedbackBtn} onClick={() => updateFeedback("bad")}>
        <SlDislike size={40} />
      </button>
      {total > 0 && (
        <button className={css.feedbackBtn} onClick={reset}>
          <SlReload size={40} />
        </button>
      )}
    </div>
  );
};

export default Options;
