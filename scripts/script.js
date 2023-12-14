document.addEventListener('DOMContentLoaded', function () {
    const targetEl = document.querySelector('.navbar');
    
    // Call loadSnippet with the desired word when the page loads
    loadSnippet('nav');
    
    function loadSnippet(word) {
        fetch(`nav/${word}.html`) 
            .then(res => {
                if (res.ok) {
                    return res.text();
                }
            })
            .then(htmlSnippet => {
                targetEl.innerHTML = htmlSnippet;
            });
    }
});