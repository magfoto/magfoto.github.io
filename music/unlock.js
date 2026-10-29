(()=>{document.querySelector('#unlock').addEventListener('submit', event => {
    event.preventDefault();

    const code = document.querySelector('.download_code').value;

    const url = `../../downloads/${code}/`;

    // TODO: Is using fetch() a problem in local-only viewing
    // (file://...)? Test/follow up (and potentially move to
    // classic xhr api if needed).

    function fail() {
        alert('The download code seems to be incorrect, please check for typos.');
    }

    function fallback() {
        fetch(url, { method: 'GET', mode: 'no-cors' })
            .then(response => {
                if (response.ok) {
                    window.location = url;
                } else {
                    fail();
                }
            })
            .catch(error => fail());
    }

    // First we attempt to verify the download page url (and thereby code)
    // through a HEAD request, which does not return the content
    // (i.e. lightens server load), but may not be supported by some
    // servers). If that fails for any reason we attempt our fallback check
    // which uses a GET request instead.
    fetch(url, { method: 'HEAD', mode: 'no-cors' })
        .then(response => {
            if (response.ok) {
                window.location = url;
            } else if (response.status === 404) {
                fail();
            } else {
                fallback();
            }
        })
        .catch(error => fallback());
});
})();