const AppConfig: any = {
  name: 'SEED',
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
  },
  logging: {
    DEBUG: {
      LEVEL_1: false,
      LEVEL_2: false,
      LEVEL_3: false,
      LEVEL_4: true
    }
  }
};

export { AppConfig };
