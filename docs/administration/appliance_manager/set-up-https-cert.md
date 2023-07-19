---
title: "Set up HTTPS cert"
sidebar_position: 17
---

You can add your own https cert and key in apache style cert files to use a secure web console for Device42 and the Remote Collectors. You can generate a self-signed certificate with a CA using OpenSSL or Microsoft certificate server and upload it here, or you can also have one issued from a trusted certificate authority.

### Upload the cert and key files.

![](/assets/images/WEB_815_1.jpg)

Upload both files: cert and key. The software will validate the certs before applying them.

### Adding the intermediate and the CA Root

You'll need to concatenate all the certificates, starting with the server certificate, and going deeper in the chain, running through all the intermediate certificates. This can be done with "cat chain.crt >> mysite.com.crt" on the command line. (or via copy-paste via a text editor)

### Restart the Application

![](/assets/images/WEB_815_2.jpg)

You will need to restart the application to see the new cert.

### Creating your own cert

If you need to create your own certificate, contact [support@device42.com](mailto:support@device42.com) for assistance.
