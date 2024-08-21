
# Teeremana

A small project assigned by WeDoSoftware as part of the interview process. The project is designed to let users record their workouts and track progress over time.  


## Prerequisites

-Docker  
-ASP .NET 8.0  
-Angular  


## Running The Application

1.  Start the database

       Navigate to the directory where the Dockerfile is located and type in terminal (Don't change the ports)
```
      docker build -t your-image-name .
      docker run -d -p 5433:5432 --name your-container-name your-image-name
 ```
2. Import the project into Visual Studio and start the application

