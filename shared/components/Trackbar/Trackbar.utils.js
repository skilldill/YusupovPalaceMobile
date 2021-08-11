export const valueToPercents = (value, max) => {
    const percent = max / 100;
    const valuePercents = value / percent;

    return valuePercents;
}

export const percentsToPX = (valuePercent, width) => {
    const percent = width / 100;
    const length = valuePercent * percent;

    return length;
}