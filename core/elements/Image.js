class Image{
    constructor(elementJson, slide){
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