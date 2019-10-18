# Kubernetes Namespaces

Lab to show how to use Namespaces in Kubernetes to avoid name collisions and ensure resources are meant for your application.

## Using

This lab consists of a simple pod to show how names within a namespace must be unique. We will then use the imperitive command to create a namespace to create another copy of the same pod.

### Namespace Exercise

1. Create the simple pod

    `kubectl create -f simple-pod.yaml`

2. Attempt to create the simple pod again and notice the message returned by Kubernetes

    `kubectl create -f simple-pod.yaml`

3. Create a new namespace named 'duplicate' using the imperitive command

    `kubectl create namespace duplicate`

4. Re-attempt to create the simple pod again, but this time, in the new namespace

    `kubectl create -f simple-pod.yaml -n duplicate`

5. Check the pods and notice that there are now two instances of 'simple-pod'.  One in each namespace

    `kubectl get pods --all-namespaces`

6. Cleanup 'simple-pod' in the current namespace using the declaritive command.

    `kubectl delete -f simple-pod.yaml`

7. Cleanup the entire 'duplicate' namespace using the imperitive command (notice that there's no warning, but it does delete everything in the namespace).

    `kubectl delete namespace duplicate`
