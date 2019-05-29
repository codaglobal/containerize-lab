# Secrets and Configmaps

Lab to show how to use secrets and configmaps in your containerized application intended to run on Kubernetes.

## Using

This lab consists of an application which uses a configuration file to pass parameters to the app.  These parameters are reflected in the gui.  The goal of the exercise is to move the configuration file into a configmap.

### Exercise

1. Build the Docker image

    `docker build -t sclab:latest .`

   To test your image, you can run it with

    `docker run -p 3000:3000 sclab:latest`

2. Create a Docker repo

   * Log into hub.docker.com
   * Click on Repositories
   * Click on the button 'Create Repository +'
   * Name your repository and click 'Create'

3. Tag your image, replacing 'new-repo' with the name specified in step 2 and 'version' with the version number

    `docker tag sclab:latest new-repo:version`

4. Push your image to your repo, using the name and version provided in the previous step

    `docker push new-repo:version`

5. Create a Kubernetes deployment for the app by copying the sample-deploy.yml and updating the image information.

    `cp sample-deploy.yml deploy.yml`

   Then deploy to your kubernetes cluster

    `kubectl apply -f deploy.yml`

   Test you can access your app

6. Create a Kubernetes ConfigMap using the config.json file

   `kubectl create configmap scapp-config --from-file=config.json`

7. Modify the Deployment to use the ConfigMap as a mounted volume as follows:
    > Use either `kubectl edit deploy sclab`
    >
    > or
    >
    > edit deploy.yaml then `kubectl apply -f deploy.yaml`

   ```yaml
    spec:
    replicas: 3
    selector:
      matchLabels:
      app: sclab
    template:
      metadata:
      labels:
        app: sclab
      spec:
      containers:
      - name: sclab
        image: new-repo:version
        ports:
        - containerPort: 3000
    ```

    Becomes

    ```yaml
    spec:
    replicas: 3
    selector:
      matchLabels:
      app: sclab
    template:
      metadata:
      labels:
        app: sclab
      spec:
      containers:
      - name: sclab
        image: new-repo:version
        ports:
        - containerPort: 3000
        volumeMounts:
        - name: config
          mountPath: /home/node/scapp/cfg/
      volumes:
      - name: config
        configMap:
          name: scapp-config
    ```
 
## ToDo

* Add secret exercise
* Config change after adopting the ConfigMap
* Specify resources to container spec for ConfigMap unit
* Change ConfigMap unit example app version number to be config version in UI
