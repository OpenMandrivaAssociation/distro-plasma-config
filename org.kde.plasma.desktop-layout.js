// Default Plasma layout for OpenMandriva
// Author: Tomasz Pawe³ Gajc (tpgxyz@gmail.com)
// Licensed under GPL

loadTemplate("org.openmandriva.plasma.desktop.defaultPanel")

for (var i = 0; i < screenCount; ++i) {
    var id = createActivity("org.kde.plasma.folder")
    var desktopsArray = desktopsForActivity(id);
    print(desktopsArray.length);
    for( var j = 0; j < desktopsArray.length; j++) {
        desktopsArray[j].wallpaperPlugin = 'org.kde.image';
        desktopsArray[j].currentConfigGroup = ["Wallpaper", desktopsArray[j].wallpaperPlugin, "General"];
        desktopsArray[j].writeConfig("Image", "/usr/share/mdk/backgrounds/default.png");
    }
}
