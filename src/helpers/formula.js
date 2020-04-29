//spu = stitches per unit
//rpu = rows per unit

const calculateResults = ({ m1, m2, m3, d1, d2 }, { spu, rpu }) => {
  console.log(m1, m2, m3, d1, d2, rpu, spu);
  const s1 = convertMeasurements(m1, spu);
  const s2 = convertMeasurements(m2, spu);
  const s3 = convertMeasurements(m3, spu);
  const r1 = convertMeasurements(d1, rpu);
  const r2 = convertMeasurements(d2, rpu);
  const dif1 = calculateDifference(s1, s2);
  const dif2 = calculateDifference(s2, s3);

  return {
    s1,
    s2,
    s3,
    r1,
    r2,
    dif1,
    dif2,
    res1: calculateTransition(r1, dif1, spu, rpu),
    res2: calculateTransition(r2, dif2, spu, rpu),
  };
};

//returns measurements in stitches or rows
const convertMeasurements = (x, y) => {
  return Math.ceil(x * y);
};

//calculate the difference between measurements
const calculateDifference = (x, y) => {
  return x - y;
};

//calculates each transition of the formula
const calculateTransition = (r, dif, spu, rpu) => {
  console.log(r, dif, spu);
  let direction = dif < 0 ? 'Increase' : 'Decrease';
  let result = (Math.abs(dif) * spu) / rpu / r;
  let interval = Math.round(r / Math.abs(dif));
  console.log(result, interval, direction);

  if (result <= 1) {
    return `${direction} by 1 stitch every ${interval} rows for a total of ${r} rows`;
  } else {
    return `${direction} by ${Math.ceil(
      result
    )} stitch every ${interval} rows for a total of ${r} rows`;
  }
};

export default calculateResults;

// 145 stitches
// 185 stitches
// 42.5 rows
// 40 st diff * 5 = 200
// 200 / 5 = 40
// 40 / 43 = .93
