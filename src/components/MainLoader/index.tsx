import styles from './styles.module.css';

const MainLoader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.finger} />
      <div className={styles.finger} />
      <div className={styles.finger} />
      <div className={styles.finger} />
      <div className={styles.path} />
      <div className={styles.mainFinger} />
    </div>
  );
};

export default MainLoader;
