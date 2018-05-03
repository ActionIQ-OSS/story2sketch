import {
  Page,
  SymbolMaster,
  nodeTreeToSketchGroup
} from "@brainly/html-sketchapp";

const getNodeName = node =>
  node.id || node.className || node.nodeName.toLowerCase();

export const getSymbol = ({
  name = "symbol",
  x = 0,
  y = 0,
  querySelector = "#root"
} = {}) => {
  let nodes;

  if (querySelector === "#root") {
    nodes = document.querySelector(querySelector).firstChild;
  } else {
    nodes = document.querySelector(querySelector);
  }
  
  // START HACK FOR FONT-AWESOME SUPPORT
  // TODO: Generalize for all :before, :after elements
  const css = '.before-reset::before, .after-reset::after { display: none !important; }';
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

  const allElements = document.getElementsByClassName('fa');

  for (let i = 0; i < allElements.length; i++) {
    const elementBeforeStyles = window.getComputedStyle(allElements[i], ':before');
    const elementAfterStyles = window.getComputedStyle(allElements[i], ':after');
    const elementBeforeContent = elementBeforeStyles.content;
    const elementAfterContent = elementAfterStyles.content;

    if (elementBeforeContent && elementBeforeContent != "none") {
      const virtualBefore = document.createElement('span');

      virtualBefore.setAttribute('style', elementBeforeStyles.cssText);
      virtualBefore.innerHTML = elementBeforeStyles.content.split('"').join('');
      allElements[i].className += ' before-reset';
      allElements[i].prepend(virtualBefore);
    }

    if (elementAfterContent && elementAfterContent != "none") {
      const virtualAfter = document.createElement('span');

      virtualAfter.setAttribute('style', elementAfterStyles.cssText);
      virtualAfter.innerHTML = elementAfterStyles.content.split('"').join('');
      allElements[i].className += ' after-reset';
      allElements[i].appendChild(virtualAfter);
    }
  }
  // END HACK FOR FONT-AWESOME SUPPORT

  const layer = nodeTreeToSketchGroup(nodes, {
    getGroupName: getNodeName,
    getRectangleName: getNodeName
  });

  const symbol = new SymbolMaster({ x, y });

  symbol.setName(name);
  symbol.addLayer(layer);

  return symbol.toJSON();
};

export const getPage = ({ title, width, height }) => {
  const page = new Page({
    width,
    height
  });

  page.setName(title);

  return page.toJSON();
};
