const options = {
    bottom: '40px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '1s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    // backgroundColor: '#fff',  // default: '#fff'
    backgroundColor: 'dark',  // default: '#fff'
    // backgroundimage: url(/imgs/bgbg1.jpg),
    
    zindex:1,
    buttonColorDark: '#000',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true, // default: true

  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();