from django.shortcuts import render
from django.urls import reverse

def home(request):
    context = {
        'hero': {
            'headline': "Unlock Productivity with Powerful Online Tools",
            'subheading': "Everything you need—right in your browser.",
            'cta': "Browse Tools",
        },
        'featured_tools': [
            {'title': 'PDF Merger', 'description': 'Merge PDFs easily.', 'cta': 'Try Now'},
            {'title': 'Image Compressor', 'description': 'Compress images online.', 'cta': 'Try Now'},
            {'title': 'Text Analyzer', 'description': 'Analyze your text.', 'cta': 'Try Now'},
        ],
        'how_it_works': [
            "Select a Tool",
            "Customize Inputs",
            "Download Results",
        ],
        'testimonials': [
            {'quote': "This site saved me hours!", 'name': "Alice"},
            {'quote': "Super easy to use.", 'name': "Bob"},
            {'quote': "Highly recommended.", 'name': "Charlie"},
        ],
    }
    return render(request, 'home/index.html', context)


