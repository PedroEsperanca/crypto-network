const AppConfig: any = {
  name: 'SEED',
  title: 'Start Coding',
  description: 'A seed project to enable fast bootstrap of Angular projects',
  image: '/assets/img/angular-logo.png',
  logo: 'assets/img/angular-logo.png',
  links: {
    blog: '',
    status: ''
  },
  settings: {
    organizations: true,
    oauth: true,
    multipleEmailsAndPhones: true,
    usePhotoUpload: true,
    login: {
      username: false,
      validateEmails: false,
      validatePhones: false,
      strategies: {
        form: true,
        facebook: true,
        google: true,
        twitter: false,
        linkedin: false,
        github: true,
        bitbucket: true
      }
    },
    public: {
      profiles: true,
      organizations: true
    }
  },
  i18n: {
    defaultLanguage: {
      code: 'en',
      title: 'English'
    },
    availableLanguages: [
      {
        code: 'en',
        title: 'English'
      },
      {
        code: 'fr',
        title: 'French'
      },
      {
        code: 'es',
        title: 'Spanish'
      },
      {
        code: 'bg',
        title: 'Bulgarian'
      },
      {
        code: 'ru',
        title: 'Russian'
      }
    ]
  }
};

export { AppConfig };
