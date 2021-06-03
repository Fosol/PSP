# Jenkins Slave Agent for .NET 5.0

It is a very complicated process to build an image for a .NET 5.0 Jenkins Slave Agent.

You must use OCP3 to build the base image because OCP4 does not currently allow pulling the dotnet images from RedHat.

Login to OCP3.

## RedHat Developer Service Account

You will need to enable pulling images from RedHat with a developer service account.

// TODO: add instructions to add service account

## Create Build Configuration

Create a parameter file `params.env`.

```conf
NAME=jenkins-slave-rhel7-net5
SOURCE_REPOSITORY_URL=https://github.com/bcgov/PSP.git
SOURCE_REPOSITORY_REF=dev
SOURCE_CONTEXT_DIR=openshift/4.0/templates/base-images/dotnet50/jenkins-slave/rhel7
BUILDER_IMAGE_NAME=registry.redhat.io/openshift3/jenkins-slave-base-rhel7
SLAVE_IMAGE_TAG=latest
DOCKERFILE_PATH=Dockerfile.ocp3
NAMESPACE=aifsul-tools
```

```bash
cd openshift/4.0/templates/base-images/dotnet50/jenkins-slave
oc process -f jenkins-slave-ocp3.yaml --param-file=params.env | oc apply -f -
```

Build the image.

## Copy Image from OCP3 to OCP4

Once an image is built in OCP3 you will need to download it to your local machine and then upload it to OCP4.

```bash
docker login docker-registry.pathfinder.gov.bc.ca -u $(oc whoami) -p $(oc whoami -t)
docker pull docker-registry.pathfinder.gov.bc.ca/aifsul-tools/jenkins-slave-rhel7-net5:latest
docker tag docker-registry.pathfinder.gov.bc.ca/aifsul-tools/jenkins-slave-rhel7-net5:latest image-registry.apps.silver.devops.gov.bc.ca/3cd915-tools/jenkins-slave-rhel7-net5:latest
```

Login to OCP4.

```bash
docker login image-registry.apps.silver.devops.gov.bc.ca -u $(oc whoami) -p $(oc whoami -t)
docker push image-registry.apps.silver.devops.gov.bc.ca/3cd915-tools/jenkins-slave-rhel7-net5:latest
```
