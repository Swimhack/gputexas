# Use PHP 8.2 with Apache
FROM php:8.2-apache

# Install PHP extensions needed for the application
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    unzip \
    && docker-php-ext-install \
    intl \
    mbstring \
    xml \
    zip \
    && docker-php-ext-enable \
    intl \
    mbstring \
    xml \
    zip \
    && rm -rf /var/lib/apt/lists/*

# Enable Apache modules
RUN a2enmod rewrite headers deflate expires

# Set the working directory
WORKDIR /var/www/html

# Copy application files
COPY . /var/www/html/

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chmod -R 755 /var/www/html/assets

# Configure Apache to serve from /var/www/html
RUN echo '<Directory /var/www/html>' > /etc/apache2/conf-available/app.conf \
    && echo '    Options Indexes FollowSymLinks' >> /etc/apache2/conf-available/app.conf \
    && echo '    AllowOverride All' >> /etc/apache2/conf-available/app.conf \
    && echo '    Require all granted' >> /etc/apache2/conf-available/app.conf \
    && echo '</Directory>' >> /etc/apache2/conf-available/app.conf \
    && a2enconf app

# Update DocumentRoot in Apache configuration
RUN sed -i 's|/var/www/html|/var/www/html|g' /etc/apache2/sites-available/000-default.conf

# Configure PHP
RUN echo 'allow_url_fopen = On' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'allow_url_include = Off' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'max_execution_time = 60' >> /usr/local/etc/php/conf.d/app.ini \
    && echo 'memory_limit = 256M' >> /usr/local/etc/php/conf.d/app.ini

# Configure Apache to listen on port 8080 for Fly.io
RUN sed -i 's/Listen 80/Listen 8080/' /etc/apache2/ports.conf
RUN sed -i 's/:80>/:8080>/' /etc/apache2/sites-available/000-default.conf

# Expose port 8080
EXPOSE 8080

# Start Apache in foreground
CMD ["apache2-foreground"]
