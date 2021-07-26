import eleMap from './eleMap'

class Page {
    constructor(data, pres) {
        this.pres = pres;
        const { list } = data;
        this.renderPage(list);
    }

    renderPage(list) {
        list.forEach((page)=>{
            const bgData = page.children[0].background;
            let slide = this.pres.addSlide();
            this.renderBackground(slide, bgData);
            this.renderElement(page, slide);
        })
    }

    /**
     * 渲染背景
     * @param {*} slide 
     * @param {*} bgData 
     */
    renderBackground(slide, bgData) {
        if (bgData.type === 'color') {
            const { color } = bgData;
            slide.background = { fill: `${color}` };
        } else {
            const { url } = bgData;
            slide.background = { path: `${url}` };
        }
    }

    /**
     * 渲染元素
     */
    renderElement(page, slide) {
        const {children: elements} = page.children[0];
        elements.forEach((item)=>{
            const { type } = item;
            const eleConstructor = eleMap[type];
            if (eleConstructor) {
                const element = new eleConstructor(item, slide);
            }
        })
    }
}

export default Page;