import { card } from "./card.js";
import { renderGallery } from "./item.js";

const divGallery = document.getElementById("gallery");

card.map((items) => divGallery.appendChild(renderGallery(items)));
