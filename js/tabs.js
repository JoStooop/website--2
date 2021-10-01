document.querySelectorAll('.service-list__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.service-item').forEach(function(tabContent) {
            tabContent.classList.remove('services-item--active')
        })

        document.querySelectorAll('.service-list__link').forEach(function(tabContent) {
            tabContent.classList.remove('service-list__link--active')
        })

        document.querySelector(`[data-path="${path}"]`).classList.add('service-list__link--active')
        document.querySelector(`[data-target="${path}"]`).classList.add('services-item--active')
    })
})