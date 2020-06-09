function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:router.navigation-end',
    handler: async ({ path }) => {
      console.log(path)
      const c = await peertubeHelpers.getSettings(
        'landing-page-markdown_selector',
        'landing-page-markdown_text',
        'landing-page-markdown_classList',
      )
      
      if (c['landing-page-markdown_selector'] && c['landing-page-markdown_text']) {
        const a = document.createElement('div');
        let cls = 'landing-page-markdown'
        if (c['landing-page-markdown_classList']) {
          cls = `${cls} ${c['landing-page-markdown_classList']}`;
        }
        a.setAttribute('class', cls);
        const html = await peertubeHelpers.markdownRenderer.markdownRenderer(c['landing-page-markdown_text'])
        a.innerHTML = html;
        setInterval(async function(){
          if (document.querySelector(`${c['landing-page-markdown_selector']} .landing-page-markdown`) === null) {
            const p = document.querySelector(c['landing-page-markdown_selector']);
            if (p) {
              p.appendChild(a);
            }
          }
        }, 1)
      }
    }
  })
}

export {
  register
}
