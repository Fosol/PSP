FROM registry.redhat.io/openshift4/ose-jenkins-agent-base:latest

ARG NODE_MAJOR_VERSION=10
ARG NODE_VERSION=v10.13.0

ENV SUMMARY="Jenkins slave with stock nodejs ${NODE_VERSION}"  \
    DESCRIPTION="Jenkins pipeline slave with stock nodejs ${NODE_VERSION}"

LABEL summary="$SUMMARY" \
    description="$DESCRIPTION" \
    io.k8s.description="$DESCRIPTION" \
    io.k8s.display-name="jenkins-pipeline-nodejs${NODE_MAJOR_VERSION}" \
    io.openshift.expose-services="8080:http" \
    io.openshift.tags="builder,jenkins-jnlp-nodejs,jenkins-jnlp-nodejs${NODE_MAJOR_VERSION},jenkins-jnlp" \
    release="1"

ENV PATH=$HOME/.local/bin/:$PATH \
    LC_ALL=en_US.UTF-8 \
    LANG=en_US.UTF-8

# Copy entitlements
COPY ./etc-pki-entitlement /etc/pki/entitlement

# Copy subscription manager configurations
COPY ./rhsm-conf /etc/rhsm
COPY ./rhsm-ca /etc/rhsm/ca

# We need to call 2 (!) yum commands before being able to enable repositories properly
# This is a workaround for https://bugzilla.redhat.com/show_bug.cgi?id=1479388
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

EXPOSE 8080

USER 1001
