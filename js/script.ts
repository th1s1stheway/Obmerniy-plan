interface WallData {
    length: number; // в мм
    angle: number; // в градусах
  }
  
  const wallData: WallData[] = [
    { length: 1665, angle: 0 },
    { length: 947, angle: 90 },
    { length: 557, angle: 0 },
    { length: 1300, angle: 90 },
    { length: 2225, angle: 180 },
    { length: 2239, angle: 270 },
  ];
  
  function calculateCoordinates(wallData: WallData[]): [number, number][] {
    const coordinates: [number, number][] = [];
    let x = 0;
    let y = 0;
  
    for (const { length, angle } of wallData) {
      const lengthInCm = length / 10; // перевод из мм в см
      const radians = (angle * Math.PI) / 180; // перевод из градусов в радианы
  
      const dx = lengthInCm * Math.cos(angle);
      const dy = lengthInCm * Math.sin(angle);
  
      x += dx;
      y += dy;
  
      coordinates.push([x, y]);
    }
  
    return coordinates;
  }
  
  const coordinates = calculateCoordinates(wallData);
  console.log(coordinates);
  