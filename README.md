# Coda Global Labs

Collection of labs for kubernetes learning.

## Contributing

Fork the repo and create a pull request with the content you wish to share.  Please note that this content is public, and nust follow all guidelines for sharing code and ideas.

## Using

Each lab should contain a README file which will describe how to run the lab.  As a general statement, it is assumed that you have access to a kubernetes cluster, public docker repo and a public GitHub account for storing code.  Any additional requirements will be in the individual directories.

## Lab Overview

The basics labs are intended to give you an entry-level understanding of core concepts.  It is suggested you use them in the following order:

1. container-basics - this will show you how to run code you write in a container.
2. pod-basics - a Pod is one of the fundamental objects in Kubernetes, and this exercise will bridge understanding from container to Pod.
3. deployment-basics - on its own, a Pod only runs a contianer once.  Making your application resilient and self-healing requires something more, and this lab walks you through that.

Additional labs are focused on more complex ideas, and expect you to have the fundamental knowledge provided in the basics labs.  These can be done in any order.

- secrets-cfgmaps - Intro to dynamic application configuration with Kubernetes native elements configMap and secret.
- persistent-volumes - Intro to persistent volumes using Kubernetes hostPath provider
