
import { getCoordinate, getSize} from '../../util/location';
import Store from '../../common/store';

const store = Store.getInstance();
class Element {
    constructor(elementJson) {
        this.data = elementJson;
        this.size = store.getProperty('size');
        this.getXY();
        this.getWH();
        
    }
    
    getXY() {
        const {x, y} = this.data;
        const {X, Y} = getCoordinate(this.size, x, y);
        this.X = X;
        this.Y = Y;
    }
    
    getWH() {
        const {width, height} = this.data;
        const {W, H} = getSize(this.size, width, height);
        this.W = W;
        this.H = H;
    }

}

export default Element;