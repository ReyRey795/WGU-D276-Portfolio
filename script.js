"use strict";

const dateContainer = document.getElementById("current-date");
const currentDate = new Date();

dateContainer.textContent = `Current Date: ${currentDate.toLocaleDateString()}`;

console.log("Resume page loaded successfully.");