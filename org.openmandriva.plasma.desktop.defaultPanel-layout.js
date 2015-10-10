// Default Plasma panel for OpenMandriva
// Author: Tomasz Pawe³ Gajc (tpgxyz@gmail.com)
// Licensed under GPL

print("Loading OpenMandriva Plasma panel configuration");
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
removeOldPanels();

// start new panel
var panel = new Panel;
if (panelIds.length == 1) {
    // we are the only panel, so set the location for the user
    panel.location = 'bottom';
}

// let's calculate desired panel height based on screen geometry
var screenrect = screenGeometry(0);
panel.height = screenrect.height/20;
panel.alignment = "left";
panel.hiding = "none";

// by default is used kickerdash as a menu
launcher = panel.addWidget("org.kde.plasma.kickerdash");
launcher.globalShortcut = "Alt+F1";
launcher.currentConfigGroup = ["General"];
launcher.writeConfig("customButtonImage", "file:///usr/share/icons/openmandriva.svg");
launcher.writeConfig("favoriteApps", "firefox.desktop,org.kde.konversation.desktop,openmandriva-drakconf.desktop,systemsettings.desktop");
launcher.writeConfig("showRecentContacts", "true");
launcher.writeConfig("useCustomButtonImage", "true");
launcher.reloadConfig();

tasks = panel.addWidget("org.kde.plasma.taskmanager");
tasks.currentConfigGroup = ["General"];
tasks.writeConfig("forceStripes","true");
tasks.writeConfig("middleClickAction", "Close");
tasks.writeConfig("onlyGroupWhenFull","true");
tasks.writeConfig("groupingStrategy","1");
tasks.writeConfig("highlightWindows","false");
tasks.writeConfig("maxStripes","2");
tasks.writeConfig("showOnlyCurrentDesktop","true");
tasks.writeConfig("showOnlyCurrentScreen","false");
tasks.writeConfig("showOnlyMinimized","false");
tasks.writeConfig("showToolTips","true");
tasks.writeConfig("sortingStrategy","2");

pager = panel.addWidget("org.kde.plasma.pager");
pager.currentConfigGroup = ["General"];
pager.writeConfig("showWindowIcons","true");
pager.writeConfig("displayedText", "Number");

systray = panel.addWidget("org.kde.plasma.systemtray");
systray.currentConfigGroup = ["General"];
systray.writeConfig("communicationsShow", "true");
systray.writeConfig("applicationStatusShown","true");
systray.writeConfig("ShowCommunications","true");
systray.writeConfig("systemServicesShown","true");
systray.writeConfig("hardwareControlShown","true");
systray.writeConfig("miscellaneousShown","true");
systray.writeConfig("extraItems", "org.kde.plasma.devicenotifier,org.kde.plasma.notifications,org.kde.plasma.bluetooth,org.kde.plasma.battery,org.kde.plasma.volume,org.kde.plasma.networkmanagement,org.kde.muonnotifier,org.kde.plasma.devicenotifier");
systray.writeConfig("hiddenItems", "hp-systray,python3.4m");
systray.writeConfig("knownItems", "org.kde.plasma.notifications,org.kde.plasma.bluetooth,org.kde.plasma.clipboard,org.kde.plasma.battery,org.kde.plasma.volume,org.kde.plasma.networkmanagement,org.kde.plasma.mediacontroller,org.kde.muonnotifier,org.kde.plasma.devicenotifier");

clock = panel.addWidget("org.kde.plasma.digitalclock");
clock.currentConfigGroup = ["General"];
clock.writeConfig("showDate","true");
clock.writeConfig("dateFormat", "isoDate");
clock.writeConfig("use24hFormat", "2");

clock.reloadConfig();
panel.addWidget("org.kde.plasma.trash");

sleep(0.5);

panel.reloadConfig()
// if set to true it is not possible to remove panel :)
panel.locked = false;
