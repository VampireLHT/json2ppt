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
        this.slide.addImage({path: src, x: '', y: '', w: '', h: ''});
    }
}

export default Image;