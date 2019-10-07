# Kubernetes Pod

This exercise is to take a custom Docker image and run it in a pod in Kubernetes.

## Assumptions

- You already have a docker image built.
- Your docker image has been pushed to a docker repository which your Kubernetes cluster can pull from.
- Minikube or a suitable substitute is installed on your system, or you have configured your kubectl to use a cluster you are able to deploy to.

## Steps

1. If you did not tag your image at creation time appropriately to push it to your registry, use ```docker tag``` to add the necessary tag to your image.
2. Update the pod.yaml file to ensure the docker image is specified correctly, and adjust the name if you like.
3. Manually create a namespace with the command ```kubectl create ns podlab```
4. Deploy your pod with the command ```kubectl apply -f pod.yaml```
5. Watch the list of pods in the namespace to see your app start up.
6. You can use the ```kubectl expose``` command to expose your application on a NodePort.
