var filters = document.querySelectorAll('.setFilter')
var works = document.querySelectorAll('.work')

filters.forEach(function(f) {
    f.addEventListener('click', function(event) {
        applyFilter(event.target.textContent.toLowerCase(), works)
    })
})

function applyFilter(filter, selectors) {
    selectors.forEach(function(s) {
        s.classList.remove('disabled')
        if (!s.classList.contains(filter)) {
            s.classList.add('disabled')
        }
    })
}

applyFilter('illustration', works)