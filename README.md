## Mana
Mana is a gameserver management tool designed for self-hosted small to medium-scale servers.

### Requirements
- node.js > 7
- Docker
- redis

### Installation
```
npm install -g mana-tool
yarn global add mana-tool
```
Once mana is installed you can run it by typing `mana`.

##### Process Manager
When starting `mana` manually it will remain in the foreground and terminate when your session ends. To get around this, as well as to automatically start `mana` on system boot, we recommend using a process manager such as [pm2](http://pm2.keymetrics.io/). This allows you to start the manager and keep it running with `pm2 start mana`.
