async function fetchCardDataArray() {
  try {
    const response = await fetch("cardData.json");
    const cardDataArray = await response.json();
    return cardDataArray;
  } catch (error) {
    console.error("Error fetching cardData:", error);
    return null;
  }
}

async function temp() {
  const cardDataArray = await fetchCardDataArray();
  createCards(cardDataArray);
}

function createCards(cardDataArray) {
  const cardContainer = document.querySelector(".card-container");

  cardDataArray.forEach((cardData) => {
    const temp = document.createElement("div");
    temp.innerHTML = `<div class="card">
            <div class="img-details">
              <div class="card-img">
                <img src="${cardData.imgSrc}" alt="" />
              </div>
              <div class="card-details">
                <div class="content-title">
                  <div class="title">${cardData.title}</div>
                  <div class="star">
                    <img src="${cardData.starSrc}" alt="">
                  </div>
  
                </div>
  
                <div
                  class="content-course"
                  style="margin-bottom: 7px; font-size: 12px"
                >
                  <span>${cardData.course} &nbsp;</span>
                  <span>${cardData.grade}</span>
                  <span style="color: #1f7a54; font-weight: bold">${cardData.plus}</span>
                </div>
  
                <div
                  class="course-details"
                  style="margin-bottom: 18px; font-size: 12px"
                >
                  <span style="color: #666666">
                    <span style="font-weight: bold; color: black">${cardData.units}</span>
                    Units</span
                  >
                  <span style="color: #666666">
                    <span style="font-weight: bold; color: black">${cardData.lessons}</span>
                    Lessons</span
                  >
                  <span style="color: #666666">
                    <span style="font-weight: bold; color: black">${cardData.topics}</span>
                    Topics</span
                  >
                </div>
  
                <div>
                  <label for="sort" style="margin-right: 15px">
                    <select
                      name="sort"
                      id="sort"
                      class="selectOption"
                      style="width: 100%"
                    >
                      <option value="${cardData.courseValue}">${cardData.courseName}</option>
                    </select>
                  </label>
                </div>
  
                <div
                  class="course-duration"
                  style="color: #666666; margin-top: 8px; font-size: 12px"
                >
                  <span>${cardData.students}  &nbsp;</span>
                  <span>${cardData.date}</span>
                </div>
              </div>
            </div>
            <div class="icons">
              <img src="./images/preview.svg" alt="" />
              <img src="./images/manage course.svg" alt="" />
              <img src="./images/grade submissions.svg" alt="" />
              <img src="./images/reports.svg" alt="" />
            </div>
          </div>`;
    cardContainer.appendChild(temp);
  });
}

temp();

const mainMenu = document.querySelector(".main-menu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("mouseover", show);
mainMenu.addEventListener("mouseleave", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}
