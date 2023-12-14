document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("click", function(e) {
        // Check if the clicked element is the sidebar toggle button
        if (e.target.classList.contains("bxs-ghost")) {
            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("close");
        }

        // Check if the clicked element is the sidebar toggle button
        if (e.target.classList.contains("bxs-game")) {
            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("close");
        }

        // Check if the clicked element is an arrow
        if (e.target.classList.contains("link_name")) {
            let arrowParent = e.target.parentElement.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        }
        // Check if the clicked element is an arrow
        if (e.target.classList.contains("arrow")) {
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("click", function(e) {
        // Check if the clicked element is the sidebar toggle button
        if (e.target.classList.contains("bxs-game")) {
            let sidebar = document.querySelector(".navbar");
            sidebar.classList.toggle("close");
        }
    });
});
