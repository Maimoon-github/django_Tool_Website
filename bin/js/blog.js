const blogPosts = [
    {
      title: "How to Choose the Right Power Drill",
      date: "April 15, 2024",
      image: "https://i.imgur.com/2NxF2Cb.jpg",
      content: "Power drills come in many types. Here's how to choose the right one based on your needs. Consider cordless vs corded, voltage, speed settings, and chuck size...",
    },
    {
      title: "Essential Hand Tools for Every Homeowner",
      date: "April 10, 2024",
      image: "https://i.imgur.com/qU65zFd.jpg",
      content: "Every homeowner should own a hammer, screwdrivers, pliers, tape measure, and wrench. These tools cover most basic repair tasks...",
    },
    {
      title: "Tips for Using a Circular Saw Safely",
      date: "April 5, 2024",
      image: "https://i.imgur.com/NgWSoMb.jpg",
      content: "Always wear safety gear, secure your material, and use the correct blade. Keep hands away from the blade and unplug when adjusting...",
    },
    {
      title: "The Benefits of Cordless Tools",
      date: "March 20, 2024",
      image: "https://i.imgur.com/Jt0CP0P.jpg",
      content: "Cordless tools are portable and easy to handle. They reduce clutter and are great for DIY work, especially in areas without power access...",
    }
  ];
  
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const post = blogPosts[id];
  const container = document.getElementById("single-post");
  
  if (post) {
    container.innerHTML = `
      <h1>${post.title}</h1>
      <p class="date">${post.date}</p>
      <img src="${post.image}" alt="${post.title}">
      <p style="margin-top:20px;">${post.content}</p>
      <br><a href="index.html">← Back to Blog</a>
    `;
  } else {
    container.innerHTML = "<h2>Blog post not found</h2><a href='index.html'>← Back</a>";
  }
  