const observer = new MutationObserver((mutationsList, observer) => {
        if (window.settings && window.settings.platformSettings) {
            observer.disconnect();
    
            window.settings.platformSettings.inspector = true;
            console.log('Inspector enabled');
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    