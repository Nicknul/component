function formathHTML(language = 'korean') {
  let htmlData = {
    title1: '정호연',
    title2: 'JeongHoYeon',
    h1: '내 이름은',
    p: '정호연 입니다.',
  };

  let decision = () => {
    if (language === 'korean') {
      return htmlData.title1;
    }
    if (language === 'english') {
      return htmlData.title2;
    }
  };

  let html = `
  <html>
    <head>
      <title>${decision()}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `;
  return html;
}

console.log(formathHTML('english'));
