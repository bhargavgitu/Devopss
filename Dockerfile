# Use official Nginx image as the base
FROM nginx

# Set working directory
COPY ./ /usr/share/nginx/html
