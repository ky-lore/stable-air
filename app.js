// sticky header shadow
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement;
    const open=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!open)item.classList.add('open');
  });
});

// reveal on scroll
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// mobile off-canvas menu
(function(){
  const toggle=document.querySelector('.nav-toggle');
  const menu=document.querySelector('.mobile-menu');
  const backdrop=document.querySelector('.mm-backdrop');
  const closeBtn=document.querySelector('.mm-close');
  if(!toggle||!menu) return;
  const open=()=>{menu.classList.add('open');backdrop&&backdrop.classList.add('open');document.body.classList.add('mm-open');};
  const close=()=>{menu.classList.remove('open');backdrop&&backdrop.classList.remove('open');document.body.classList.remove('mm-open');};
  toggle.addEventListener('click',open);
  closeBtn&&closeBtn.addEventListener('click',close);
  backdrop&&backdrop.addEventListener('click',close);
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
})();

// count-up stat numbers
(function(){
  const els=document.querySelectorAll('[data-count]');
  if(!els.length) return;
  const run=(el)=>{
    const target=parseFloat(el.dataset.count);
    const suf=el.dataset.suffix||'';
    const dur=1400, t0=performance.now();
    const step=(t)=>{
      const p=Math.min(1,(t-t0)/dur);
      const e=1-Math.pow(1-p,3);
      const val=target%1?(target*e).toFixed(1):Math.round(target*e);
      el.textContent=val.toLocaleString()+suf;
      if(p<1)requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){run(e.target);io.unobserve(e.target);}});},{threshold:.4});
  els.forEach(el=>io.observe(el));
})();

// scroll-depth parallax (truck bands, etc.)
(function(){
  const items=[...document.querySelectorAll('[data-parallax]')];
  if(!items.length) return;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  let ticking=false;
  const update=()=>{
    const vh=innerHeight;
    items.forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.bottom<-200||r.top>vh+200)return;
      const speed=parseFloat(el.dataset.parallax)||0.18;
      const mid=r.top+r.height/2-vh/2;
      el.style.transform=`translate3d(0,${(-mid*speed).toFixed(1)}px,0)`;
    });
    ticking=false;
  };
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});
  addEventListener('resize',update); update();
})();

// services vertical accordion (one open at a time)
(function(){
  const rows=[...document.querySelectorAll('.svc-row')];
  if(!rows.length) return;
  const setH=p=>{p.style.maxHeight=p.scrollHeight+'px';};
  rows.forEach(row=>{
    const head=row.querySelector('.svc-head');
    const panel=row.querySelector('.svc-panel');
    head.addEventListener('click',()=>{
      const isOpen=row.classList.contains('open');
      rows.forEach(r=>{r.classList.remove('open');r.querySelector('.svc-head').setAttribute('aria-expanded','false');r.querySelector('.svc-panel').style.maxHeight=null;});
      if(!isOpen){row.classList.add('open');head.setAttribute('aria-expanded','true');setH(panel);}
    });
  });
  const first=document.querySelector('.svc-row.open .svc-panel');
  if(first){const go=()=>setH(first); (document.readyState==='complete')?go():addEventListener('load',go);}
  addEventListener('resize',()=>{const o=document.querySelector('.svc-row.open .svc-panel'); if(o)setH(o);});
})();
