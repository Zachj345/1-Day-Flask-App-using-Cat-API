function moreCats() {
  const API_KEY =
    "live_slwstxVNRlpVUWvVsYjBRMYCCyHR511ixrffrbKmjmLULEYgKNwe9xsGhH4NhqIh";

  let reloadDiv = document.querySelector(".reload");

  let params = {
    limit: 3,
    api_key: API_KEY,
    has_breeds: 1,
  };
  let url = `https://api.thecatapi.com/v1/images/search?limit=${params.limit} \
  &has_breeds=${params.has_breeds}&api_key=${params.api_key}`;

  fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      for (let cat = 0; cat < data.length; cat++) {
        if (data.length <= 99) {
          reloadDiv.innerHTML += `<div class="card info-card">
            <img
              src="${data[cat]["url"]}"
              class="card-img-top"
              alt="no image available for this cat"
            />
            <div class="card-body">
              <h5 class="card-title">${data[cat]["breeds"][0]["name"]}</h5>
              <p class="card-text">${data[cat]["breeds"][0]["description"]}</p>
              <a href="${data[cat]["url"]}" class="btn btn-primary">View Image</a>
            </div>
          </div>`;
        }
      }
    });
}
