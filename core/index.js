
import pptxgen from 'pptxgenjs';
import LAYOUT from '../common/const/layout';
import Page from './Page';
import Store from '../common/store';

const path = require('path');

export default class Render {
    constructor(data) {
        this.data = data;
        this.store = Store.getInstance();
        this.pres = new pptxgen();
        this.setLayout();
        this.renderPage();
    }

    setLayout() {
        const { size } = this.data.size;
        const {name: pageLayout, value: pptSize} = LAYOUT[size];
        this.pres.layout = pageLayout;
        this.store.setProperty('size', this.data.size);
        this.store.setProperty('pptSize', pptSize);
    }

    renderPage() {
        new Page(this.data, this.pres);
        this.pres.writeFile({ fileName: 'demo.pptx'});
    }
}