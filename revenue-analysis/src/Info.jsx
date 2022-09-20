import React, { useState, useEffect } from "react";
import styles from './itemPageStyle.module.css'

function Info({total, minData, maxData, mediumData}) {

  return (
    <div className={styles.infoPageWrap}>
      <div className={styles.infoTotal}>
        <div className={styles.infoTotalg}>total</div>
        <div className={styles.infoTotalB}>$ {total}</div>
        </div>
      <div className={styles.infoMinMidMax}>
        <div className={styles.infoMin}>
          <div>Min</div><div className={styles.infocolorB}>$ {minData}</div></div>
        <div className={styles.infoMid}>
          <div>Medium</div><div className={styles.infocolorB}>$ {mediumData}</div></div>
        <div className={styles.infoMax}><div>Max</div><div className={styles.infocolorB}>$ {maxData}</div></div>
      </div>
    </div>
  )
}

export default Info
