Summary:	Plasma desktop configuration
Name:		distro-plasma-config
Version:	0.1
Release:	0.20
License:	GPLv2+
Group:		Graphical desktop/KDE
Url:		%{disturl}
Source0:	kcmdisplayrc
Source1:	kcmfonts
Source2:	kcminputrc
Source3:	kdeglobals
Source4:	kscreenlockerrc
Source5:	ksplashrc
Source6:	kwinrc
Source7:	metadata.desktop
Source8:	org.kde.plasma.desktop-layout.js
Source9:	org.openmandriva.plasma.desktop.defaultPanel-layout.js
Source10:	plasmarc
Source11:	startupconfig
Source12:	startupconfigfiles
Source13:	startupconfigkeys
Source14:	plasma-firstsetup.sh
Source15:	baloofilerc
Source16:	kcm-about-distrorc
Source17:	ksmserverrc
Source18:	kiorc
Source19:	dolphinrc
# (tpg) disable debug in Qt5 apps
Source20:	qtlogging.ini

BuildRequires:	cmake(ECM)
Requires:	breeze
Requires:	breeze-kde4
Requires:	breeze-gtk
Requires:	breeze-icons
Provides:	kde4-config-file
Provides:	distro-kde4-config-OpenMandriva = 2015.0
Provides:	distro-kde4-config-OpenMandriva-common = 2015.0
Obsoletes:	distro-kde4-config-OpenMandriva < 2015.0
Obsoletes:	distro-kde4-config-OpenMandriva-common < 2015.0
Provides:	mandriva-kde4-config = 2014.0
Obsoletes:	mandriva-kde4-config < 2014.0
BuildArch:	noarch

%description
Plasma desktop configuration.

%prep

%build

%install
mkdir -p %{buildroot}%{_kde5_sysconfdir}/xdg
mkdir -p %{buildroot}%{_kde5_sysconfdir}/xdg/QtProject
mkdir -p %{buildroot}%{_kde5_sysconfdir}/xdg/plasma-workspace/env
mkdir -p %{buildroot}%{_kde5_datadir}/kservices5
mkdir -p %{buildroot}%{_kde5_datadir}/plasma/shells/org.kde.plasma.desktop/contents
mkdir -p %{buildroot}%{_kde5_datadir}/plasma/layout-templates/org.openmandriva.plasma.desktop.defaultPanel/contents
install -m 0644 %{SOURCE0} %{buildroot}%{_kde5_sysconfdir}/xdg/kcmdisplayrc
install -m 0644 %{SOURCE1} %{buildroot}%{_kde5_sysconfdir}/xdg/kcmfonts
install -m 0644 %{SOURCE2} %{buildroot}%{_kde5_sysconfdir}/xdg/kcminputrc
install -m 0644 %{SOURCE3} %{buildroot}%{_kde5_sysconfdir}/xdg/kdeglobals
install -m 0644 %{SOURCE4} %{buildroot}%{_kde5_sysconfdir}/xdg/kscreenlockerrc
install -m 0644 %{SOURCE5} %{buildroot}%{_kde5_sysconfdir}/xdg/ksplashrc
install -m 0644 %{SOURCE6} %{buildroot}%{_kde5_sysconfdir}/xdg/kwinrc
install -m 0644 %{SOURCE7} %{buildroot}%{_kde5_datadir}/plasma/layout-templates/org.openmandriva.plasma.desktop.defaultPanel/metadata.desktop
install -m 0644 %{SOURCE7} %{buildroot}%{_kde5_datadir}/kservices5/plasma-layout-template-org.openmandriva.plasma.desktop.defaultPanel.desktop
install -m 0644 %{SOURCE8} %{buildroot}%{_kde5_datadir}/plasma/shells/org.kde.plasma.desktop/contents/layout.js
install -m 0644 %{SOURCE9} %{buildroot}%{_kde5_datadir}/plasma/layout-templates/org.openmandriva.plasma.desktop.defaultPanel/contents/layout.js
install -m 0644 %{SOURCE10} %{buildroot}%{_kde5_sysconfdir}/xdg/plasmarc
install -m 0644 %{SOURCE11} %{buildroot}%{_kde5_sysconfdir}/xdg/startupconfig
install -m 0644 %{SOURCE12} %{buildroot}%{_kde5_sysconfdir}/xdg/startupconfigfiles
install -m 0644 %{SOURCE13} %{buildroot}%{_kde5_sysconfdir}/xdg/startupconfigkeys
install -m 0755 %{SOURCE14} %{buildroot}%{_kde5_sysconfdir}/xdg/plasma-workspace/env/plasma-firstsetup.sh
install -m 0644 %{SOURCE15} %{buildroot}%{_kde5_sysconfdir}/xdg/baloofilerc
install -m 0644 %{SOURCE16} %{buildroot}%{_kde5_sysconfdir}/xdg/kcm-about-distrorc
install -m 0644 %{SOURCE17} %{buildroot}%{_kde5_sysconfdir}/xdg/ksmserverrc
install -m 0644 %{SOURCE18} %{buildroot}%{_kde5_sysconfdir}/xdg/kiorc
install -m 0644 %{SOURCE19} %{buildroot}%{_kde5_sysconfdir}/xdg/dolphinrc
install -m 0644 %{SOURCE20} %{buildroot}%{_kde5_sysconfdir}/xdg/QtProject/qtlogging.ini

%files
%{_kde5_sysconfdir}/xdg/*
%{_kde5_datadir}/kservices5/plasma-layout-template-org.openmandriva.plasma.desktop.defaultPanel.desktop
%{_kde5_datadir}/plasma/layout-templates/org.openmandriva.plasma.desktop.defaultPanel/metadata.desktop
%{_kde5_datadir}/plasma/layout-templates/org.openmandriva.plasma.desktop.defaultPanel/contents/layout.js
%{_kde5_datadir}/plasma/shells/org.kde.plasma.desktop/contents/layout.js
