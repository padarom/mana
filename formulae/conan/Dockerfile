FROM ubuntu:xenial

RUN dpkg --add-architecture i386 && \
    apt-get update && \
    apt-get install -y \
        apt-transport-https \
        ca-certificates \
        lib32gcc1 \
        software-properties-common \
        wget \
        xvfb

RUN wget https://dl.winehq.org/wine-builds/Release.key && \
    apt-key add Release.key && \
    add-apt-repository 'https://dl.winehq.org/wine-builds/ubuntu' && \
    apt-get update && \
    apt-get install --no-install-recommends --assume-yes winehq-stable && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    rm Release.key

# RUN wget -P /usr/local/bin 'https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks' && \
#     chmod +x /usr/local/bin/winetricks

RUN useradd -ms /bin/bash conan

USER conan
WORKDIR /home/conan

RUN mkdir Steam
RUN wget https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz && tar zxvf steamcmd_linux.tar.gz -C Steam
RUN rm steamcmd_linux.tar.gz
RUN ["./Steam/steamcmd.sh", \
    "+@sSteamCmdForcePlatformType", "windows", \
    "+login", "anonymous", \
    "+force_install_dir", "../server", \
    "+app_update", "443030", "validate", \
    "+quit"]

# RUN xvfb_display=0
# RUN Xvfb :$xvfb_display -screen 0, 640x480x24:32 -nolisten tcp & export DISPLAY=:$xvfb_display
# ENV DISPLAY :0

EXPOSE 7777
EXPOSE 27015

VOLUME ["/home/conan/server"]

# run this command manually for now:
# docker run -it <image> /bin/bash
# WINEDEBUG=-all wine server/ConanSandboxServer.exe -nosteamclient -game -server -log
# ENTRYPOINT ["wine", "server/ConanSandboxServer.exe", "-nosteamclient", "-game", "-server", "-log"]
