const tg = Telegram.WebApp; tg.expand();
const n=v=>parseFloat((v||'').replace(',','.'));
calc.onclick=()=>{
 const a=n(area.value);
 const k=(d,t,p)=>{let kgm=d*t*0.0001;let kg=kgm*a;return {kg,kgm,c:kg*p}};
 const r1=k(n(d1.value),n(t1.value),n(p1.value));
 const r2=k(n(d2.value),n(t2.value),n(p2.value));
 res.textContent=
`Краска 1: ${r1.c.toFixed(2)} €
Краска 2: ${r2.c.toFixed(2)} €
Разница: ${(r1.c-r2.c).toFixed(2)} €`;
 res.classList.remove('hidden');
 offer.classList.remove('hidden');
};
