(function () {
  const translationBanner = document.createElement('div');
  translationBanner.id = 'translation-notice-banner';
  translationBanner.className = 'translation-banner';

  let relativePath = location.pathname;
  relativePath = relativePath.replace(/^.*?wolf_rpg_editor_ENG/, "");
  if (!relativePath.startsWith("/")) {
    relativePath = "/" + relativePath;
  }
  const originalUrl = "https://smokingwolf.github.io/tool_wolf_rpg_editor" + relativePath;

  translationBanner.innerHTML = `
    <div class="translation-banner-container">
      <p class="translation-banner-content">
        <span class="translation-banner-text">
          This page is a translation of content created by <strong>SmokingWOLF</strong>, with the author's permission to translate and publish.
        </span>
        <a href="${originalUrl}" class="translation-banner-link" target="_blank" rel="noopener noreferrer">View original</a>
      </p>
    </div>
  `;

  const menuFrame = document.querySelector('#menu-frame');
  const parent = menuFrame ? document.querySelector('#content') : document.body;

  // Create a padded wrapper
  const wrapper = document.createElement('div');
  wrapper.style.paddingLeft = '20px';
  wrapper.style.paddingRight = '30px';

  // Move all existing page content into the wrapper
  while (parent.firstChild) {
  wrapper.appendChild(parent.firstChild);
  }

  // Put wrapper back into page
  parent.appendChild(wrapper);

  // Add the translation notice AFTER the wrapper
  parent.appendChild(translationBanner);

  parent.style.paddingBottom = '0px';
  parent.style.marginBottom = '0px';

  const minMargin = 40;
  translationBanner.style.marginTop = minMargin + 'px';

  // Push the banner to the bottom of the viewport if the page content is short
  const bannerRect = translationBanner.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  if (bannerRect.bottom < viewportHeight) {
    const diff = viewportHeight - bannerRect.bottom;
    translationBanner.style.marginTop = (minMargin + diff) + 'px';
  }
})();
