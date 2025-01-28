
(() => {
    window.addEventListener('load', function() {
        const CONFIRM_COOKIE_KEY = 'cookie-consent'
        const CONFIRM_COOKIE_VALUE = 'true'
        const hasConfirmCookie = localStorage.getItem(CONFIRM_COOKIE_KEY)
        const cookieComponentEl = document.querySelector('.cookie-consent')
        const btnClose = document.querySelector('.cc-btn-close')
        const btnConfirm = document.querySelector('.cc-btn-confirm')

        if (hasConfirmCookie && hasConfirmCookie === CONFIRM_COOKIE_VALUE) {
            cookieComponentEl.remove()
        } else {
            cookieComponentEl.classList.add('show');
        }

        btnClose.addEventListener('click', function() {
            cookieComponentEl.remove();
        })
        btnConfirm.addEventListener('click', function() {
            localStorage.setItem(CONFIRM_COOKIE_KEY, CONFIRM_COOKIE_VALUE)
            btnClose.click()
        })
    })
})()
