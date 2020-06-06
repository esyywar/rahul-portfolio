/* Checking window screen width */
export function isMobileScrWidth() {
    return (window.screen.width < 1024 || window.innerWidth < 1024)
}

/* Check if mobile by screen orientation property */
export function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};