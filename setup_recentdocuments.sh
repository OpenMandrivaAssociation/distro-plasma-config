#!/bin/sh

if [ ! -L "$HOME"/.kde4/share/apps/RecentDocuments ] && [ -d "$HOME"/.kde4/share/apps/RecentDocuments ]; then
    rm -rf "$HOME"/.kde4/share/apps/RecentDocuments
fi

[ ! -d "$HOME"/.kde4/share/apps ] && mkdir -p "$HOME"/.kde4/share/apps

if [ ! -L "$HOME"/.kde4/share/apps/RecentDocuments ] || [ "$(readlink $HOME/.kde4/share/apps/RecentDocuments)" = "$HOME/.local/share/RecentDocuments" ]; then
    rm -rf "$HOME"/.kde4/share/apps/RecentDocuments
    ln -sf "$HOME"/.local/share/RecentDocuments "$HOME"/.kde4/share/apps/RecentDocuments
fi
