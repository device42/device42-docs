---
title: "Tools of the Trade"
sidebar_position: 16
---

## Tools of the Trade

We use many different applications and tools on a day-to-day basis that have made our lives a lot easier and would like to spread the word about some of our favorites in hopes that they'll make your life easier too. We would like to thank all contributors to these applications.

### Text Editors

- **[Atom](https://atom.io)** Windows/Linux/Mac
- **[Brackets](http://brackets.io)** Windows/Linux/Mac
- **[Notepad++](https://notepad-plus-plus.org/)** Windows
- **[Text Wrangler](https://www.barebones.com/products/textwrangler/)** Mac

### IDEs

- **[PyCharms](https://www.jetbrains.com/pycharm/)** Windows/Linux/Mac

### Virtualization

- **[Virtualbox](https://www.virtualbox.org/)** Open Source Hypervisor - Windows/Linux/Mac
- **[lxc](https://linuxcontainers.org/)** OS-Level Virtualization - Linux

### Essentials

- **[Git](https://git-scm.com/)** Version Control - Windows/Linux/Mac
- **[WinSCP](https://winscp.net/eng/download.php)** Secure File Transfers - Windows
- **[CyberDuck](https://cyberduck.io)** Secure File Transfers - Mac
- **[Greenshot](https://getgreenshot.org/)** Advanced Screenshots - Windows
- **[Shutter](https://shutter-project.org/)** Advanced Screenshots - Linux

## Misc. Tips & Tricks

### Creating encoded Credentials/text on Windows or Linux

- To encode in Windows, create a text file that has your username and password in “username:password” format and save as unencodedfile.txt. Then from the command line, type: `Certutil unencodedfile.txt encodedfile.txt`

1. Open the file `encodedfile.txt` using Notepad and copy the line between “Begin Certificate” and “End Certificate” - that's your encoded text!

- In Linux, to create the encoded credentials from command line type: `echo -n ‘username:password’ | base64`
