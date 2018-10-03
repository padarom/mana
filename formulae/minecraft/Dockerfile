FROM openjdk:8u171-jre-alpine

LABEL author "Christopher Mühl"
LABEL nucleus.game "minecraft"

RUN apk add -U curl jq && \
    rm -rf /var/cache/apk/*

# Add healthcheck

RUN addgroup -g 1000 minecraft \
  && adduser -Ss /bin/false -u 1000 -G minecraft -h /home/minecraft minecraft \
  && mkdir -m 777 /data /mods /config /plugins \
  && chown minecraft:minecraft /data /config /mods /plugins /home/minecraft

COPY download.sh /home/minecraft

WORKDIR /home/minecraft
USER minecraft

RUN ./download.sh && echo 'eula=TRUE' > eula.txt

EXPOSE 25565
VOLUME ["/home/minecraft"]

ENTRYPOINT ["java", "-jar", "minecraft_server.jar"]
