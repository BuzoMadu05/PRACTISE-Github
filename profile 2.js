document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle Function
    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
    }

    // Profile Picture Change Function
    function changeProfilePicture() {
        let profilePic = document.getElementById("profile-pic");
        let images = ["profile.jpg", "profile2.jpg", "profile3.jpg"]; // Add alternative images
        let currentImage = profilePic.src.split("/").pop();
        let newImage = images[(images.indexOf(currentImage) + 1) % images.length];
        profilePic.src = newImage;
    }

    // Assign functions to global scope
    window.toggleTheme = toggleTheme;
    window.changeProfilePicture = changeProfilePicture;
});
