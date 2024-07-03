var wallData = [
    { length: 1665, angle: 0 },
    { length: 947, angle: 90 },
    { length: 557, angle: 0 },
    { length: 1300, angle: 90 },
    { length: 2225, angle: 180 },
    { length: 2239, angle: 270 },
];
function calculateCoordinates(wallData) {
    var coordinates = [];
    var x = 0;
    var y = 0;
    for (var _i = 0, wallData_1 = wallData; _i < wallData_1.length; _i++) {
        var _a = wallData_1[_i], length_1 = _a.length, angle = _a.angle;
        var lengthInCm = length_1 / 10; // перевод из мм в см
        var radians = (angle * Math.PI) / 180; // перевод из градусов в радианы
        var dx = lengthInCm * Math.cos(radians);
        var dy = lengthInCm * Math.sin(radians);
        x += dx;
        y += dy;
        coordinates.push([x, y]);
    }
    return coordinates;
}
var coordinates = calculateCoordinates(wallData);
console.log(coordinates);

