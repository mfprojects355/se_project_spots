const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileForm.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileForm.querySelector(
  "#profile-description-input"
);

const profileEl = document.querySelector(".profile__column");
const profileNameEl = profileEl.querySelector(".profile__name");
const profileDescriptionEl = profileEl.querySelector(".profile__description");

function openEditProfileModal(){
  openModal(editProfileModal);
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
}

editProfileBtn.addEventListener("click", openEditProfileModal);

function closeProfileEditModal() {
  closeModal(editProfileModal);
}

editProfileCloseBtn.addEventListener("click", closeProfileEditModal);

function handleProfileSubmit(event){
  event.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleProfileSubmit);

const addPostBtn = document.querySelector(".profile__add-button");
const addPostModal = document.querySelector("#new-post-modal");
const addPostCloseBtn = addPostModal.querySelector(".modal__close-btn");

const addPostForm = addPostModal.querySelector(".modal__form");
const addPostLinkInput = addPostForm.querySelector("#new-post-link");
const addPostCaptionInput = addPostForm.querySelector("#new-post-caption");

addPostBtn.addEventListener("click", function () {
  openModal(addPostModal);
});

function closeAddPostModal() {
  closeModal(addPostModal);
}

addPostCloseBtn.addEventListener("click", closeAddPostModal);

function addPostSubmissionHandler(event) {
  addPostForm.reset();
  event.preventDefault();
  console.log(addPostLinkInput.value);
  console.log(addPostCaptionInput.value);
  closeModal(addPostModal);
}

addPostForm.addEventListener("submit", addPostSubmissionHandler);

function openModal(modal){
  modal.classList.add("modal_is-opened");
}

function closeModal(modal){
  modal.classList.remove("modal_is-opened");
}

initialCards.forEach(function(item){
  console.log(item.name);
});