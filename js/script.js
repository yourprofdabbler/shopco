const hamburger = document.getElementById('hamburger')
const navBar = document.getElementById('navbar')
const searchIcon = document.getElementById('search-icon')
const searchForm = document.querySelector('.search-form')

if (hamburger && navBar && searchIcon && searchForm) {
    const closeMenu = () => {
        hamburger.classList.remove('hamburger_active')
        navBar.classList.remove('navbar_active')
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation()
        hamburger.classList.toggle('hamburger_active')
        navBar.classList.toggle('navbar_active')
    })

    document.addEventListener('click', (e) => {
        const isMenuOpen = navBar.classList.contains('navbar_active')
        const clickedOutsideMenu = !navBar.contains(e.target) && !hamburger.contains(e.target)

        if (isMenuOpen && clickedOutsideMenu) {
            closeMenu()
        }
    })

    navBar.addEventListener('click', (e) => {
        e.stopPropagation()
    })

    const closeSearch = () => {
        searchForm.classList.remove('search-form_active')
    }

    searchIcon.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
        searchForm.classList.toggle('search-form_active')
    })

    document.addEventListener('click', (e) => {
        const isSearchOpen = searchForm.classList.contains('search-form_active')
        const clickedOutsideSearch = !searchForm.contains(e.target) && !searchIcon.contains(e.target)

        if (isSearchOpen && clickedOutsideSearch) {
            closeSearch()
        }
    })

    searchForm.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}