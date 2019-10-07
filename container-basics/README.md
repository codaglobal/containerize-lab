# Using Dockerfile to Create an Image

This exercise is to generate some custom code and insert it into a Docker image.  You are successful when you are able to see your custom code running a container.

## Assumptions

- You already have docker desktop or podman installed on your system.
- You have access to a docker registry, and are able to push images to it.

## Steps

1. Generate an index.html and place it in the html directory
2. Use the command ```docker build -t sometag:version .``` assuming you are in the same directory as the Dockerfile
3. Run your container locally with the command ```docker run -p 80:80 sometag:version```
4. Open a web browser and go to localhost:80 and you should see your custom web page.

NOTE: you will want to replace sometag:version with values which make sense to you, such as lab1:v1.0.0.
