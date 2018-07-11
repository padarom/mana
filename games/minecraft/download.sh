#!/bin/sh

# Determine if other version was requested.
VERSION="$(curl -s https://launchermeta.mojang.com/mc/game/version_manifest.json | jq -r .latest.release)"
curl -L -o minecraft_server.jar https://s3.amazonaws.com/Minecraft.Download/versions/$VERSION/minecraft_server.$VERSION.jar
