FROM ubuntu
MAINTAINER "Rick van Lieshout <info@rickvanlieshout.com>"

ENV DEBIAN_FRONTEND noninteractive

# Install dependencies
RUN \
    apt-get update && \
    apt-get -qq update && \
    apt-get install -y nodejs npm && \
    apt-get install -y openssh-client && \
    apt-get install -y git

# fix node commands
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

# Create (and switch to) app directory
ENV HOME=/app
RUN mkdir $HOME
VOLUME ["/app"]
WORKDIR $HOME

# Command to run after container start
CMD npm install && npm start
