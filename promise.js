const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const hitung = (data, result) =>{
  let total =  0;
  data.forEach(film => {
    if(film.hasil == result){
      total++;
    }
    
  });
  return total;
}

const promiseOutput = (result) =>{
  return new Promise((jum) =>{
    promiseTheaterIXX().then((IXX)=>{
      let theaterIXX = hitung(IXX, result);
      promiseTheaterVGC().then((VGC)=>{
        let theaterVGC = hitung(VGC, result);
        jum(theaterIXX + theaterVGC)
      })
    })
  });
};

module.exports = {
  promiseOutput,
};
