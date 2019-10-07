# Persistent Volumes

Lab to show how to use Persistent Volumes in your containerized application intended to run on Kubernetes.

## Using

This lab consists of a Persistent Volume(PV), Persistent Volume Claim(PVC), and a sample Pod to test using the Persistent Volume for storage within the Pod. There are several options available for Persistent Volumes which you can read more about here.  For the pursose of this lab, we will focus on HostPath due to its simplicity.  However, one of the strengths of Kubernetes is that really only the bottom section of the Persistent Volume (the part specific to hostPath) would need to be updated to use a different type.  The Persistent Volume Claim and Pod could remain the same.

### HostPath Exercise

1. Create a directory (this will be where data is stored by HostPath).  Be sure to copy the full path that is returned.

    `mkdir -v data`

2. Update the path entry in hostPath/pv.yaml with your created directory
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: k8s-lab-data
  labels:
    use: k8s-lab
spec:
  capacity:
    storage: 1Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: local
  hostPath:
    path: <<created_data_dir>>
    type: Directory
```
becomes
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: k8s-lab-data
  labels:
    use: k8s-lab
spec:
  capacity:
    storage: 1Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: local
  hostPath:
    path: /path_to_your_directory/data
    type: Directory
```

3. Create the PersistentVolume(PV), PersistentVolumeClaim(PVC), and test Pod with one command then wait for the Pod to become "Running"

    `kubectl create -f hostPath/`
    
    `kubectl get pod pv-test --watch`

4. Create a file in the /data directory of the test Pod

    `kubectl exec -it pv-test -- /bin/sh -c "touch /data/newfile && ls /data"`

5. Check the local data directory and you should see 'newfile' there

    `ls data`

6. Rename 'newfile' to 'testfile'

    `mv data/newfile data/testfile`

7. Check the /data directory on the test Pod.  It should now have only 'newfile'

    `kubectl exec -it pv-test -- ls /data`