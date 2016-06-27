#!/bin/sh

if [ ! -L $HOME/.kde4/share/apps/RecentDocuments ] && [ -d $HOME/.kde4/share/apps/RecentDocuments ]; then
    rm -rf $HOME/.kde4/share/apps/RecentDocuments
fi

[ ! -d $HOME/.kde4/share/apps ] && mkdir -p $HOME/.kde4/share/apps
ln -sf $HOME/.local/share/RecentDocuments $HOME/.kde4/share/apps/RecentDocuments
