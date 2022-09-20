import React from "react";
import { Link } from "react-router-dom";
import styles from './listPageStyle.module.css'

const Table = ({ data, sortDate, sortState }) => {
  return (
<div className={styles.dataTable}>
  <div className={styles.dataTableHead}>
      <div className={styles.headName}><li>NAME</li></div><div className={styles.headDate}><li onClick={() => {sortDate()}}>DATE</li></div><div className={styles.headState}><li onClick={() => {sortState();}}>STATE</li></div>
  </div>
  <div className={styles.dataTableBody}>
      {data.map((person) => {
          return (
            <div key={person._id} className={styles.bodyRow} >
              <div className={styles.rowLink}><li><Link className={styles.tableLink} to="/User" state={{ from: person.href }}>{person.name}</Link> </li>
              </div>
              <div className={styles.rowDate}><li>{person.dateModify}</li></div>
              <div className={styles.rowState}><li>{person.isA}</li></div>
            </div>
          );
        })}
  </div>
</div>
  );
};

export default Table;
