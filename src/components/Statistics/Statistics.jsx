import styles from '../shared/shared.module.css';
const Statistics = ({good,neutral,bad}) => {
 
  const totalCount = good + neutral + bad;
  // console.log(good);
  // console.log(totalCount);
  const positivePercentage = (good / totalCount) * 100;
   
  return (
    <>
      <h2 className={styles.sectionHeader}>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <div>
        <p>Total: {totalCount}</p>
        <p>
          Positive feedback percentage:{' '}
          {positivePercentage % 2 === 0
            ? positivePercentage
            : positivePercentage.toFixed(2)}
          %
        </p>
      </div>
    </>
  );
};

export default Statistics;
