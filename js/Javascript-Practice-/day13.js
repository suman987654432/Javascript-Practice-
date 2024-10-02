document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Collect form values
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let profession = document.querySelector("#profession").value;
    let mobile = document.querySelector("#mobile").value;
    let address = document.querySelector("#address").value;

    // Store form values in an object
    let formData = {
        username: username,
        email: email,
        profession: profession,
        mobile: mobile,
        address: address,
    };

    // Hide the form and show the image upload section
    document.getElementById("userForm").style.display = "none"; 
    document.querySelector(".upload-section").style.display = "block";

    // Event listener for image upload
    document.getElementById("uploadButton").addEventListener("click", function() {
        let fileInput = document.getElementById("imageUpload");
        let file = fileInput.files[0];

        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let imgSrc = e.target.result;

                // Create the card content
                let card = `
                    <section class="carddesign">
                        <img src="${imgSrc}" alt="Uploaded Image">
                        <div class="cardcontent">
                            <h4>${formData.username}</h4>
                            <h5>Email: ${formData.email}</h5>
                            <h5>Profession: ${formData.profession}</h5>
                            <h6>Mobile: ${formData.mobile}</h6>
                            <h6>Address: ${formData.address}</h6>
                        </div>
                    </section>`;

                // Hide the upload section and display the card
                document.querySelector(".upload-section").style.display = "none";
                document.querySelector(".showcard").style.display = "block";
                document.querySelector(".showcard").innerHTML = card;
            };

            // Read the uploaded image file
            reader.readAsDataURL(file);
        } else {
            alert("Please select an image to upload.");
        }
    });
});
