export const renderGallery = (item) => {
  const divEl = document.createElement("div");
  divEl.classList = "gallery";

  const wrapperEl = document.createElement("div");
  wrapperEl.classList = "gallery__wrapper";

  if (item.type === "image") {
    const imgEl = document.createElement("img");
    imgEl.classList = "gallery__wrapper__img";
    imgEl.src = item.resources;

    wrapperEl.appendChild(imgEl);
  } else if (item.type === "audio") {
    const audioEl = document.createElement("audio");
    audioEl.classList = "gallery__wrapper__audio";
    audioEl.src = item.resources;
    audioEl.controls = true;

    wrapperEl.appendChild(audioEl);
  } else if (item.type === "video") {
    const videoEl = document.createElement("video");
    videoEl.classList = "gallery__wrapper__video";
    videoEl.src = item.resources;
    videoEl.controls = true;

    wrapperEl.appendChild(videoEl);
  }

  const titleEl = document.createElement("span");
  titleEl.classList = "gallery__title";
  titleEl.textContent = item.title;

  divEl.appendChild(wrapperEl);
  divEl.appendChild(titleEl);

  return divEl;
};
