
import { H as Hls } from './hls-vendor-dru42stk.js';
const qs=(s,r=document)=>r.querySelector(s);
const qsa=(s,r=document)=>Array.from(r.querySelectorAll(s));
const mobile=qs('.mobile-toggle');
const panel=qs('.mobile-panel');
if(mobile&&panel){mobile.addEventListener('click',()=>panel.classList.toggle('open'));}
qsa('[data-hero-slider]').forEach(slider=>{
  const slides=qsa('.hero-slide',slider);
  const dots=qsa('[data-hero-dot]',slider);
  let i=0;
  const show=n=>{if(!slides.length)return;i=(n+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle('active',k===i));dots.forEach((d,k)=>d.classList.toggle('active',k===i));};
  const next=()=>show(i+1);
  const prev=()=>show(i-1);
  const nb=qs('[data-hero-next]',slider), pb=qs('[data-hero-prev]',slider);
  if(nb)nb.addEventListener('click',next);
  if(pb)pb.addEventListener('click',prev);
  dots.forEach(d=>d.addEventListener('click',()=>show(Number(d.dataset.heroDot)||0)));
  if(slides.length>1)setInterval(next,5000);
});
qsa('.player-box').forEach(box=>{
  const video=qs('video',box);
  const btn=qs('.player-start',box);
  if(!video)return;
  const source=(qs('source',video)||{}).src || video.currentSrc || video.src;
  let hls;
  if(source){
    if(Hls.isSupported()){
      hls=new Hls({enableWorker:true,lowLatencyMode:true});
      hls.loadSource(source);
      hls.attachMedia(video);
    }else if(video.canPlayType('application/vnd.apple.mpegurl')){
      video.src=source;
    }
  }
  const play=()=>{video.play().then(()=>box.classList.add('playing')).catch(()=>{});};
  const pause=()=>box.classList.remove('playing');
  if(btn)btn.addEventListener('click',play);
  video.addEventListener('click',()=>{video.paused?play():video.pause();});
  video.addEventListener('play',()=>box.classList.add('playing'));
  video.addEventListener('pause',pause);
});
const localInput=qs('[data-local-filter]');
if(localInput){
  const cards=qsa('.local-grid .movie-card');
  localInput.addEventListener('input',()=>{
    const q=localInput.value.trim().toLowerCase();
    cards.forEach(c=>{const text=(c.dataset.title+' '+c.dataset.year+' '+c.dataset.region+' '+c.dataset.genre).toLowerCase();c.classList.toggle('hidden',q&&!text.includes(q));});
  });
}
qsa('[data-sort]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const grid=qs('.local-grid');
    if(!grid)return;
    const cards=qsa('.movie-card',grid);
    const mode=btn.dataset.sort;
    cards.sort((a,b)=>mode==='title'?a.dataset.title.localeCompare(b.dataset.title,'zh-Hans-CN'):Number(b.dataset.year)-Number(a.dataset.year));
    cards.forEach(c=>grid.appendChild(c));
  });
});
const results=qs('#search-results');
if(results&&window.SITE_SEARCH_DATA){
  const params=new URLSearchParams(location.search);
  const q=(params.get('q')||'').trim().toLowerCase();
  const title=qs('#search-title'), sub=qs('#search-subtitle');
  const data=window.SITE_SEARCH_DATA;
  const list=q?data.filter(m=>(m.title+' '+m.year+' '+m.category+' '+m.genre+' '+m.region+' '+m.tags+' '+m.oneLine).toLowerCase().includes(q)):data.slice().sort((a,b)=>b.year-a.year).slice(0,80);
  if(title)title.textContent=q?'搜索结果：'+params.get('q'):'最新影片';
  if(sub)sub.textContent=q?'共找到 '+list.length+' 部相关影片':'展示近期更新与高热度影片';
  if(!list.length){results.innerHTML='<div class="search-empty">没有找到相关影片</div>';}
  else{
    results.innerHTML=list.map(m=>'<a class="video-card movie-card" href="'+m.url+'"><div class="card-cover-wrap"><img class="video-card-cover" src="'+m.cover+'" alt="'+m.title+'" loading="lazy"><span class="duration-badge">'+m.duration+'</span></div><div class="video-card-content"><h3 class="video-card-title">'+m.title+'</h3><p class="video-card-description">'+m.oneLine+'</p><div class="video-card-meta"><span>'+m.category+'</span><span>'+m.year+'</span></div></div></a>').join('');
  }
}
