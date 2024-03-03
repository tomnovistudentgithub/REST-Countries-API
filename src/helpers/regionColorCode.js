function regionColorCode(region) {
    switch (region) {
        case 'Africa':
            return 'rgba(30,96,194,0.67)';
        case 'Americas':
            return 'rgb(28,103,23)';
        case 'Asia':
            return 'rgb(255, 0, 0)';
        case 'Europe':
            return 'rgb(222,255,7)';
        case 'Oceania':
            return 'rgb(128, 0, 128)';
        default:
            return 'rgb(0, 0, 0)';
    }
}

export default regionColorCode;
