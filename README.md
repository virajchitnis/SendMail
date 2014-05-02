SendMail
========
The Gmail compose window redesigned with a signature box. A working copy of this project is at [sendmail.virajchitnis.com](http://sendmail.virajchitnis.com).

This project was built to demo a redesigned version of the Gmail compose window that includes a signature addition box. Not every button in the compose window is supposed to work, because this is a demo, only the necessary parts of the compose window work. For instance, the 'Signature' button works and the 'Send' button works. If you fill out all the fields appropriately and click the 'Send' button, the email will be sent.

Installation
------------

These instructions are very generic and may need to be tailored specifically for your server setup.

Requirements

* Apache 2.2+
* PHP 5+
* Postfix

Download [SendMail-1.1.2.tar.gz](https://github.com/virajchitnis/SendMail/releases/download/v1.1.2/SendMail-1.1.2.tar.gz)

1. Download and untar the tar.gz file to your Apache server root, the command may look something like this '*tar -zxvf SendMail-1.1.2.tar.gz*'.
2. Change the owner of the extracted folder to your Apache server user, 'apache' or 'www-data', depending upon your linux distro.
6. Visit the SendMail folder on your server via the browser and enjoy.

License
-------

This project is available under the [MIT License](https://github.com/virajchitnis/SendMail/blob/master/LICENSE.md)

Support
-------

If you happen to find any bugs in this project, or have a feature request, please create an issue for it on the  [GitHub](https://github.com/virajchitnis/SendMail) page. Please also mark the issue appropriately, so if you have discovered a bug, mark the issue as a 'bug', if you have a feature request, mark the issue as an 'enhancement'.