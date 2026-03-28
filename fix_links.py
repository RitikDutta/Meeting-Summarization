import os

def fix_links():
    for file in os.listdir('.'):
        if file.endswith('.html'):
            with open(file, 'r') as f:
                content = f.read()
            
            # Replace escaped quotes
            content = content.replace("onclick=\"window.location.href=\\'demo.html\\'\"", "onclick=\"window.location.href='demo.html'\"")
            
            with open(file, 'w') as f:
                f.write(content)

if __name__ == "__main__":
    fix_links()
