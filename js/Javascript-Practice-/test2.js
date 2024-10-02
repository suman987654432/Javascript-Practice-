function handleSubmit() {
    const urlInputs = document.querySelectorAll(".url-input");
    const imageRow = document.getElementById("imageRow");
    imageRow.innerHTML = "";  
  
    let imagesHtml = "";
  
    urlInputs.forEach((input) => {
      const imageUrl = input.value;
      if (imageUrl) {
        imagesHtml += `
          <img 
            src="${imageUrl}" 
            alt="Image" 
            onclick="showLargeImage('${imageUrl}')"
          />
        `;
      }
    });
  
    imageRow.innerHTML = imagesHtml;  
    return false;
  }
  
  function showLargeImage(imageUrl) {
    const largeImage = document.getElementById("largeImage");
    largeImage.src = imageUrl;
    largeImage.style.display = "block";
  }
  