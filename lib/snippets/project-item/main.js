function initProjectItem(parentDom) {
  // JSON dosyasından verileri al
  fetch("/assets/json/projects.json")
    .then((response) => response.json())
    .then((dataList) => {
      for (let i = 0; i < dataList.length; i++) {
        parentDom.append(_getUserItemDom(dataList[i]));
      }
    });
}

function _getUserItemDom(data) {
  if (data.AppStoreLink == null) {
    return `
  <div class="project-item">
      <img src="${data.LogoLink}" alt="logo">
      <div class="details">
          <div class="row1-2">
              <h3>${data.Title}</h3>
              <p>${data.Description}</p>
          </div>
          <div class="row3">
              <h5>${data.Company}</h5>
              <div class="icons">
                  <a href="${data.Link}" target="_blank"><i class="fa-solid fa-globe"></i></a>
              </div>
          </div>
      </div>
  </div>
      `;
  }
  return `
<div class="project-item">
    <img src="${data.LogoLink}" alt="logo">
    <div class="details">
        <div class="row1-2">
            <h3>${data.Title}</h3>
            <p">${data.Description}</p>
        </div>
        <div class="row3">
            <h5>${data.Company}</h5>
            <div class="icons">
                <a href="${data.Link}" target="_blank"><i class="fa-solid fa-globe"></i></a>
                <a href="${data.AppStoreLink}" target="_blank"><i class="fa-brands fa-app-store-ios"></i></a>
                <a href="${data.PlayStoreLink}" target="_blank"><i class="fa-brands fa-google-play"></i></a>
            </div>
        </div>
    </div>
</div>
    `;
}
