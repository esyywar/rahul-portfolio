/* Preload images */

export function preloadImage(images, sources) {
  for (let i = 0; i < sources.length; i++) {
    images[i] = new Image()
    images[i].src = sources[i]
  }
}
