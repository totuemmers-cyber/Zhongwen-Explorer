// Text extraction for the syllabus PDF with pdf.js (bundled CJK CMaps; the system pdftotext
// cannot decode the document's SimSun/Adobe-GB1 fonts). Returns positioned text items per page.
const path = require('path');

async function loadPdf(file) {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const base = path.dirname(require.resolve('pdfjs-dist/package.json'));
  const document = await pdfjs.getDocument({
    url: file,
    cMapUrl: path.join(base, 'cmaps') + path.sep,
    cMapPacked: true,
    standardFontDataUrl: path.join(base, 'standard_fonts') + path.sep,
    verbosity: 0
  }).promise;
  return document;
}

// Items of one page: { str, x, y, width, size, rotated, font } with y growing downwards (top = 0).
async function pageItems(document, pageNumber) {
  const page = await document.getPage(pageNumber);
  const viewport = page.getViewport({ scale: 1 });
  const content = await page.getTextContent();
  return content.items
    .filter(item => item.str && item.str.trim())
    .map(item => {
      const [a, b, c, d] = item.transform;
      return {
        str: item.str, x: item.transform[4], y: viewport.height - item.transform[5], width: item.width,
        size: Math.hypot(a, b), rotated: Math.abs(b) > 0.01 || Math.abs(c) > 0.01, font: item.fontName
      };
    });
}

// Groups items into visual lines (same baseline within a tolerance), each sorted left to right.
function lines(items, tolerance = 2.5) {
  const sorted = items.slice().sort((a, b) => a.y - b.y || a.x - b.x);
  const result = [];
  for (const item of sorted) {
    const line = result.find(l => Math.abs(l.y - item.y) <= tolerance);
    if (line) line.items.push(item);
    else result.push({ y: item.y, items: [item] });
  }
  result.forEach(line => line.items.sort((a, b) => a.x - b.x));
  return result.sort((a, b) => a.y - b.y);
}

module.exports = { loadPdf, pageItems, lines };
