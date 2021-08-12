function zero_fill_hex(num, digits) {
    let s = num.toString(16);
    while (s.length < digits)
        s = '0' + s;
    return s;
}

// rgb转16进制颜色
export function rgb2hex(rgb) {
    if (rgb.charAt(0) == '#') return rgb.substr(1,6);
    const ds = rgb.split(/\D+/);
    const decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
    return zero_fill_hex(decimal, 6);
}