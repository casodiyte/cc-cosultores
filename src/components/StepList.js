// src/components/StepList.js
import styles from './StepList.module.css';

export default function StepList({ steps }) {
    return (
        <div className={styles.stepContainer}>
            {steps.map((step, index) => (
                <div key={index} className={styles.step}>
                    <div className={styles.numberWrapper}>
                        <span className={styles.number}>{index + 1}</span>
                        {index < steps.length - 1 && <div className={styles.line}></div>}
                    </div>
                    <div className={styles.content}>
                        <h4 className={styles.title}>{step.title}</h4>
                        <p className={styles.description}>{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
