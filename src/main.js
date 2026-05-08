import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let currentPage = 1;
let totalHits = 0;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  currentQuery = event.currentTarget.elements["search-text"].value.trim();

  if (!currentQuery) {
    iziToast.warning({
      message: "Please fill in the search field!",
      position: "topRight",
    });

    return;
  }

  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });

      return;
    }

    createGallery(data.hits);

    if (totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later!",
      position: "topRight",
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function onLoadMore() {
  currentPage += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    const totalLoadedImages = currentPage * 15;

    if (totalLoadedImages >= totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later!",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const galleryCard = document
    .querySelector(".gallery-item")
    .getBoundingClientRect();

  window.scrollBy({
    top: galleryCard.height * 2,
    behavior: "smooth",
  });
}