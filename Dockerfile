# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables (optional)
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Copy any initialization scripts (optional)
# COPY init.sql /docker-entrypoint-initdb.d/

# Expose PostgreSQL port
EXPOSE 5432
