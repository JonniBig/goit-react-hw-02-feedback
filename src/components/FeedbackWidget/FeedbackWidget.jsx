// Компонент для відображення кнопок
import css from './FeedbackWidget.module.scss';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.buttons}>
      {options.map(option => (
        <button
          key={option}
          className={css.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
