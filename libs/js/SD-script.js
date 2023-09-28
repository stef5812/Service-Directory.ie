//Functions run on loading of html

  // Function to open the "Guide" link in a new window in the middle of the screen
  function openGuideInNewWindow() {
    const url = 'https://cleandrabay.ie/libs/beara/';
    const windowWidth = 800; // Width of the new window
    const windowHeight = 600; // Height of the new window
    const windowFeatures = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${windowWidth},height=${windowHeight}`;

    // Calculate the center position of the screen
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowLeft = (screenWidth - windowWidth) / 2;
    const windowTop = (screenHeight - windowHeight) / 2;

    // Open the new window at the center position
    window.open(url, '_blank', `${windowFeatures},left=${windowLeft},top=${windowTop}`);
  }

  // Function to open the "SVC" link in a new window in the middle of the screen
  function openSVCInNewWindow() {
    const url = 'https://services-directory.ie/SampleMap/';
    const windowWidth = 800; // Width of the new window
    const windowHeight = 600; // Height of the new window
    const windowFeatures = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${windowWidth},height=${windowHeight}`;

    // Calculate the center position of the screen
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowLeft = (screenWidth - windowWidth) / 2;
    const windowTop = (screenHeight - windowHeight) / 2;

    // Open the new window at the center position
    window.open(url, '_blank', `${windowFeatures},left=${windowLeft},top=${windowTop}`);
  } 