# Introduction

Nucleus comprises two distinct parts that can be used independently of each other. On one side we have the _Panel_, which contains the user + administration dashboard and an API and is supposed to be your primary entry point for administration purposes. On the other side is the _Daemon_ which manages all Nucleus-based Docker containers on a server and communicates with a panel.

Nucleus was built with user comfort and minimal administration effort in mind. As such, both the Panel and Daemon come in one installable package.

## Single Server
For small- to medium-scale servers you likely want both Panel and Daemon to run on the same server. This requires no configuration, although some setup is required to keep the processes running indefinitely.

## Multiple Servers
Depending on your use case you might want to run multiple Daemons simultaneously, each on their own server, and have a panel orchestrate these Daemons for you.

::: warning
It is currently not possible to have multiple Daemons or Panels run in parallel _on the same server_. If you have a specific use case that requires it, please let us know.
:::