// Default Plasma panel for OpenMandriva
// Author: Tomasz Paweł Gajc (tpgxyz@gmail.com)
// Licensed under GPL

// helper function for removing panels
function remove()
{
    for (i in panelIds) {
	panelById(panelIds[1]).remove()
	}
}

// remove already existing old panels
function removeOldPanels()
{
    for (i in panelIds) {
	p = panelById(panelIds[i]);
	if (typeof p === "undefined") {
	    print("Error: Couldn't find first panel");
	    remove()
	}
	else {
	    panelById(panelIds[i]).remove()
	}
    }
}

// remove already existing other pnales
removeOldPanels()

// start new panel
var panel = new Panel;
if (panelIds.length == 1) {
    // we are the only panel, so set the location for the user
    panel.location = 'bottom';
}

// let's calculate desired panel height based on screen geometry
var screenrect = screenGeometry(0); 
panel.height = screenrect.height/20;
panel.alignment = "left"
panel.hiding = "none"

// by default is used homerun as a menu
// launcher = panel.addWidget("homerunlauncher");// default fullscreen homerun
launcher = panel.addWidget("org.kde.plasma.kickerdash");
launcher.globalShortcut = "Alt+F1"
launcher.writeConfig("icon", "/usr/share/icons/openmandriva.svg");
launcher.reloadConfig();

tasks = panel.addWidget("org.kde.plasma.taskmanager");
tasks.writeConfig("forceStripes","true")
tasks.writeConfig("onlyGroupWhenFull","true")
tasks.writeConfig("groupingStrategy","1")
tasks.writeConfig("highlightWindows","false")
tasks.writeConfig("maxStripes","2")
tasks.writeConfig("showOnlyCurrentDesktop","true")
tasks.writeConfig("showOnlyCurrentScreen","false")
tasks.writeConfig("showOnlyMinimized","false")
tasks.writeConfig("showToolTips","true")
tasks.writeConfig("sortingStrategy","2")

pager = panel.addWidget("org.kde.plasma.virtualdesktops");
pager.writeConfig("showWindowIcons","true");

systray = panel.addWidget("org.kde.plasma.systemtray");
systray.writeConfig("communicationsShow", "true")
systray.writeConfig("applicationStatusShown","true")
systray.writeConfig("ShowCommunications","true")
systray.writeConfig("systemServicesShown","true")
systray.writeConfig("hardwareControlShown","true")
systray.writeConfig("miscellaneousShown","true")
systray.writeConfig("shownItems", "org.kde.plasma.notifications,org.kde.plasma.networkmanagement,org.kde.plasma.printmanager,Konversation")
systray.writeConfig("hiddenItems","hp-systray,Klipper")
i = 0;
if (hasBattery) {
    systray.currentConfigGroup = new Array("Applets", ++i);
    systray.writeConfig("plugin", "org.kde.plasma.powermanagement");
}
systray.currentConfigGroup = new Array("Applets", ++i);
systray.writeConfig("plugin", "org.kde.plasma.notifications");
systray.currentConfigGroup = new Array("Applets", ++i);
systray.writeConfig("plugin", "org.kde.plasma.networkmanagement");
systray.currentConfigGroup = new Array("Applets", ++i);
systray.writeConfig("plugin", "org.kde.plasma.printmanager");

clock = panel.addWidget("org.kde.plasma.digitalclock");
clock.writeConfig("showDate","true");
clock.writeConfig("showLocalTimezone","true");
clock.reloadConfig();
panel.addWidget("org.kde.plasma.trash");

sleep(1);

panel.reloadConfig()
panel.locked = true;
