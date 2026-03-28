import os
import re

def update_book_demo_buttons():
    for file in os.listdir('.'):
        if file.endswith('.html') and not file.startswith('demo'):
            with open(file, 'r') as f:
                content = f.read()
            
            # Replace buttons that say Book Demo
            content = re.sub(r'>(Book Demo)</button>', r' onclick="window.location.href=\'demo.html\'">\1</button>', content)
            
            with open(file, 'w') as f:
                f.write(content)

def update_demo_links():
    # demo.html -> click mic -> demo-listening.html
    # demo-listening.html -> click mic/orb -> demo-synthesizing.html
    # demo-synthesizing.html -> meta refresh or click -> demo-results.html
    
    # Update demo.html
    with open('demo.html', 'r') as f:
        content = f.read()
    content = content.replace('<button class="relative w-[140px]', '<button onclick="window.location.href=\'demo-listening.html\'" class="relative w-[140px]')
    with open('demo.html', 'w') as f:
        f.write(content)
        
    # Update demo-listening.html
    with open('demo-listening.html', 'r') as f:
        content = f.read()
    content = content.replace('<button class="relative w-[180px]', '<button onclick="window.location.href=\'demo-synthesizing.html\'" class="relative w-[180px]')
    with open('demo-listening.html', 'w') as f:
        f.write(content)
        
    # Update demo-synthesizing.html
    with open('demo-synthesizing.html', 'r') as f:
        content = f.read()
    # Let's add a meta refresh to automatically go to the results page after 3 seconds
    # Or just make the container clickable
    content = content.replace('<head>', '<head>\n<meta http-equiv="refresh" content="3;url=demo-results.html">')
    with open('demo-synthesizing.html', 'w') as f:
        f.write(content)

if __name__ == "__main__":
    update_book_demo_buttons()
    update_demo_links()
