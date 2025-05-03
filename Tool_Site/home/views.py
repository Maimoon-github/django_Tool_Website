from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator

# Blog post data (moved from JS)
BLOG_POSTS = [
    {
        "title": "How to Choose the Right Power Drill",
        "date": "April 15, 2024",
        "image": "images/drill.jpg",
        "content": "Power drills come in many types. Here's how to choose the right one based on your needs. Consider cordless vs corded, voltage, speed settings, and chuck size...",
    },
    {
        "title": "Essential Hand Tools for Every Homeowner",
        "date": "April 10, 2024",
        "image": "images/tools.jpg",
        "content": "Every homeowner should own a hammer, screwdrivers, pliers, tape measure, and wrench. These tools cover most basic repair tasks...",
    },
    {
        "title": "Tips for Using a Circular Saw Safely",
        "date": "April 5, 2024",
        "image": "images/circular-saw.jpg",
        "content": "Always wear safety gear, secure your material, and use the correct blade. Keep hands away from the blade and unplug when adjusting...",
    },
    {
        "title": "The Benefits of Cordless Tools",
        "date": "March 20, 2024",
        "image": "images/cordless-tools.jpg",
        "content": "Cordless tools are portable and easy to handle. They reduce clutter and are great for DIY work, especially in areas without power access...",
    }
]

def home(request):
    # Redirect to blog index for now
    return redirect('blog_index')

def blog_index(request):
    # Paginate blog posts (2 per page)
    paginator = Paginator(BLOG_POSTS, 2)
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)
    context = {
        'page_obj': page_obj,
        'blog_posts': page_obj.object_list,
        'paginator': paginator,
    }
    return render(request, 'home/index.html', context)

def blog_detail(request, post_id):
    try:
        post = BLOG_POSTS[int(post_id)]
    except (IndexError, ValueError):
        post = None
    context = {
        'post': post,
        'post_id': post_id,
    }
    return render(request, 'home/blog.html', context)


