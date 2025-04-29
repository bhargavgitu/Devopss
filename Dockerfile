# Use official Nginx image as the base
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy your website files into the Nginx web root
COPY index.html .
COPY css/ css/
COPY js/ js/

# Expose port 8081
EXPOSE 8081

# Override Nginx default config to listen on port 8081
RUN echo 'server { \
    listen 8081; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
