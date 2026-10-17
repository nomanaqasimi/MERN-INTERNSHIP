async function loadPosts() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
const posts = await response.json();
console.log("Latest Posts:", posts);
} catch (error) {
console.error("Error loading posts:", error);
}
}

loadPosts();