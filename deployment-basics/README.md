# Kubernetes Deployment

This exercise will leverage more of the Kubernetes objects and conventions to deploy a custom docker image as a deployment, with multiple replicas, a service and an ingress.

## Assumptions

- Your cluster has a standard ingress controller already installed.

## Steps

1. Create a new namespace for this lab with the command ```kubectl create ns deploylab```
2. Review the deploy.yaml, and update the image information to match your application.  
3. Look at the rest of the values in the manifest to become familiar with these common values.
4. Use the command ```kubectl apply -f deploy.yaml --namespace deploylab``` to install your deployment.
