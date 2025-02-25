#!/usr/bin/env python3
import os
import sys
import re

def rename_md_to_mdx(root):
    for dirpath, _, filenames in os.walk(root):
        for name in filenames:
            if name.lower().endswith('.md') and not name.lower().endswith('.mdx'):
                old_path = os.path.join(dirpath, name)
                new_name = name[:-3] + '.mdx'
                new_path = os.path.join(dirpath, new_name)
                os.rename(old_path, new_path)

def update_links_in_mdx(root):
    md_link_pattern = re.compile(r'(\[[^\]]*\]\()([^)]+?)(\.md)(#[^)]+)?(\))', re.IGNORECASE)
    html_link_pattern = re.compile(r'(href=")([^"]+?)(\.md)(#[^"]*)?(")', re.IGNORECASE)
    for dirpath, _, filenames in os.walk(root):
        for name in filenames:
            if name.lower().endswith('.mdx'):
                filepath = os.path.join(dirpath, name)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                new_content = md_link_pattern.sub(lambda m: m.group(1) + m.group(2) + '.mdx' + (m.group(4) if m.group(4) else '') + m.group(5), content)
                new_content = html_link_pattern.sub(lambda m: m.group(1) + m.group(2) + '.mdx' + (m.group(4) if m.group(4) else '') + m.group(5), new_content)
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)

def main():
    base = sys.argv[1] if len(sys.argv) > 1 else os.getcwd()
    rename_md_to_mdx(base)
    update_links_in_mdx(base)

if __name__ == '__main__':
    main()
