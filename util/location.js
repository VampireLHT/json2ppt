
import Store from '../common/store'

const store = Store.getInstance();

/**
 * 获取组件坐标
 */
export function getCoordinate(size, x, y) {
    const pptSize = store.getProperty('pptSize');
    const [pptWidth, pptHeight] = pptSize;
    const {width, height} = size;
    const X = pptWidth * x / width;
    const Y = pptHeight * y / height;
    return {X, Y};
}

/**
 * 获取组件宽高
 */
export function getSize(size, w, h) {
    const pptSize = store.getProperty('pptSize');
    const [pptWidth, pptHeight] = pptSize;
    const {width, height} = size;
    const W = pptWidth * w / width;
    const H = pptHeight * h / height;
    return {W, H};
}
