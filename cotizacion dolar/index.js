const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
let fecha = new Date();

function traerApi(){
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(res => res.json())
    .then(data => {
        console.log(data[0].casa.compra);
    })
}
traerApi()

async function oficial(){
  const Respuesta = await fetch(url);
  const Data = await Respuesta.json();
  document.getElementById('variaOf').textContent = Data[0].casa.variacion;
  document.getElementById('Coficial').textContent = Data[0].casa.compra;
  document.getElementById('Voficial').textContent = Data[0].casa.venta;
  document.getElementById('act1').textContent = fecha.toDateString()
}
oficial()

async function blue(){
    const Respuesta = await fetch(url);
    const Data = await Respuesta.json();
    document.getElementById('variaBlu').textContent = Data[1].casa.variacion;
    document.getElementById('Cblu').textContent = Data[1].casa.compra;
    document.getElementById('Vblu').textContent = Data[1].casa.venta;
    document.getElementById('act2').textContent = fecha.toDateString()
  }
  blue()

  async function liqui(){
    const Respuesta = await fetch(url);
    const Data = await Respuesta.json();
    document.getElementById('variaLiq').textContent = Data[3].casa.variacion;
    document.getElementById('Cliq').textContent = Data[3].casa.compra;
    document.getElementById('Vliq').textContent = Data[3].casa.venta;
    document.getElementById('act3').textContent = fecha.toDateString()
  }
  liqui()

  async function promedio(){
    const Respuesta = await fetch(url);
    const Data = await Respuesta.json();
    document.getElementById('variaPro').textContent = Data[7].casa.variacion;
    document.getElementById('Cpro').textContent = Data[7].casa.compra;
    document.getElementById('Vpro').textContent = Data[7].casa.venta;
    document.getElementById('act4').textContent = fecha.toDateString()
  }
  promedio()

  async function bolsa(){
    const Respuesta = await fetch(url);
    const Data = await Respuesta.json();
    document.getElementById('variaBol').textContent = Data[4].casa.variacion;
    document.getElementById('Cbol').textContent = Data[4].casa.compra;
    document.getElementById('Vbol').textContent = Data[4].casa.venta;
    document.getElementById('act5').textContent = fecha.toDateString()
  }
  bolsa() 

  async function turista(){
    const Respuesta = await fetch(url);
    const Data = await Respuesta.json();
    document.getElementById('variaTur').textContent = Data[6].casa.variacion;
    document.getElementById('Vtur').textContent = Data[6].casa.venta;
    document.getElementById('act6').textContent = fecha.toDateString()
  }
  turista()