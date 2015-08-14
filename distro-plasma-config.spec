Summary:	Plasma desktop configuration
Name:		distro-plasma-config
Version:	0.1
Release:	0.1
License:	GPLv2+
Group:		Graphical desktop/KDE
Url:		%{disturl}
Source0:	kdeglobals
Source1:	kwinrc
BuildRequires:	cmake(ECM)
Requires:	breeze
BuildArch:	noarch
Conflicts:	distro-kde4-config-OpenMandriva < 2015.0
Conflicts:	distro-kde4-config-OpenMandriva-common < 2015.0

%description
Plasma desktop configuration.

%prep

%build

%install
mkdir -p %{buildroot}%{_kde5_sysconfdir}/xdg/
install -m 0644 %{SOURCE0} %{buildroot}%{_kde5_sysconfdir}/xdg/kdeglobals
install -m 0644 %{SOURCE1} %{buildroot}%{_kde5_sysconfdir}/xdg/kwinrc

%files
%{_kde5_sysconfdir}/xdg/kdeglobals
%{_kde5_sysconfdir}/xdg/kwinrc
