import React, { useState, useEffect } from "react";

function Info({total, minData, maxData, mediumData}) {

  return (
    <>
    <div>Info</div>
    <div>total-{total}</div>
    <div>min{minData}</div>
    <div>max{maxData}</div>
    <div>medium{mediumData}</div>
    </>
  )
}

export default Info
