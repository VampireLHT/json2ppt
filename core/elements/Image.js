import Element from './index';
class Image extends Element{
    constructor(elementJson, slide){
        super(elementJson)
        this.elementJson = elementJson; 
        this.slide = slide;
        this.createContext();
    }

    createContext() {
        const { src } = this.elementJson;
        this.slide.addImage({path: src, x: this.X, y: this.Y, w: this.W, h: this.H});
    }
}

export default Image;