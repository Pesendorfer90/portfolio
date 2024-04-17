export function scrollToElement(elementId: string) {
  let element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


export function isElementVisible(arrowTrigger: any): boolean {
  let element = arrowTrigger.nativeElement;
  let rect = element.getBoundingClientRect();
  let windowHeight = window.innerHeight || document.documentElement.clientHeight;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;
  console.log('läuft');
  

  let isVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth

    return isVisible;
}

export function   updateVisibility(arrowTrigger: any, visible: any) {
  visible.emit(isElementVisible(arrowTrigger));
}