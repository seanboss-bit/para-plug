import styles from '../src/styles/dashboard.module.css'

const DashboardShowcas = () => {
  return (
    <div className={styles.showcasemain}>
      <div className="container">
        <h2>Welcome, Abubakar</h2>
        <a href="/store">return to store?</a>
      </div>
    </div>
  );
};

export default DashboardShowcas;
