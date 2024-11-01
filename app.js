document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", () => {
        // Create an AJAX request using XMLHttpRequest
        const xhr = new XMLHttpRequest();

        // Open a GET request to the PHP file
        xhr.open("GET", "superheroes.php", true);

        // Define what to do on response
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Show the result in an alert
                alert(xhr.responseText);
            } else {
                alert("Error fetching superhero data.");
            }
        };

        // Send the request
        xhr.send();
    });
});
