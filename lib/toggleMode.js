export function changeMode() {
    document.documentElement.getAttribute('data-theme') === 'light'
        ? document.documentElement.setAttribute('data-theme', 'dark')
        : document.documentElement.setAttribute('data-theme', 'light');
}