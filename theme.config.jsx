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
  head: (
    <>
      <link
        rel="icon"
        type="image/png"
        href="https://user-images.githubusercontent.com/5518/205909959-12b92929-4ac5-4bb5-9111-6f9a3ed76cf6.png"
      ></link>
      <meta
        name="description"
        content="GoBackup is a simple tool for backup your databases, files to cloud storages."
      ></meta>
    </>
  ),
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
