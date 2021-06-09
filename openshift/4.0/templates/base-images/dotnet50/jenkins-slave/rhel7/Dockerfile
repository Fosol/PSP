FROM registry.redhat.io/openshift4/ose-jenkins-agent-base:latest

# Labels consumed by Red Hat build service
LABEL com.redhat.component="rh-dotnet50-jenkins-slave-container" \
    name="dotnet/dotnet-50-jenkins-slave-rhel7" \
    version="5.0" \
    architecture="x86_64" \
    release="1" \
    io.k8s.display-name="Jenkins Slave .NET 5" \
    io.k8s.description="The jenkins slave dotnet image has the dotnet tools on top of the jenkins slave base image." \
    io.openshift.tags="openshift,jenkins,slave,dotnet,dotnet50"

ARG NODE_MAJOR_VERSION=10
ARG NODE_VERSION=v10.13.0

# Don't download/extract docs for nuget packages
# Enable nodejs and dotnet scl
ENV DOTNET_CORE_VERSION=5.0 \
    BASH_ENV=/usr/local/bin/scl_enable \
    ENV=/usr/local/bin/scl_enable \
    PROMPT_COMMAND=". /usr/local/bin/scl_enable" \
    ENABLED_COLLECTIONS="rh-nodejs10 rh-dotnet50" \
    NUGET_XMLDOC_MODE=skip \
    PATH=$HOME/.local/bin/:$PATH \
    LC_ALL=en_US.UTF-8 \
    LANG=en_US.UTF-8

# Copy entitlements
COPY ./etc-pki-entitlement /etc/pki/entitlement

# Copy subscription manager configurations
COPY ./rhsm-conf /etc/rhsm
COPY ./rhsm-ca /etc/rhsm/ca

COPY contrib/bin/scl_enable /usr/local/bin/scl_enable

# Install
# RUN INSTALL_PKGS="rh-dotnet50 rh-nodejs10-npm" && \
#     yum install -y --setopt=tsflags=nodocs --disablerepo=\* \
#     --enablerepo=rhel-7-server-rpms,rhel-server-rhscl-7-rpms,rhel-7-server-dotnet-rpms \
#     $INSTALL_PKGS && \
#     rpm -V $INSTALL_PKGS && \
#     yum clean all -y && \
#     # yum cache files may still exist (and quite large in size)
#     rm -rf /var/cache/yum/*

RUN rm /etc/rhsm-host && \
    yum repolist > /dev/null && \
    yum install -y yum-utils && \
    # yum-config-manager --disable \* &> /dev/null && \
    # subscription-manager repos --list && \
    subscription-manager repos --enable=rhel-8-for-x86_64-appstream-rpms && \
    yum search dotnet && \
    yum search libunwind && \
    # yum-config-manager --enable rhel-server-rhscl-7-rpms && \
    # yum-config-manager --enable rhel-7-server-rpms && \
    # yum-config-manager --enable rhel-7-server-optional-rpms && \
    INSTALL_PKGS="dotnet-runtime-5.0.x86_64 dotnet-sdk-5.0" && \
    yum install -y --setopt=tsflags=nodocs $INSTALL_PKGS && \
    rpm -V $INSTALL_PKGS && \
    # Remove redhat-logos (httpd dependency) to keep image size smaller.
    # rpm -e --nodeps redhat-logos && \
    yum clean all -y && \
    rm -rf /var/cache/yum

# Trigger first time actions.
RUN scl enable rh-dotnet50 'dotnet help'

RUN chown -R 1001:0 $HOME && \
    chmod -R g+rw $HOME

EXPOSE 8080

USER 1001
