(()=>{const BROWSER_JS_T = {
    nothingFoundForXxx: query => 'Nothing found for \'{query}\''.replace('{query}',query),
    showingFeaturedItems: 'Showing featured items',
    showingXxxResultsForXxx: (count,query) => 'Showing {count} results for \'{query}\''.replace('{count}',count).replace('{query}',query),
    xxxAndOthers: (xxx,othersLinkAttributes) => '{xxx} and <a {others_link_attributes}>others</a>'.replace('{xxx}',xxx).replace('{others_link_attributes}',othersLinkAttributes)
};
const ARTISTS = [];
const CATALOGS = [{imagePath:'homepage/artist_e73JtdRWXwQ_fixed_300x133.jpg',pagePrefix:'',title:'magfoto Music'}];
const RELEASES = [{artists:[],coverPath:'alente/release_0cFl8eEjV_0_160.jpg',multitrack:true,pagePrefix:'alente/',title:'Alente',tracks:[{artists:[],pagePrefix:'alente-alente/',title:'alente'}]},{artists:[],coverPath:'ambient-assembly/release_JJsq89ZM06E_160.jpg',multitrack:true,pagePrefix:'ambient-assembly/',title:'Ambient Assembly',tracks:[{artists:[],pagePrefix:'ambient-assembly-ambient-assembly/',title:'Ambient Assembly'}]},{artists:[],coverPath:'codi-journal/release_E1lmUAPsnUU_160.jpg',multitrack:true,pagePrefix:'codi-journal/',title:'CODI Journal',tracks:[{artists:[],pagePrefix:'codi-journal-jupiter-sine-generator/',title:'Jupiter Sine Generator'},{artists:[],pagePrefix:'codi-journal-melted-lick/',title:'Melted Lick'}]},{artists:[],coverPath:'energies-lp/release_QOs2ZevNDRA_160.jpg',multitrack:true,pagePrefix:'energies-lp/',title:'Energies LP',tracks:[{artists:[],pagePrefix:'energies-lp-4x4/',title:'4x4'},{artists:[],pagePrefix:'energies-lp-energy/',title:'Energy'},{artists:[],pagePrefix:'energies-lp-lighthouse/',title:'Lighthouse'},{artists:[],pagePrefix:'energies-lp-submerged/',title:'Submerged'},{artists:[],pagePrefix:'energies-lp-bella-bells-revival/',title:'bella-bells-revival'},{artists:[],pagePrefix:'energies-lp-la-prochaine/',title:'la-prochaine'},{artists:[],pagePrefix:'energies-lp-loulou-et-funguy/',title:'loulou-et-funguy'},{artists:[],pagePrefix:'energies-lp-polyvocal/',title:'polyvocal'}]},{artists:[],coverPath:'the-last-metropolis-serenade/release_QPFePPovqxU_160.jpg',multitrack:true,pagePrefix:'the-last-metropolis-serenade/',title:'Last Metropolis Serenade',tracks:[{artists:[],pagePrefix:'the-last-metropolis-serenade-the-last-metropolis-post-lighthouse-serenade/',title:'The Last Metropolis (Post-Lighthouse Serenade)'}]},{artists:[],coverPath:'un-nouveau-chapitre/release_nIedPWj-u9o_160.jpg',multitrack:true,pagePrefix:'un-nouveau-chapitre/',title:'Un Nouveau Chapitre',tracks:[{artists:[],pagePrefix:'un-nouveau-chapitre-0000a/',title:'0000A'},{artists:[],pagePrefix:'un-nouveau-chapitre-eterna1/',title:'ETERNA1_'},{artists:[],pagePrefix:'un-nouveau-chapitre-op-z-passers/',title:'OP-Z-PASSERS'},{artists:[],pagePrefix:'un-nouveau-chapitre-organisme/',title:'Organisme'}]}];
const browser = document.querySelector('#browser');
const browseButtonFooter = document.querySelector('footer button.browse');
const browseButtonHeader = document.querySelector('header button.browse');

const browseResults = browser.querySelector('#results');
const closeButton = browser.querySelector('button');
const searchField = browser.querySelector('input');
const statusField = browser.querySelector('[role="status"]');

const indexSuffix = window.location.pathname.endsWith('index.html') ? 'index.html' : '';
const rootPrefix = browser.dataset.rootPrefix;

function renderArtist(artistObject) {
    if (artistObject.externalPage) {
        return `<a href="${artistObject.externalPage}" target="_blank">${artistObject.name}</a>`;
    } else if (artistObject.url) {
        return `<a href="${rootPrefix}${artistObject.url}${indexSuffix}">${artistObject.name}</a>`;
    } else {
        return artistObject.name;
    }
}

function truncateArtistList(artistNames, othersLinkAttributes)  {
    const MAX_CHARS = 40;

    const artistObjects = artistNames
        .map(artistName => {
            for (const artist of ARTISTS) {
                if (artist.name === artistName || artist.aliases?.includes(artistName)) {
                    return artist;
                }
            }

            return { name: artistName };
        });

    if (artistObjects.length > 2) {
        const nameChars = artistObjects.reduce((sum, artist) => sum + artist.name.length, 0);
        const separatorChars = (artistObjects.length - 1) * 2; // All separating ", " between the artists

        if (nameChars + separatorChars > MAX_CHARS) {
            // Here we have more than two artists, we have a char limit, and
            // we cannot fit all artists within the limit, thus we truncate
            // the list. We show at least one artist, then as many additional
            // ones as fit, e.g. "[artist],[artist] and others"
            let charsUsed = 0;

            const artistObjectsTruncated = artistObjects
                .filter(artist => {
                    if (charsUsed === 0) {
                        charsUsed += artist.name.length;
                        return true;
                    }

                    charsUsed += artist.name.length;
                    return charsUsed < MAX_CHARS;
                });

            const rArtists = artistObjectsTruncated.map(renderArtist).join(", ");

            return BROWSER_JS_T.xxxAndOthers(rArtists, othersLinkAttributes);
        }
    }

    return artistObjects.map(renderArtist).join(", ");
}

function appendArtist(artist) {
    let imageArtist;
    if (artist.imagePath) {
        imageArtist = document.createElement('img');
        imageArtist.classList.add('crop');
        imageArtist.src = rootPrefix + artist.imagePath;
    } else {
        imageArtist = document.createElement('span');
        imageArtist.classList.add('placeholder');
    }

    const aText = document.createElement('a');

    if (artist.externalPage) {
        aText.href = artist.externalPage;
        aText.target = '_blank';
    } else {
        aText.href = rootPrefix + artist.pagePrefix + indexSuffix;
    }

    const aImage = aText.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imageArtist);

    aText.dataset.featured = 'true';
    aText.textContent = artist.name;

    const details = document.createElement('div');
    details.appendChild(aText);

    const row = document.createElement('div');

    row.dataset.browse = '';

    row.appendChild(aImage);
    row.appendChild(details);

    browseResults.appendChild(row);
}

function appendCatalog(catalog) {
    let imgCatalog;
    if (catalog.imagePath) {
        imgCatalog = document.createElement('img');
        imgCatalog.classList.add('crop');
        imgCatalog.src = rootPrefix + catalog.imagePath;
    } else {
        imgCatalog = document.createElement('span');
        imgCatalog.classList.add('placeholder');
    }

    const aText = document.createElement('a');

    if (catalog.externalPage) {
        aText.href = catalog.externalPage;
        aText.target = '_blank';
    } else {
        aText.href = rootPrefix + catalog.pagePrefix + indexSuffix;
    }

    const aImage = aText.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imgCatalog);

    aText.dataset.featured = 'true';
    aText.textContent = catalog.title;

    const details = document.createElement('div');
    details.appendChild(aText);

    const row = document.createElement('div');

    row.dataset.browse = '';

    row.appendChild(aImage);
    row.appendChild(details);

    browseResults.appendChild(row);
}

function appendMultitrack(multitrack) {
    let imgMultitrack;
    if (multitrack.coverPath) {
        imgMultitrack = document.createElement('img');
        imgMultitrack.src = rootPrefix + multitrack.coverPath;
    } else {
        imgMultitrack = document.createElement('span');
        imgMultitrack.classList.add('placeholder');
    }

    const aTitle = document.createElement('a');

    if (multitrack.externalPage) {
        aTitle.href = multitrack.externalPage;
        aTitle.target = '_blank';
    } else {
        aTitle.href = rootPrefix + multitrack.pagePrefix + indexSuffix;
    }

    const aImage = aTitle.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imgMultitrack);

    aTitle.dataset.featured = 'true';
    aTitle.textContent = multitrack.title;

    const details = document.createElement('div');
    details.appendChild(aTitle);

    if (multitrack.artists) {
        let othersLinkAttributes;

        if (multitrack.externalPage) {
            othersLinkAttributes = `href="${multitrack.externalPage}" target="_blank"`;
        } else {
            othersLinkAttributes = `href="${rootPrefix + multitrack.pagePrefix + indexSuffix}"`;
        }

        const artists = document.createElement('div');
        artists.classList.add('artists');
        artists.innerHTML = truncateArtistList(multitrack.artists, othersLinkAttributes);
        details.appendChild(artists);
    }

    const row = document.createElement('div');

    row.dataset.browse = '';

    row.appendChild(aImage);
    row.appendChild(details);

    browseResults.appendChild(row);

    for (const track of multitrack.tracks) {
        appendTrack(track, imgMultitrack);
    }
}

function appendTrack(track, imgMultitrack) {
    let imgTrack;
    if (track.coverPath) {
        imgTrack = document.createElement('img');
        imgTrack.src = rootPrefix + track.coverPath;
    } else if (imgMultitrack) {
        imgTrack = imgMultitrack.cloneNode(true);
    } else {
        imgTrack = document.createElement('span');
        imgTrack.classList.add('placeholder');
    }

    const aTitle = document.createElement('a');

    if (track.externalPage) {
        aTitle.href = track.externalPage;
        aTitle.target = '_blank';
    } else {
        aTitle.href = rootPrefix + track.pagePrefix + indexSuffix;
    }

    const aImage = aTitle.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imgTrack);

    aTitle.dataset.featured = 'true';
    aTitle.textContent = track.title;

    const details = document.createElement('div');

    if (track.number) {
        const number = document.createElement('span');
        number.classList.add('number');
        number.textContent = track.number;

        details.appendChild(number);
    }

    details.appendChild(aTitle);

    if (track.artists) {
        let othersLinkAttributes;

        if (track.externalPage) {
            othersLinkAttributes = `href="${track.externalPage}" target="_blank"`;
        } else {
            othersLinkAttributes = `href="${rootPrefix + track.pagePrefix + indexSuffix}"`;
        }

        const artists = document.createElement('div');
        artists.classList.add('artists');
        artists.innerHTML = truncateArtistList(track.artists, othersLinkAttributes);
        details.appendChild(artists);
    }

    const row = document.createElement('div');
    row.appendChild(aImage);
    row.appendChild(details);

    if (imgMultitrack) {
        row.style.setProperty('display', 'none');
    } else {
        row.dataset.browse = '';
    }

    browseResults.appendChild(row);
}

for (const catalog of CATALOGS) {
    appendCatalog(catalog);
}

for (const artist of ARTISTS) {
    appendArtist(artist);
}

for (const release of RELEASES) {
    if (release.multitrack) {
        appendMultitrack(release);
    } else {
        appendTrack(release);
    }
}

function hideBrowser() {
    const browseButton = browseButtonFooter.ariaExpanded === 'true'
        ? browseButtonFooter
        : browseButtonHeader;

    browser.classList.remove('active');
    browseButton.setAttribute('aria-expanded', 'false');
    searchField.value = '';
    statusField.removeAttribute('aria-label');
    statusField.textContent = '';

    for (const element of browseResults.children) {
        const display = element.dataset.browse !== undefined;
        element.style.setProperty('display', display ? null : 'none');
    }

    browseButton.focus();
}

function showBrowser(browseButton) {
    browser.classList.add('active');
    browseButton.setAttribute('aria-expanded', 'true');
    searchField.focus();
    statusField.setAttribute('aria-label', BROWSER_JS_T.showingFeaturedItems);
    statusField.textContent = '';
}

// When the browse/search modal is open and focus moves outside the page
// entirely (e.g. to the addressbar) but then re-enters the page, we need
// to make sure that it returns back to the browse/search modal (instead of
// to an obscured element in the main body)
document.body.addEventListener('focusin', event => {
    if (browser.classList.contains('active') && !browser.contains(event.target)) {
        searchField.focus();
    }
});

browser.addEventListener('focusout', event => {
    if (browser.classList.contains('active') && event.relatedTarget && !browser.contains(event.relatedTarget)) {
        hideBrowser();
    }
});

browser.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        event.preventDefault();
        hideBrowser();
    }
});

browseButtonFooter.addEventListener('click', () => showBrowser(browseButtonFooter));
browseButtonHeader.addEventListener('click', () => showBrowser(browseButtonHeader));

closeButton.addEventListener('click', hideBrowser);

searchField.addEventListener('input', () => {
    const query = searchField.value.trim();

    if (query.length) {
        const regexp = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        let shown = 0;

        for (const element of browseResults.children) {
            const title = element.querySelector('[data-featured]').textContent;
            const display = regexp.test(title);
            element.style.setProperty('display', display ? null : 'none');
            if (display) { shown += 1; }
        }

        if (shown === 0) {
            statusField.removeAttribute('aria-label');
            statusField.textContent = BROWSER_JS_T.nothingFoundForXxx(query);
        } else {
            statusField.setAttribute('aria-label', BROWSER_JS_T.showingXxxResultsForXxx(shown, query));
            statusField.textContent = '';
        }
    } else {
        for (const element of browseResults.children) {
            const display = element.dataset.browse !== undefined;
            element.style.setProperty('display', display ? null : 'none');
        }

        statusField.setAttribute('aria-label', BROWSER_JS_T.showingFeaturedItems);
        statusField.textContent = '';
    }
});
})();