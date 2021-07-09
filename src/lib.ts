let helmetHasBeenCalledInThisEventCycle = false;

function helmet(frag: DocumentFragment) {
  if (typeof window === 'undefined') {
    // non-browser env
  } else {
    // browser env
    const head = document.head;
    const newHead = frag.firstChild as HTMLHeadElement;
    if (head) {
      // TODO do I need "!"
      const title = head.querySelector('title');
      const newTitle = newHead.querySelector('title');
      if (title && newTitle) {
        if (!newTitle.isEqualNode(title)) {
          title.replaceWith(newTitle);
        }
      }

      const base = head.querySelector('base');
      const metaArray = head.querySelectorAll('meta');
      const linkArray = head.querySelectorAll('link');
      const scriptArray = head.querySelectorAll('script');
      const noscriptArray = head.querySelectorAll('noscript');
    } else {
      document.prepend(frag);
    }
  }
  if (!helmetHasBeenCalledInThisEventCycle) {
    setTimeout(() => {
      helmetHasBeenCalledInThisEventCycle = false;
    });
  }
  helmetHasBeenCalledInThisEventCycle = true;
}
function helmetRenderStatic(frag: DocumentFragment) {}
