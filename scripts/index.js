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

  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileSubmitBtn =
  editProfileModal.querySelector(".modal__submit-btn");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileForm.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileForm.querySelector(
  "#profile-description-input",
);

const profileEl = document.querySelector(".profile__column");
const profileNameEl = profileEl.querySelector(".profile__name");
const profileDescriptionEl = profileEl.querySelector(".profile__description");

function openEditProfileModal() {
  resetValidation(
    editProfileForm,
    [editProfileNameInput, editProfileDescriptionInput],
    settings,
  );
  openModal(editProfileModal);
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
}

editProfileBtn.addEventListener("click", openEditProfileModal);

function closeProfileEditModal() {
  closeModal(editProfileModal);
}

editProfileCloseBtn.addEventListener("click", closeProfileEditModal);

function handleProfileSubmit(event) {
  event.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  disableButton(editProfileSubmitBtn, settings);
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleProfileSubmit);

const addPostBtn = document.querySelector(".profile__add-button");
const addPostModal = document.querySelector("#new-post-modal");
const addPostCloseBtn = addPostModal.querySelector(".modal__close-btn");
const addPostSubmitBtn = addPostModal.querySelector(".modal__submit-btn");

const addPostForm = addPostModal.querySelector(".modal__form");
const addPostLinkInput = addPostForm.querySelector("#new-post-link");
const addPostCaptionInput = addPostForm.querySelector("#new-post-caption");

const previewModalEl = document.querySelector("#preview-modal");
const previewModalImageEl = previewModalEl.querySelector(".modal__image");
const previewModalCaptionEl = previewModalEl.querySelector(".modal__caption");
const previewModalCloseBtn = previewModalEl.querySelector(
  ".modal__close-btn_type_preview",
);

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModalEl);
});

addPostBtn.addEventListener("click", function () {
  openModal(addPostModal);
});

function closeAddPostModal() {
  closeModal(addPostModal);
}

addPostCloseBtn.addEventListener("click", closeAddPostModal);
const cardsListEl = document.querySelector(".cards__list");

function handleAddPostSubmit(event) {
  event.preventDefault();
  let data = {
    link: addPostLinkInput.value,
    name: addPostCaptionInput.value,
  };

  const cardObject = getCardElement(data);
  cardsListEl.prepend(cardObject);

  resetValidation(
    addPostForm,
    [addPostLinkInput, addPostCaptionInput],
    settings,
  );

  addPostForm.reset();

  closeModal(addPostModal);
}

addPostForm.addEventListener("submit", handleAddPostSubmit);

function closeModalByEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", closeModalByEscapeKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", closeModalByEscapeKey);
}

const cardTemplateElement = document
  .querySelector("#card-template")
  .content.querySelector(".card");

function getCardElement(data) {
  const cardElement = cardTemplateElement.cloneNode(true);

  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");

  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardTitleElement.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  const cardDelBtn = cardElement.querySelector(".card__delete-button");
  cardDelBtn.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    previewModalCaptionEl.textContent = data.name;
    previewModalImageEl.alt = data.name;
    previewModalImageEl.src = data.link;

    openModal(previewModalEl);
  });

  return cardElement;
}

initialCards.forEach((card) => {
  const cardObject = getCardElement(card);
  cardsListEl.prepend(cardObject);
});

const modalList = Array.from(document.querySelectorAll(".modal"));

modalList.forEach((modalElement) => {
  modalElement.addEventListener("click", (evt) => {
    if (evt.target === modalElement) {
      closeModal(modalElement);
    }
  });
});
