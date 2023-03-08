export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – GoBackup',
    };
  },
  primaryHue: {
    dark: 222,
    light: 222,
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  logo: (
    <>
      <img
        src="/logo/web-logo.png"
        className="dark:hidden"
        style={{ height: '28px' }}
        alt="GoBackup"
      />
      <img
        src="/logo/web-logo-dark.png"
        className="hidden dark:block"
        style={{ height: '28px' }}
        alt="GoBackup"
      />
    </>
  ),
  footer: false,
  docsRepositoryBase: 'https://github.com/gobackup/gobackup.github.io/blob',
  project: {
    link: 'https://github.com/gobackup/gobackup',
  },
};
