async function register ({
  registerSetting
}) {
  registerSetting({
    name: 'landing-page-markdown_selector',
    label: 'Landing Page Markdown Selector',
    type: 'input',
    private: true,
    default: '.margin-content'
  })

  registerSetting({
    name: 'landing-page-markdown_text',
    label: 'Landing Page Markdown Text',
    type: 'markdown-text',
    private: true
  })
  
  registerSetting({
    name: 'landing-page-markdown_classList',
    label: 'Landing Page Markdown ClassList',
    type: 'input',
    private: true,
    default: 'ui-message'
  })
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
