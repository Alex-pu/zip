<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="/styles.css"> <!-- Link to external stylesheet -->
    <style>
        body {
            background-color: green; /* Set background color to green */
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .navbar {
            background-color: #333;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .navbar-right {
            float: right;
        }
        .card {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            max-width: 600px;
        }
        .card img {
            width: 100%;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        .card p {
            margin-bottom: 10px;
        }
        .comment-section {
            border: 2px solid green; /* Green outline */
            padding: 10px;
            border-radius: 5px;
        }
        .comment-image,
        .comment-textarea,
        .comment-button {
            display: block;
            margin-bottom: 10px;
            width: 100%;
            padding: 10px;
            border: 2px solid green; /* Green outline */
            border-radius: 5px;
        }
        .comment-button {
            background-color: green;
            color: white;
            cursor: pointer;
        }
        .comment-button:hover {
            background-color: darkgreen;
        }
        .user-card {
            display: none; /* Hide initially */
            position: absolute;
            top: 50px;
            right: 20px;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .user-card.active {
            display: block; /* Show when active class is applied */
        }
    </style>
</head>
<body>

<!-- Navbar -->
<div class="navbar">
    <a href="/payment">Pay</a>
    <a href="/create-post">Create Post</a>
    <a href="/logout" class="navbar-right">Log Out</a>
</div>

<!-- Hidden User Card -->
<div class="user-card" id="userCard">
    <p>User Account Details</p>
    <!-- Add your user account details here -->
</div>

<!-- Button to toggle user card visibility -->
<button onclick="toggleUserCard()">Show User Card</button>

<% posts.forEach(post => { %>
    <div class="card">
        <img src="<%= post.image %>" alt="Image">
        <p><%= post.description %> <%= post.id %></p>
        <!-- Add a hidden input field to store the post id -->
        <input type="hidden" name="postId" value="<%= post.id %>">
        <form action="/comment" method="POST" enctype="multipart/form-data">
            <div class="comment-section">
                <!-- Use the post id as the name for the uploaded comment image -->
                <input type="file" name="commentImage" class="comment-image">
                <textarea name="comment" class="comment-textarea" placeholder="<%= post.status %>"></textarea>
                <button type="submit" class="comment-button">Upload</button>
            </div>
        </form>
    </div>
<% }); %>

<!-- JavaScript to toggle user card visibility -->
<script>
    function toggleUserCard() {
        const userCard = document.getElementById('userCard');
        userCard.classList.toggle('active');
    }
</script>

</body>
</html>


