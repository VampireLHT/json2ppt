
import pptxgen from 'pptxgenjs';
import LAYOUT from '../const/layout';
import Page from './Page';

const path = require('path');

export default class Render {
    constructor(data) {
        this.data = data;
        this.pres = new pptxgen();
        this.setLayout();
        this.renderPage();
    }

    setLayout() {
        const { size } = this.data.size;
        const pageLayout = LAYOUT[size];
        this.pres.layout = pageLayout;
    }

    renderPage() {
        new Page(this.data, this.pres);
        this.pres.writeFile({ fileName: 'demo.pptx'});
    }
}