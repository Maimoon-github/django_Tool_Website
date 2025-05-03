const blogPosts = [
    {
      title: "How to Choose the Right Power Drill",
      date: "April 15, 2024",
      image: "https://i.imgur.com/2NxF2Cb.jpg",
      content: "Power drills come in many types. Here's how to choose the right one...",
    },
    {
      title: "Essential Hand Tools for Every Homeowner",
      date: "April 10, 2024",
      image: "https://i.imgur.com/qU65zFd.jpg",
      content: "Basic tools like a hammer, pliers, and screwdrivers are essential...",
    },
    {
      title: "Tips for Using a Circular Saw Safely",
      date: "April 5, 2024",
      image: "https://i.imgur.com/NgWSoMb.jpg",
      content: "Circular saws are powerful tools. Always wear goggles...",
    },
    {
      title: "The Benefits of Cordless Tools",
      date: "March 20, 2024",
      image: "https://i.imgur.com/Jt0CP0P.jpg",
      content: "Cordless tools give freedom and flexibility...",
    }
  ];
  
  let currentPage = 1;
  const postsPerPage = 2;
  
  function displayPosts() {
    const container = document.getElementById("blog-container");
    container.innerHTML = "";
  
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
  
    blogPosts.slice(start, end).forEach((post, index) => {
      const globalIndex = start + index;
      container.innerHTML += `
        <div class="card">
          <img src="${post.image}" alt="${post.title}" />
          <h3>${post.title}</h3>
          <p class="date">${post.date}</p>
          <p>${post.content.substring(0, 100)}...</p>
          <a href="blog.html?id=${globalIndex}">Read More</a>
        </div>
      `;
    });
  }
  
  function nextPage() {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayPosts();
    }
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      displayPosts();
    }
  }
  
  displayPosts();
  