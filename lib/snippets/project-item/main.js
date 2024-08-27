function initProjectItem(parentDom) {
  var l1 = parentDom.find(".project-list1");
  var l2 = parentDom.find(".project-list2");

  // JSON dosyasından verileri al
  fetch("/assets/json/projects.json")
    .then((response) => response.json())
    .then((dataList) => {
      for (let i = 0; i < dataList.length; i++) {
        // parentDom.append(_getUserItemDom(dataList[i]));
        if (i % 2 == 0) {
          l1.append(_getUserItemDom(dataList[i]));
        } else {
          l2.append(_getUserItemDom(dataList[i]));
        }
      }
    });
}

function _getUserItemDom(data) {
  return `
<div class="project-item">
    <img src="${data.LogoLink}" alt="logo">
    <div class="details">
        <div class="row1-2">
            <h3 class="text-start">${data.Title}</h3>
            <p class="text-start" style="font-size: 14px;">${data.Description}</p>
        </div>
        <div class="row3">
            <h5 style="font-size: 16px;">${data.Company}</h5>
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
