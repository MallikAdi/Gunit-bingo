let selectedImage = null;
let bingoData = [];

function selectImage(imageIndex) {
  selectedImage = imageIndex;
  const imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach((container, index) => {
    container.classList.remove("selected");
    if (index.toString() === imageIndex) {
      container.classList.add("selected");
    }
  });
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const formData = new FormData(event.target);
  const name = formData.get("name");

  if (!selectedImage || !name) {
    alert("Please select an image and enter your name");
    return;
  }

  const entry = {
    name: name,
    selectedImage: selectedImage,
  };

  bingoData.push(entry);
  localStorage.setItem("bingoData", JSON.stringify(bingoData));

  console.log("Form submitted:", entry);
  // You can perform further actions here, such as displaying a success message
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("bingo-form")
    .addEventListener("submit", handleSubmit);
});
