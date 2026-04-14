(function(){
  "use strict";
  const SIZE={w:1560,h:1820};
  const data=window.LabsMindmapData||{nodes:[],edges:[]};
  const nodes=data.nodes;
  const edges=data.edges;
  const byId=()=>Object.fromEntries(nodes.map(n=>[n.id,n]));
  const children=()=>edges.reduce((a,[f,t])=>(a[f]=(a[f]||[]).concat(t),a),{});
  const desc=(id,map)=>{const out=[],q=[...(map[id]||[])];while(q.length){const c=q.shift();out.push(c);q.push(...(map[c]||[]));}return out;};
  const cr=n=>({x:n.x+n.w,y:n.y+n.h/2}),cl=n=>({x:n.x,y:n.y+n.h/2});
  const path=(a,b)=>{const s=cr(a),e=cl(b),dx=e.x-s.x,c=Math.max(40,Math.min(140,dx*0.45));return `M ${s.x} ${s.y} C ${s.x+c} ${s.y}, ${e.x-c} ${e.y}, ${e.x} ${e.y}`;};
  const style=(t,active)=>t==="root"?{bg:"#d9ddff",fg:"#1f2430",bd:active?"#fff":"#d9ddff"}:t==="section"?{bg:"#d6e4f8",fg:"#2a2f3c",bd:active?"#fff":"#d6e4f8"}:{bg:"#bfeedd",fg:"#1f3a33",bd:active?"#fff":"#bfeedd"};

  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));

  function fitToVisible(host,vNodes){
    const viewport=host.querySelector('[data-mm-viewport]');
    const stage=host.querySelector('[data-mm-stage]');
    if(!viewport||!stage) return;
    if(!Array.isArray(vNodes)||vNodes.length===0){
      stage.style.transform="translate(0px, 0px) scale(1)";
      return;
    }

    const pad=80;
    let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
    vNodes.forEach(n=>{
      minX=Math.min(minX,n.x);
      minY=Math.min(minY,n.y);
      maxX=Math.max(maxX,n.x+n.w);
      maxY=Math.max(maxY,n.y+n.h);
    });
    minX-=pad;minY-=pad;maxX+=pad;maxY+=pad;

    const boxW=Math.max(1,maxX-minX);
    const boxH=Math.max(1,maxY-minY);

    const rect0=viewport.getBoundingClientRect();
    const vw0=Math.max(1,rect0.width);
    const scaleX=clamp(vw0/boxW,0.45,1.15);

    const nextHeight=Math.max(520,Math.ceil(boxH*scaleX));
    viewport.style.height=`${nextHeight}px`;

    const rect=viewport.getBoundingClientRect();
    const vw=Math.max(1,rect.width);
    const vh=Math.max(1,rect.height);

    const scale=clamp(Math.min(vw/boxW,vh/boxH),0.45,1.15);
    const tx=(vw/2)-((minX+boxW/2)*scale);
    const ty=(vh/2)-((minY+boxH/2)*scale);

    stage.style.transform=`translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) scale(${scale.toFixed(3)})`;
  }

  function render(host,collapsed){
    if(!host) return;
    const map=children();
    const dict=byId();
    const col=collapsed instanceof Set?collapsed:new Set();
    const hidden=new Set();
    col.forEach(id=>desc(id,map).forEach(d=>hidden.add(d)));
    const vNodes=nodes.filter(n=>!hidden.has(n.id));
    const vEdges=edges.filter(([f,t])=>!hidden.has(f)&&!hidden.has(t));
    const btn=n=>{const isParent=(map[n.id]||[]).length>0;const active=col.has(n.id);const s=style(n.type,active);return `<button type="button" data-mm-node="${n.id}" style="position:absolute;left:${n.x}px;top:${n.y}px;width:${n.w}px;height:${n.h}px;background:${s.bg};color:${s.fg};border:1px solid ${s.bd};border-radius:10px;padding:0 16px;text-align:left;display:flex;align-items:center;cursor:${isParent?"pointer":"default"};font-family:Georgia, 'Times New Roman', serif;font-size:15px;font-weight:500">${n.label}</button>`;};
    host.innerHTML=`<div style="margin-bottom:12px;display:flex;gap:12px;flex-wrap:wrap;align-items:center;"><button type="button" data-mm-expand style="border-radius:12px;border:1px solid rgba(0,0,0,0.1);background:rgba(255,255,255,0.75);padding:8px 14px;font-size:13px;cursor:pointer;font-family:Poppins, ui-sans-serif;">Expand all</button><button type="button" data-mm-collapse style="border-radius:12px;border:1px solid rgba(0,0,0,0.1);background:rgba(255,255,255,0.75);padding:8px 14px;font-size:13px;cursor:pointer;font-family:Poppins, ui-sans-serif;">Collapse branches</button><div style="font-size:13px;color:rgba(0,0,0,0.6);font-family:Inter, system-ui;">Click a parent box to toggle.</div></div><div data-mm-viewport style="position:relative;overflow:hidden;border-radius:24px;background:#000;width:100%;height:720px;"><div data-mm-stage style="position:absolute;left:0;top:0;width:${SIZE.w}px;height:${SIZE.h}px;transform-origin:0 0;transition:transform 280ms ease;"><svg width="${SIZE.w}" height="${SIZE.h}" viewBox="0 0 ${SIZE.w} ${SIZE.h}" style="position:absolute;inset:0;">
      ${vEdges.map(([f,t])=>{const A=dict[f],B=dict[t];if(!A||!B) return "";const root=f==="root";const stroke=root?"#7f8cff":"#8cefe2";const sw=root?4:3.5;const cx=B.x-18,cy=B.y+B.h/2;return `<g><path d="${path(A,B)}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" opacity="0.96"/><circle cx="${cx}" cy="${cy}" r="12" fill="${root?"#cdd5ff":"#cde4f8"}" stroke="${root?"#a8b4ff":"#cde4f8"}" stroke-width="1.5"/><path d="M ${cx-4} ${cy} L ${cx} ${cy-4} L ${cx} ${cy+4} Z" fill="#2d3748" opacity="0.9"/></g>`;}).join("")}
    </svg>${vNodes.map(btn).join("")}</div></div>`;

    // Auto-fit after each render so expand/collapse feels like maximize/minimize.
    requestAnimationFrame(()=>fitToVisible(host,vNodes));
  }

  window.LabsMindmap={SIZE,nodes,edges};
  window.renderLabsMindmap=function(host,opts){
    const st=opts||{};
    const collapsed=st.collapsed instanceof Set?st.collapsed:new Set();
    const setCollapsed=st.setCollapsed;
    render(host,collapsed);
    const map=children();
    host.querySelector('[data-mm-expand]')?.addEventListener('click',()=>{
      host.scrollIntoView({behavior:'smooth',block:'start'});
      setCollapsed&&setCollapsed(new Set());
    });
    host.querySelector('[data-mm-collapse]')?.addEventListener('click',()=>{
      host.scrollIntoView({behavior:'smooth',block:'start'});
      setCollapsed&&setCollapsed(new Set(['platform','flagship','tools','leadership']));
    });
    host.querySelectorAll('[data-mm-node]').forEach(b=>b.addEventListener('click',()=>{
      const id=b.getAttribute('data-mm-node');
      if(!id) return;
      if((map[id]||[]).length===0) return;
      host.scrollIntoView({behavior:'smooth',block:'start'});
      const next=new Set(collapsed);
      next.has(id)?next.delete(id):next.add(id);
      setCollapsed&&setCollapsed(next);
    }));
  };
})();
