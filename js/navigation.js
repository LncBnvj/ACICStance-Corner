function initializeNavigation() {
  const navTabs = document.querySelector('.nav-tabs');
  if (navTabs) {
    navTabs.addEventListener('click', (event) => {
      const tab = event.target.closest('.nav-tab');
      if (tab && !tab.disabled) {
        const page = tab.dataset.page;
        if (page) {
          showPage(page, tab);
        }
      }
    });
  }
}
