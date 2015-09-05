// Default Plasma layout for OpenMandriva
// Author: Tomasz Pawe³ Gajc (tpgxyz@gmail.com)
// Licensed under GPL

print("Starting OpenMandriva Plasma configuration");
loadTemplate("org.openmandriva.plasma.desktop.defaultPanel");

for (var i = 0; i < screenCount; ++i) {
    var id = createActivity("Desktop", "org.kde.plasma.folder");
    var desktopsArray = desktopsForActivity(id);
    print(desktopsArray.length);
    for( var j = 0; j < desktopsArray.length; j++) {
        desktopsArray[j].wallpaperPlugin = 'org.kde.image';
        desktopsArray[j].currentConfigGroup = ["Wallpaper", desktopsArray[j].wallpaperPlugin, "General"];
        desktopsArray[j].writeConfig("Image", "file:///usr/share/mdk/backgrounds/default.png");
        desktopsArray[j].currentConfigGroup = ["General"];
        desktopsArray[j].writeConfig("showToolbox", "false");
        desktopsArray[j].writeConfig("toolTips", "true");
        desktopsArray[j].reloadConfig();
    }
}

sleep(0.5);
// lock desktop
locked = true;