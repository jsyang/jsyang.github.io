function updateVisibilityForSections() {
    Array.from(document.querySelectorAll('section'))
        .forEach(
            s => s.style.display = s.querySelectorAll('a:not([data-hidden=true])').length === 0 ?  'none' : 'block'
        );
}

function filterByType(type) {
    // Remove all entries that are not of a certain type
    Array.from(document.querySelectorAll('section a'))
        .forEach(a => {
            const href = a.href.split(location.host)[1];

            if(href.indexOf(type) !== 1) {
                a.setAttribute('data-hidden', 'true');
            } else {
                a.removeAttribute('data-hidden')
            }
        });

    updateVisibilityForSections();
}

function resetFilter() {
    Array.from(document.querySelectorAll('section a'))
        .forEach(a => a.removeAttribute('data-hidden'));

    updateVisibilityForSections();
}


addEventListener('DOMContentLoaded', function () {
    document.getElementById('post-type').addEventListener('change', function (e) {
        const {value} = e.target;

        resetFilter();

        if (value !== 'all') {
            filterByType(value);
        }
    });
});

