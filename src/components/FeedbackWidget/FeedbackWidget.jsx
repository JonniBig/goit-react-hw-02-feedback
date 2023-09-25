// Компонент для відображення кнопок
import css from './FeedbackWidget.module.scss';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      <button className={css.buttonOne} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button
        className={css.buttonTwo}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.buttonThree}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};
