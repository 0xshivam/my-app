import styles from './jobs.module.css'

export default function Jobs() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Open Roles</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet lorem 
          ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum 
          
        </p>
      </div>
      
      <div className={styles.tableWrapper}>
      <div className={styles.tableContainer}>
        {/* Header row */}
        <div className={styles.headerRow}>
          <span className={styles.headerCell}>Position</span>
          <span className={styles.headerCell}>Department</span>
          <span className={styles.headerCell}>Type</span>
          <span className={styles.headerCell}>Location</span>
        </div>
        
        {/* Job listings */}
        <ul className={styles.jobsList}>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-1" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-2" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-3" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-4" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-5" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-6" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-7" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-8" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-9" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
          <li className={styles.jobItem}>
            <a href="/jobs/account-executive-10" className={styles.jobLink}>
              <span className={styles.jobCell}>Account Executive, Enterprise</span>
              <span className={styles.jobCell}>Sales</span>
              <span className={styles.jobCell}>Remote</span>
              <span className={styles.jobCell}>New York, United States</span>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
}