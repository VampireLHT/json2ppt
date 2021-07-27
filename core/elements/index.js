
import { getCoordinate } from '../../util/location';
import Store from '../../common/store';

const store = Store.getInstance()
class Element {
    constructor(elementJson) {
        this.data = elementJson;
        this.getXY();
    }
    
    getXY() {
        const {x, y} = this.data;
        
        const layout = store.getProperty('layout');
        console.log(`x=${x}-----y=${y}`);
        console.log(`layout=${layout}`);
        getCoordinate();
    }
}

export default Element;