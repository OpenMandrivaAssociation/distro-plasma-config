// Default Plasma layout for OpenMandriva
// Author: Tomasz Pawe³ Gajc (tpgxyz@gmail.com) 2013, 2014, 2015, 2016
// Licensed under GPL

print("Starting OpenMandriva Plasma configuration")
loadTemplate("org.openmandriva.plasma.desktop.defaultPanel")

for (var i = 0; i < screenCount; ++i) {
    var id = createActivity("Desktop", "org.kde.plasma.folder")
    var desktopsArray = desktopsForActivity(id);
    for( var j = 0; j < desktopsArray.length; j++) {
        desktopsArray[j].wallpaperPlugin = 'org.kde.image'
        desktopsArray[j].wallpaperMode = 'SingleImage'
        desktopsArray[j].currentConfigGroup = new Array("General")
        desktopsArray[j].writeConfig("pressToMove",true)
        desktopsArray[j].writeConfig("showToolbox",false)
        desktopsArray[j].writeConfig("toolTips", "true")
        desktopsArray[j].writeConfig("selectionMarkers",false)
        desktopsArray[j].writeConfig("sortMode","-1")
        desktopsArray[j].currentConfigGroup = new Array("Wallpaper", "org.kde.image", "General")
        desktopsArray[j].writeConfig("Image", "file:///usr/share/mdk/backgrounds/default.png")
        desktopsArray[j].writeConfig("FillMode","2")
    }

// Create more panels for other screens
    if (i > 0){
        var panel = new Panel
        panel.screen = i
        panel.location = 'bottom';
        panel.height = panels()[i].height = screenGeometry(0).height > 1024 ? 35 : 27;
        var tasks = panel.addWidget("tasks")
        tasks.writeConfig("showOnlyCurrentScreen", true)
    }
}

sleep(0.5)
// lock desktop
locked = false;
