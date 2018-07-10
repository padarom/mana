FROM openjdk:8u171-jre-alpine

LABEL author "Christopher Mühl"
LABEL version "1.0"

RUN apk add -U \
        openssl \
        imagemagick \
        lsof \
        su-exec \
        bash \
        curl iputils wget \
        git \
        jq \
        mysql-client \
        python python-dev py2-pip && \
      rm -rf /var/cache/apk/*

# Add healthcheck

RUN addgroup -g 1000 minecraft \
  && adduser -Ss /bin/false -u 1000 -G minecraft -h /home/minecraft minecraft \
  && mkdir -m 777 /data /mods /config /plugins \
  && chown minecraft:minecraft /data /config /mods /plugins /home/minecraft

EXPOSE 25565 25575
