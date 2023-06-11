document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const rightContainer = document.querySelector(".right-container");
    const resetButton = document.querySelector("#reset-btn");
    let successMessage = document.createElement("p");
  
    // Add event listeners for drag and drop events
    items.forEach(item => {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    });
  
    rightContainer.addEventListener("dragover", dragOver);
    rightContainer.addEventListener("dragenter", dragEnter);
    rightContainer.addEventListener("dragleave", dragLeave);
    rightContainer.addEventListener("drop", drop);
  
    resetButton.addEventListener("click", reset);
  
    let draggedItem = null;
  
    function dragStart() {
      draggedItem = this;
      setTimeout(() => {
        this.style.display = "none";
      }, 0);
    }
  
    function dragEnd() {
      setTimeout(() => {
        draggedItem.style.display = "block";
        draggedItem = null;
      }, 0);
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add("highlight");
    }
  
    function dragLeave() {
      this.classList.remove("highlight");
    }
  
    function drop() {
      this.classList.remove("highlight");
      this.appendChild(draggedItem);
      showSuccessMessage();
    }
  
    function showSuccessMessage() {
      successMessage.textContent = "Item dropped successfully!";
      successMessage.classList.add("success-message");
      rightContainer.appendChild(successMessage);
    }
  
    function reset() {
      rightContainer.innerHTML = "<h3>Drop Area</h3>";
      successMessage.textContent = "";
      successMessage.classList.remove("success-message");
    }
  });
  