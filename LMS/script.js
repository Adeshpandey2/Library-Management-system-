function searchBooks() {
    let query = document.getElementById("searchBox").value.trim();
    
    if (query === "") {
        alert("Please enter a book name to search.");
    } else {
        alert("Searching for: " + query);
        // Here, you can later connect to a real database for book searches
    }
}