# Example of apache2 config for web server
#### Keep in mind, this is for production (SSL Mode only)
```xml
define ROOT "/var/www/example.com/public"
define SITE "example.com"

<VirtualHost *:80>
    ServerName ${SITE} 
  
    RewriteEngine On
    RewriteCond %{HTTPS} !=on
    RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] 
</VirtualHost>

<VirtualHost *:443>
    ServerName ${SITE}
    DocumentRoot "${ROOT}"

    AllowEncodedSlashes On
  
    php_value upload_max_filesize 100M
    php_value post_max_size 100M

    <Directory "${ROOT}">
        Require all granted
        AllowOverride all
    </Directory>

    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/${SITE}/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/${SITE}/privkey.pem
</VirtualHost>
```