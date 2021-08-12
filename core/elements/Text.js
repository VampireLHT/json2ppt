import Element from './index';
import { rgb2hex } from '../../util/color'
import FONT from '../../common/const/font'

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class Text extends Element{
    constructor(elementJson, slide){
        super(elementJson);
        const {text: textTpl} = elementJson;
        this.slide = slide;
        this.textTpl = textTpl;
        this.createContext();
    }

    createContext() {
        this.textFormat();
    }

    textFormat() {
        const dom = new JSDOM(`<!DOCTYPE html>${this.textTpl}`);
        const textDom = dom.window.document.querySelector('div');
        // const $ = require('jquery')(dom.window);
        const children = textDom.childNodes;
        if (children.length === 1) {
            const { nodeName } = children[0];
            if (nodeName === 'DIV') {
                // let { style: parentStyle } = children[0];
                // let { lineHeight } = parentStyle;
                let {innerHTML: text, style} = children[0].firstChild;
                let {fontSize, color, fontFamily} = style;
                // 将pixel换算成point 1px=0.75point
                fontSize =  fontSize ? parseInt(fontSize) * 0.75  : '22.5';
                let fontFace = fontFamily ? FONT[fontFamily] : 'Microsoft Yahei';
                console.log(`text=${text}----fontFace=${fontFace}`);
                color = color ? rgb2hex(color) : '000000';
                this.slide.addText(text, {
                    x: this.X, 
                    y: this.Y, 
                    w: this.W,
                    h: this.H,
                    fontSize,
                    color,
                    fontFace,
                    inset: 1/24
                });
            }
        } else {
            children.forEach((node)=>{
                // console.log(node);
                const { nodeName } = node;
                if (nodeName === 'DIV') {
                    const {innerHTML: text, style} = node.firstChild;
                    // console.log(text);
                    // console.log(style);
                }
            })
        }
        // console.log('11111')
    }
}

export default Text;