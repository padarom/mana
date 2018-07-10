FROM ubuntu:xenial

RUN dpkg --add-architecture i386
RUN apt-get update
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:wine/wine-builds
RUN apt-get update
RUN apt-get install --no-install-recommends --assume-yes winehq-staging wget ca-certificates lib32gcc1 xvfb cabextract
RUN useradd -ms /bin/bash conan

RUN wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
RUN chmod +x winetricks
RUN mv winetricks /usr/local/bin

#USER conan
#WORKDIR /home/conan

#RUN xvfb_display=0
#RUN Xvfb :$xvfb_display -screen 0, 640x480x24:32 -nolisten tcp & export DISPLAY=:$xvfb_display
#RUN winetricks -q vcrun2015
#RUN wget https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz && tar zxvf steamcmd_linux.tar.gz
#RUN ["./steamcmd.sh", "+login", "anonymous", "+force_install_dir", "server", "+@sSteamCmdForcePlatformType", "windows", "+app_update", "443030", "validate", "+quit"]

# -nosteamclient -game -server -log

ENV DISPLAY :0
