# Nucleus

Nucleus is a game server management tool designed for humans.

## Game Support
::: tip
These are the games we support out of the box. Nucleus was created with extendibility in mind, so you can easily [add support for other games](/developer/custom-game.md) without any programming knowledge.
:::

- Minecraft
  - Vanilla
  - Spigot
  - BungeeCord
- Counter-Strike: Source
- Counter-Strike: Global Offensive
- Garry's Mod
- ArmA 3
- Conan Exiles
- Factorio
- San Andreas Multiplayer

## Host Support
If your server is meant for personal use only and doesn't need 24/7 uptime, you might want to host it on a cloud computing platform. These are typically billed by the hour of runtime, so the server can remain offline while unused. Nucleus supports remote-controlling (starting / stopping / monitoring) servers hosted on the following platforms:
- Amazon Web Services
- Google Cloud Platform
- Microsoft Azure

::: warning
This only works if the Nucleus panel is hosted on a server separate to the one that hosts your games. This can typically be achieved by running a cheap server 24/7 or even running Nucleus locally.
:::