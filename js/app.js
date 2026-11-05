(function(){
var S={
 es:{
  nav_projects:'Proyectos',nav_blog:'Blog',nav_demo:'Demo',nav_exp:'Experiencia',nav_contact:'Contacto',r_capas:'Capas',r_demo:'Demo',r_exp:'Experiencia',r_end:'Fin',
  i_prompt:'joel@mx:~$ whoami',i_name:'Joel López Cota',i_roles:'Desarrollador Full-Stack · QA · DevOps',
  i_says:'Construyo sistemas que siguen funcionando cuando falla la red',i_cta:'Ver proyectos ↓',
  stack_e:'La pila completa',stack_h:'Cinco capas. Trabajo en todas.',
  stack_p:'Desde la interfaz hasta la operación, y las pruebas que sostienen todo. Toca una capa para ver con qué trabajo y en qué proyectos aparece.',
  hint:'Toca una capa de la pila.',see:'Proyectos que la usan',
  dec:'Decisiones técnicas',priv:'Repositorio privado.',pub:'Ver en GitHub',visit:'Visitar sonorafix.com',
  demo_e:'Pruébalo',demo_h:'Vender sin conexión',demo_p:'Una simulación del punto de venta. Apaga la señal, vende y mira cómo se sincroniza al volver. Son datos de ejemplo.',
  sim_off:'Simular sin señal',cancel_last:'Cancelar última venta',reset:'Reiniciar',ledger_h:'Registro de ventas',total:'Total neto',
  demo_note:'Las ventas nunca se editan: cancelar agrega un registro nuevo. Así dos teléfonos sin señal no se pisan al sincronizar.',
  on:'En línea',off:'Sin conexión',pending:'sin sincronizar',synced_all:'Todo sincronizado',empty:'Aún no hay ventas.',
  cancel:'Cancelación',tp:'pendiente',ts:'sincronizada',
  exp_e:'Currículum vitae',exp_h:'Experiencia y estudios',
  end_h:'Fin',g_hint:'Agarra la raqueta y juega',g_ok:'tests aprobados',g_best:'récord',g_bug:'¡bug! se reinicia la racha',gh:'GitHub',li:'LinkedIn',mail_l:'Enviar correo',cv_l:'Descargar CV',contact_p:'Busco un equipo de desarrollo full-stack o QA donde pueda construir y probar producto.',
  email_l:'Correo',phone_l:'Teléfono',copy:'Copiar correo',copied:'Correo copiado',
  foot:'Joel López Cota. Hecho a mano con HTML, CSS y JavaScript, en Sonora.'
 },
 en:{
  nav_projects:'Projects',nav_blog:'Blog',nav_demo:'Demo',nav_exp:'Experience',nav_contact:'Contact',r_capas:'Layers',r_demo:'Demo',r_exp:'Experience',r_end:'End',
  i_prompt:'joel@mx:~$ whoami',i_name:'Joel López Cota',i_roles:'Full-Stack Developer · QA · DevOps',
  i_says:'I build systems that keep working when the network drops',i_cta:'See projects ↓',
  stack_e:'The whole stack',stack_h:'Five layers. I work on all of them.',
  stack_p:'From the interface to operations, plus the tests that hold it all up. Tap a layer to see what I use there and which projects touch it.',
  hint:'Tap a layer of the stack.',see:'Projects that use it',
  dec:'Technical decisions',priv:'Private repository.',pub:'View on GitHub',visit:'Visit sonorafix.com',
  demo_e:'Try it',demo_h:'Selling offline',demo_p:'A simulation of the point of sale. Cut the signal, sell, and watch it sync when the network returns. Sample data.',
  sim_off:'Simulate no signal',cancel_last:'Cancel last sale',reset:'Reset',ledger_h:'Sales ledger',total:'Net total',
  demo_note:'Sales are never edited: cancelling adds a new record. That way two phones with no signal never overwrite each other when they sync.',
  on:'Online',off:'Offline',pending:'unsynced',synced_all:'All synced',empty:'No sales yet.',
  cancel:'Cancellation',tp:'pending',ts:'synced',
  exp_e:'Curriculum vitae',exp_h:'Experience and education',
  end_h:'The End',g_hint:'Grab the racket and play',g_ok:'tests passed',g_best:'best',g_bug:'bug! streak reset',gh:'GitHub',li:'LinkedIn',mail_l:'Send email',cv_l:'Download CV',contact_p:'I am looking for a full-stack or QA team where I can build and test product.',
  email_l:'Email',phone_l:'Phone',copy:'Copy email',copied:'Email copied',
  foot:'Joel López Cota. Handmade with HTML, CSS and JavaScript, in Sonora.'
 }
};
var LAYERS=[
 {id:'test',c:'--l-test',n:{es:'Pruebas',en:'Tests'},tools:'Vitest, Playwright, Testcontainers, Selenium, Appium, Robot Framework, JMeter'},
 {id:'ui',c:'--l-ui',n:{es:'Interfaz',en:'Interface'},tools:'React, Preact, Tailwind, React Native, Capacitor, Electron'},
 {id:'api',c:'--l-api',n:{es:'Servidor',en:'Server'},tools:'NestJS, Fastify, Spring Boot, Node.js, Prisma, WebSockets'},
 {id:'data',c:'--l-data',n:{es:'Datos',en:'Data'},tools:'PostgreSQL, Redis, IndexedDB, Cloudflare D1, MongoDB, SQLite'},
 {id:'ops',c:'--l-ops',n:{es:'Operación',en:'Operations'},tools:'Docker, GitHub Actions, Google Cloud, Prometheus, Grafana, Caddy'}
];
var FACTS=[
 {v:'466',l:{es:'pruebas automatizadas en SonoraFix',en:'automated tests in SonoraFix'}},
 {v:'61k',l:{es:'líneas de TypeScript en Resty',en:'lines of TypeScript in Resty'}},
 {v:'140+',l:{es:'endpoints de API en SonoraFix',en:'API endpoints in SonoraFix'}},
 {v:'18+',l:{es:'decisiones de arquitectura documentadas (ADR) en Resty',en:'documented architecture decisions (ADRs) in Resty'}}
];
var PROJECTS=[
 {id:'sonorafix',site:'https://sonorafix.com',name:'SonoraFix',kind:{es:'Comercio electrónico',en:'E-commerce'},year:'2026',c1:'#04283A',c2:'#0B6A8F',layers:['ui','api','data','test','ops'],
  sum:{es:'Tienda en línea de refrigeración y climatización que vende productos y servicios en el mismo carrito. Pago con PayPal, facturación CFDI conforme al SAT, inicio de sesión con Google y un panel de administración de 17 secciones que hace editable desde la interfaz lo que normalmente obliga a desplegar de nuevo.',
       en:'Online store for a refrigeration and HVAC business that sells products and services in the same cart. PayPal checkout, SAT-compliant CFDI invoicing, Google sign-in and a 17-section admin panel that makes editable from the UI what normally forces a redeploy.'},
  dec:{es:['Correos con patrón outbox: el aviso se encola en la misma transacción que el cambio de estado del pedido, así nunca sale un correo de algo que no ocurrió.',
           'Rotación de refresh tokens con detección de reutilización. Cerraba la sesión al abrir dos pestañas; se resolvió con una ventana de gracia de 30 segundos sin perder la detección.',
           'El rol se consulta en la base de datos en cada petición y no se lee del JWT, para que una degradación de permisos surta efecto de inmediato.',
           'El IVA va incluido en el precio y se calcula en el servidor (total × 0.16 / 1.16), así el importe declarado nunca depende del navegador.'],
       en:['Emails use the outbox pattern: the notice is queued in the same transaction as the order state change, so an email never goes out for something that did not happen.',
           'Refresh-token rotation with reuse detection. It logged users out when they opened two tabs; a 30-second grace window fixed that without losing detection.',
           'The role is read from the database on every request, not from the JWT, so a permission downgrade takes effect immediately.',
           'VAT is included in the price and computed on the server (total × 0.16 / 1.16), so the declared amount never depends on the browser.']},
  metrics:[{v:'466',l:{es:'pruebas automatizadas',en:'automated tests'}},{v:'140+',l:{es:'endpoints',en:'endpoints'}},{v:'39',l:{es:'modelos de datos',en:'data models'}}],
  stack:['React 19','TypeScript','Vite','Tailwind 4','TanStack Query','Fastify','Prisma','PostgreSQL','Redis','Docker Compose','Caddy','Vitest','GitHub Actions'],vis:'private'},
 {id:'resty',name:'Resty',kind:{es:'Gestión de restaurantes, local-first',en:'Local-first restaurant management'},year:'2026',status:{es:'En desarrollo',en:'In development'},c1:'#2B0A0F',c2:'#B3261E',layers:['ui','api','data','test'],
  sum:{es:'Sistema para operar un restaurante dentro de su propia red: caja, cocina y meseros trabajan en tiempo real contra un solo servidor y una sola base de datos, y que se caiga Internet no cambia nada. Incluye una app Android para meseros y módulos de inventario con recetas, turnos de caja y reportes.',
       en:'A system to run a restaurant inside its own network: cashier, kitchen and waiters work in real time against one server and one database, and an Internet outage changes nothing. It includes an Android app for waiters and modules for inventory with recipes, cash shifts and reports.'},
  dec:{es:['Dinero en centavos enteros en todo el sistema y pedidos con precio congelado: el ticket de ayer nunca cambia.',
           'Inventario como libro de movimientos de solo-agregar y bitácora de auditoría inmutable a nivel de permisos de la base de datos.',
           'El WebSocket solo avisa y la verdad siempre se vuelve a leer por REST. Las operaciones que mueven dinero o stock son transaccionales e idempotentes.',
           'Contratos Zod compartidos entre API y web, y un paquete de dominio con cálculos puros probado en más del 95 % de sus ramas.'],
       en:['Money is integer cents everywhere and orders freeze their prices: yesterday\'s receipt never changes.',
           'Inventory is an append-only movement ledger, and the audit log is immutable at the database permission level.',
           'The WebSocket only notifies; truth is always re-read over REST. Operations that move money or stock are transactional and idempotent.',
           'Zod contracts shared between API and web, and a domain package of pure calculations with over 95% branch coverage.']},
  metrics:[{v:'~61k',l:{es:'líneas de TypeScript',en:'lines of TypeScript'}},{v:'119',l:{es:'archivos de prueba',en:'test files'}},{v:'18+',l:{es:'decisiones documentadas',en:'documented decisions'}}],
  stack:['NestJS','Prisma','PostgreSQL','Socket.IO','Zod','React 19','Vite','Tailwind 4','Capacitor','Turborepo','Testcontainers','Playwright'],vis:'private'},
 {id:'pos',name:{es:'Punto de venta offline-first',en:'Offline-first point of sale'},kind:{es:'PWA para iPhone',en:'iPhone PWA'},year:'2026',c1:'#2E1B05',c2:'#A8590A',layers:['ui','api','data'],
  sum:{es:'Punto de venta pensado para un negocio real que funciona sin conexión y se sincroniza solo con Cloudflare cuando hay red. Ventas con extras, apertura y corte de caja, reportes y exportación a CSV, con PIN de dueño. Corre en el plan gratuito de Cloudflare.',
       en:'A point of sale built for a real business that works offline and syncs on its own with Cloudflare when the network is back. Sales with extras, cash drawer open and close-out, reports and CSV export, with an owner PIN. It runs on the free Cloudflare plan.'},
  dec:{es:['Las ventas nunca se editan: cancelar es un registro nuevo. Por eso dos teléfonos sin señal nunca se pisan.',
           'Si dos teléfonos abren turno sin conexión, el servidor los une en un solo turno al sincronizar.',
           'iOS no sincroniza en segundo plano, así que la interfaz muestra cuántas ventas siguen sin sincronizar y avisa antes del corte.'],
       en:['Sales are never edited: cancelling is a new record. That is why two phones with no signal never overwrite each other.',
           'If two phones open a shift while offline, the server merges them into a single shift on sync.',
           'iOS does not sync in the background, so the UI shows how many sales are still unsynced and warns before the close-out.']},
  metrics:[{v:'6',l:{es:'migraciones D1',en:'D1 migrations'}},{v:'~5.2k',l:{es:'líneas de TypeScript',en:'lines of TypeScript'}}],
  stack:['Preact','TypeScript','Dexie / IndexedDB','vite-plugin-pwa','Cloudflare Workers','Cloudflare D1'],vis:'private',demo:true},
 {id:'cloud',name:{es:'Monitoreo en la nube',en:'Cloud monitoring'},kind:{es:'Respuesta a incidentes, SRE',en:'Incident response, SRE'},year:'2026',c1:'#0C1340',c2:'#3B3FBF',layers:['ops','api'],
  sum:{es:'Aplicación en contenedores desplegada en Google Cloud para simular producción: métricas con Prometheus, dashboards y alertas en Grafana, health checks y reinicio automático. Provoqué fallas de base de datos y picos de latencia, hice el análisis de causa raíz y escribí los runbooks.',
       en:'A containerized app deployed on Google Cloud to simulate production: Prometheus metrics, Grafana dashboards and alerts, health checks and automatic restarts. I triggered database failures and latency spikes, did the root-cause analysis and wrote the runbooks.'},
  dec:{es:['Alertas de Grafana por correo para enterarse de la falla antes que el usuario.','Health checks y reinicio automático de contenedores como primera línea de recuperación.','Un runbook por cada falla simulada, con síntomas, causa raíz y pasos de recuperación.'],
       en:['Grafana email alerts so the failure is noticed before the user does.','Health checks and automatic container restarts as the first line of recovery.','One runbook per simulated failure, with symptoms, root cause and recovery steps.']},
  metrics:[],stack:['Google Cloud','Compute Engine','Docker','Prometheus','Grafana','Node.js','PostgreSQL'],vis:'none'},
 {id:'nomos',name:'Nomos',kind:{es:'App de escritorio para Windows',en:'Windows desktop app'},year:'2026',c1:'#230A44',c2:'#7A2FBF',layers:['ui','api','data'],
  sum:{es:'Widgets de escritorio estilo macOS para Windows: reloj flip o analógico con relojes mundiales, Pomodoro, tareas y hábitos con rachas y recordatorios. Se sincroniza con tu propio servidor en Cloudflare y tiene una app web para el celular.',
       en:'macOS-style desktop widgets for Windows: flip or analog clock with world clocks, Pomodoro, tasks, and habits with streaks and reminders. It syncs with your own Cloudflare server and has a phone web app.'},
  dec:{es:['Capa «Al fondo» tipo Rainmeter con llamadas nativas a Win32 (koffi): los widgets viven detrás de tus ventanas y siguen visibles con Win + D.',
           'El Pomodoro corre en el proceso principal, así que sigue contando aunque el widget esté oculto.',
           'Sincronización opcional con Cloudflare Workers + D1: gana el cambio más reciente y el token se guarda cifrado con el sistema.',
           'App del celular instalable sin App Store, con recordatorios push y atajos de Siri.'],
       en:['A Rainmeter-style "behind windows" layer using native Win32 calls (koffi): widgets sit behind your windows and stay visible with Win + D.',
           'The Pomodoro runs in the main process, so it keeps counting even when the widget is hidden.',
           'Optional sync on Cloudflare Workers + D1: the latest change wins and the token is stored encrypted by the OS.',
           'A phone app installable without the App Store, with push reminders and Siri shortcuts.']},
  metrics:[{v:'~10.5k',l:{es:'líneas de JavaScript',en:'lines of JavaScript'}},{v:'MIT',l:{es:'licencia',en:'license'}}],
  stack:['Electron','React 18','Tailwind','Recharts','koffi','Cloudflare Workers','D1','electron-builder','GitHub Actions'],vis:'public',url:'https://github.com/JoelCota/Nomos'},
 {id:'michi',name:'MichiAI',kind:{es:'Asistente de voz para Windows',en:'Windows voice assistant'},year:'2026',c1:'#04231D',c2:'#0B7A5F',layers:['api','test'],
  sum:{es:'Asistente de voz: dices la palabra de activación, preguntas y responde en voz alta con el modelo que configures (Claude, OpenAI, Groq, local u otro compatible). Controla volumen, ventanas, notas, temporizadores y búsqueda web.',
       en:'A voice assistant: say the wake phrase, ask a question and it answers aloud with the model you configure (Claude, OpenAI, Groq, local or any compatible endpoint). It controls volume, windows, notes, timers and web search.'},
  dec:{es:['Proveedores de modelo intercambiables con cadena de respaldo automática.','Respuestas en streaming para que la voz empiece antes de que termine el texto.','Confirmación antes de acciones sensibles; el acceso a la terminal viene apagado por defecto.'],
       en:['Swappable model providers with an automatic fallback chain.','Streaming replies so speech starts before the text is finished.','Confirmation before sensitive actions; shell access is off by default.']},
  metrics:[{v:'143',l:{es:'pruebas sin conexión',en:'offline checks'}}],
  stack:['Python','faster-whisper','Edge / Piper TTS','OpenAI-compatible APIs'],vis:'public',url:'https://github.com/JoelCota/MichiAI'}
];
var JOBS=[
 {t:'Pinnacle Aerospace',r:'QA Engineer',y:{es:'2025 · Ago – Dic',en:'2025 · Aug – Dec'},
  b:{es:['Pruebas manuales y automatizadas de software aeroespacial bajo estándares estrictos de calidad.','Suites automatizadas con Robot Framework, Selenium, Appium y JMeter.','Casos de prueba documentados, regresiones y apoyo a la validación junto a ingeniería.'],
     en:['Manual and automated testing of aerospace software under strict quality standards.','Automated suites with Robot Framework, Selenium, Appium and JMeter.','Documented test cases, regression runs and validation support alongside engineering.']}},
 {t:'Zitheonsoft',r:'Full-Stack Developer Intern',y:{es:'2025 · Ene – May',en:'2025 · Jan – May'},
  b:{es:['App de mensajería multiplataforma con React Native, Expo y TypeScript: autenticación, chat en tiempo real, grupos y contactos.','Notificaciones push con Firebase Cloud Messaging y navegación con React Navigation.','Backend con Spring Boot, MySQL y Keycloak; WebSockets y caché local con SQLite.'],
     en:['Cross-platform messaging app with React Native, Expo and TypeScript: authentication, real-time chat, groups and contacts.','Push notifications with Firebase Cloud Messaging and navigation with React Navigation.','Backend with Spring Boot, MySQL and Keycloak; WebSockets and local caching with SQLite.']}}
];
var EDU=[
 {t:'Instituto Tecnológico de Sonora',p:{es:'Ingeniería en Software, Ciudad Obregón. 2021 – 2025.',en:'B.S. in Software Engineering, Ciudad Obregón. 2021 – 2025.'}},
 {t:'Universidade Estadual de Campinas (Unicamp)',p:{es:'Intercambio académico, Brasil. Jul 2024 – Ene 2025.',en:'Academic exchange, Brazil. Jul 2024 – Jan 2025.'}}
];
var LANGS={es:['Español · nativo','Inglés · B1','Portugués · B1'],en:['Spanish · native','English · B1','Portuguese · B1']};
var SKILLS={
 test:'Vitest, Playwright, Testcontainers, JUnit, Mockito, Selenium, Appium, Robot Framework, JMeter, Postman, SonarQube',
 ui:'React, Preact, TanStack Query, Tailwind, React Native, Expo, Capacitor, Electron, HTML, CSS',
 api:'TypeScript, Java, Python, Kotlin, Go, PHP, NestJS, Fastify, Spring Boot, Node.js, Express, Prisma, WebSockets',
 data:'PostgreSQL, MySQL, SQL Server, MongoDB, Redis, SQLite, IndexedDB, Cloudflare D1',
 ops:'Docker, Kubernetes, GitHub Actions, Prometheus, Grafana, Google Cloud, AWS, Cloudflare, Caddy, Nginx'
};

var lang='es',active=null;
try{var sl=localStorage.getItem('jlc-lang');if(sl==='en'||sl==='es')lang=sl;else if((navigator.language||'').slice(0,2)==='en')lang='en'}catch(e){}
var $=function(id){return document.getElementById(id)};
function t(k){return S[lang][k]}
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function L(o){return typeof o==='string'?o:o[lang]}
function lay(id){return LAYERS.filter(function(l){return l.id===id})[0]}
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* estáticos y escritura */
function applyStatic(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i]').forEach(function(n){var v=S[lang][n.getAttribute('data-i')];if(v!=null)n.textContent=v});
  document.querySelectorAll('[data-ia]').forEach(function(n){var v=S[lang][n.getAttribute('data-ia')];if(v){n.setAttribute('aria-label',v);n.title=v}});
  document.querySelectorAll('[data-type]').forEach(function(n){var v=S[lang][n.getAttribute('data-type')];n.textContent=v;n.style.setProperty('--ch',v.length)});
  $('lang').textContent=lang==='es'?'EN':'ES';
}

/* estrellas */
(function(){var s=$('stars');for(var i=0;i<46;i++){var d=document.createElement('i');if(i%3===0)d.className='tw';d.style.left=(Math.random()*100)+'%';d.style.top=(Math.random()*62)+'%';d.style.setProperty('--d',(Math.random()*3).toFixed(2)+'s');d.style.opacity=(0.35+Math.random()*0.6).toFixed(2);s.appendChild(d)}})();

/* pila */
function buildStage(){
  var st=$('stage');st.textContent='';
  var ul=el('ul','labels');
  LAYERS.forEach(function(l,i){
    var top=24+i*44;
    var w=el('div','layer '+l.id);w.id='layer-'+l.id;w.style.top=top+'px';w.style.setProperty('--lc','var('+l.c+')');w.style.setProperty('--n',i);
    for(var j=6;j>=1;j--){var u=el('div','rh under');u.style.transform='translateY('+(j*2)+'px)';u.setAttribute('aria-hidden','true');w.appendChild(u)}
    var b=el('button','rh',l.id.toUpperCase());b.type='button';b.tabIndex=-1;b.setAttribute('aria-hidden','true');
    b.addEventListener('click',function(){pick(l.id)});
    w.appendChild(b);st.appendChild(w);
    var li=el('li');li.style.top=(top+81-18)+'px';
    var lb=el('button');lb.type='button';lb.dataset.layer=l.id;lb.setAttribute('aria-pressed','false');
    lb.appendChild(el('span',null,l.id.toUpperCase()));lb.appendChild(el('i'));
    lb.addEventListener('click',function(){pick(l.id)});
    li.appendChild(lb);ul.appendChild(li);
  });
  st.appendChild(ul);
}
function pick(id){active=(active===id)?null:id;paintStage()}
function paintStage(){
  LAYERS.forEach(function(l){var w=$('layer-'+l.id);w.classList.toggle('on',active===l.id);w.classList.toggle('dim',!!active&&active!==l.id)});
  document.querySelectorAll('.labels button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.layer===active))});
  var c=$('caption');c.textContent='';
  if(!active){c.appendChild(el('p','hint',t('hint')))}
  else{
    var l=lay(active);
    c.appendChild(el('b',null,active.toUpperCase()+' · '+l.n[lang]));
    c.appendChild(el('p','tl',l.tools));
    var j=el('div','jump');
    PROJECTS.filter(function(p){return p.layers.indexOf(active)>-1}).forEach(function(p){var a=el('a',null,L(p.name));a.href='#p-'+p.id;j.appendChild(a)});
    c.appendChild(j);
  }
}
function paintFacts(){var f=$('facts');f.textContent='';FACTS.forEach(function(x){var d=el('div','fact');d.appendChild(el('b',null,x.v));d.appendChild(el('span',null,x.l[lang]));f.appendChild(d)})}

/* capítulos */
function paintChapters(){
  var host=$('chapters');host.textContent='';
  PROJECTS.forEach(function(p,i){
    var s=el('section','chap');s.id='p-'+p.id;s.dataset.rail=p.year+'|'+L(p.name);
    s.style.setProperty('--c1',p.c1);s.style.setProperty('--c2',p.c2);
    var w=el('div','wrap');var g=el('div','chap-grid');
    var left=el('div');
    left.appendChild(el('p','num',(i<9?'0':'')+(i+1)+' / 0'+PROJECTS.length));
    left.appendChild(el('h2',L(p.name).length>14?'long':null,L(p.name)));
    left.appendChild(el('p','kind',L(p.kind)));
    left.appendChild(el('p','sum',L(p.sum)));
    var tg=el('div','lay-tags');
    if(p.status)tg.appendChild(el('span','hot',L(p.status)));
    p.layers.forEach(function(id){tg.appendChild(el('span',null,id.toUpperCase()))});
    left.appendChild(tg);
    var right=el('div');
    right.appendChild(el('h4',null,t('dec')));
    var ol=el('ol','decs');p.dec[lang].forEach(function(x){ol.appendChild(el('li',null,x))});right.appendChild(ol);
    if(p.metrics.length){var m=el('div','met');p.metrics.forEach(function(x){var q=el('div');q.appendChild(el('b',null,x.v));q.appendChild(el('span',null,x.l[lang]));m.appendChild(q)});right.appendChild(m)}
    var sk=el('div','stk');p.stack.forEach(function(x){sk.appendChild(el('span',null,x))});right.appendChild(sk);
    var v=el('p','vis');
    if(p.vis==='public'){var a=el('a',null,t('pub')+' →');a.href=p.url;v.appendChild(a)}else if(p.vis==='private'){v.textContent=t('priv')}
    if(p.site){var vs=el('a','visit',t('visit')+' \u2197');vs.href=p.site;vs.target='_blank';vs.rel='noopener';left.appendChild(vs)}
    right.appendChild(v);
    g.appendChild(left);g.appendChild(right);w.appendChild(g);s.appendChild(w);host.appendChild(s);
  });
}


/* fondos vivos: iconos flotantes por seccion */
var IC={
code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
terminal:'<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
braces:'<path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1"/>',
bug:'<path d="M8 2l1.9 1.9M16 2l-1.9 1.9M9 7.1v-.6a3 3 0 0 1 6 0v.6"/><path d="M12 20a6 6 0 0 1-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3a6 6 0 0 1-6 6z"/><path d="M12 20v-9M6.5 13H2M17.5 13H22M6 7.5L4 5.5M18 7.5l2-2M6 18l-2.5 2M18 18l2.5 2"/>',
git:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M18 10.5c0 4-6 3-11 6"/>',
check:'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16 9.5"/>',
db:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
cloud:'<path d="M17.5 19a4.5 4.5 0 1 0-1.2-8.8 6 6 0 0 0-11.6 1.8A4 4 0 0 0 6 19z"/>',
server:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/>',
layers:'<path d="M12 2l10 5-10 5L2 7z"/><path d="M2 12l10 5 10-5M2 17l10 5 10-5"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
wrench:'<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.4-.6-.6-2.4z"/>',
cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6"/>',
receipt:'<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
utensils:'<path d="M6 3v7a2 2 0 0 0 2 2v9M10 3v7a2 2 0 0 1-2 2M18 3c-2 2-3 5-3 8h3v10"/>',
grid:'<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/>',
wifioff:'<path d="M2 8.8a15 15 0 0 1 4.2-2.6M22 8.8a15 15 0 0 0-8-3.6M5 12.9a10 10 0 0 1 5-2.7M19 12.9a10 10 0 0 0-2.4-1.9M8.5 16.4a5 5 0 0 1 7 0M12 20h.01M2 2l20 20"/>',
sync:'<path d="M21 12a9 9 0 0 1-15.5 6.2M3 12a9 9 0 0 1 15.5-6.2"/><path d="M18.5 2v4h-4M5.5 22v-4h4"/>',
coin:'<circle cx="12" cy="12" r="9"/><path d="M14.5 9c-.5-1-1.4-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1.2 0-2.1-.6-2.6-1.6M12 6v1.5M12 16.5V18"/>',
bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
pulse:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
bars:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
scale:'<path d="M12 3v18M7 21h10M5 7h14"/><path d="M5 7l-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0z"/>',
book:'<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V4.5"/>',
file:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h6"/>',
cat:'<path d="M4 4l3.5 3A9 9 0 0 1 12 6.5a9 9 0 0 1 4.5.5L20 4v9a8 8 0 0 1-16 0z"/><path d="M9 12h.01M15 12h.01M10.5 15.5c.5.6 1 .8 1.5.8s1-.2 1.5-.8"/>',
chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z"/>',
cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
flask:'<path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3"/><path d="M7.5 15h9"/>',
browser:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
plane:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
case:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
grad:'<path d="M22 9L12 4 2 9l10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
box:'<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
zap:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
phone:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18"/>',
cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'
};
var FXSETS={
intro:'code terminal braces bug git sun zap flask cpu box',
capas:'layers flask browser server db cloud git shield cpu',
sonorafix:'wrench cart receipt shield lock key db cal check',
resty:'utensils grid receipt cal phone coin chat check',
pos:'wifioff sync coin receipt phone cloud zap db',
cloud:'cloud server pulse bell bars box cpu',
nomos:'scale book file globe code check',
michi:'cat chat cpu zap flask book',
demo:'coin receipt wifioff sync phone check cloud',
exp:'case grad flask code cal globe git',
end:'mail plane phone globe code zap braces'
};
var FXDARK=['#4ADE80','#60A5FA','#EAF0F8','#F4B860','#A78BFA'];
var fxIO=null;
function rng(seed){var h=1779033703^seed.length;for(var i=0;i<seed.length;i++){h=Math.imul(h^seed.charCodeAt(i),3432918353);h=h<<13|h>>>19}
  return function(){h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);h^=h>>>16;return (h>>>0)/4294967296}}
function buildFx(sec,key,o){
  o=o||{};if(sec.querySelector(':scope>.fx'))return;
  var names=FXSETS[key].split(' '),R=rng(key),small=innerWidth<720;
  var n=o.noicons?0:small?Math.ceil(names.length*.6):names.length;
  var fx=el('div','fx');fx.setAttribute('aria-hidden','true');
  var pal=o.pal||FXDARK,ymax=o.ymax||92;
  for(var i=0;i<n;i++){
    var zone=i%3,x;
    var y=4+((i+R()*.8)/n)*(ymax-8);
    if(o.safe){
      if(small){x=(i%2)?-1+R()*3:91+R()*3}else x=(i%2)?1.5+R()*6:91+R()*3.5;
    }else{if(zone===0)x=4+R()*11;else if(zone===1)x=80+R()*14;else x=18+R()*58}
    var s=(32+R()*40)*(small?.7:1);
    var RD=(38+R()*34).toFixed(1);
    var f=el('i','fi');
    f.style.cssText='left:'+x.toFixed(1)+'%;top:'+y.toFixed(1)+'%;--s:'+s.toFixed(0)+'px;--r:'+((R()*40-20)|0)+'deg;--o:'+((.16+R()*.16)*(o.safe&&small?.7:1)).toFixed(2)+';--dur:'+(8+R()*7).toFixed(1)+'s;--dl:-'+(R()*10).toFixed(1)+'s;--y:'+y.toFixed(1)+'%;--rd:'+RD+'s;--rl:-'+(RD*(1-y/100)).toFixed(1)+'s;--d:'+(.3+R()*.9).toFixed(2)+';--n:'+i+';color:'+pal[i%pal.length];
    f.dataset.p=(o.safe?.015+R()*.05:.05+R()*.2).toFixed(3);
    f.innerHTML='<svg viewBox="0 0 24 24">'+IC[names[i]]+'</svg>';
    fx.appendChild(f);
  }
  sec.insertBefore(fx,sec.firstChild);
  if(fxIO&&!o.noio)fxIO.observe(sec);
}
(function(){
  fxIO=new IntersectionObserver(function(es){es.forEach(function(e){var f=e.target.querySelector(':scope>.fx');if(f)f.classList.toggle('on',e.isIntersecting)})},{rootMargin:'80px 0px'});
})();


/* escenas de fondo fijas */
var SCENES={},curScene=null;
function buildScenes(){
  var host=el('div','scenes');host.id='scenes';host.setAttribute('aria-hidden','true');document.body.insertBefore(host,document.body.firstChild);
  var white={safe:1,pal:['#fff'],o1:'rgba(255,255,255,.13)',o2:'rgba(0,0,0,.22)'};
  var defs=[['intro',null,{ymax:62}],['capas',null,{safe:1}]];
  PROJECTS.forEach(function(p){ACC[p.id]=mixW(p.c2,.4);defs.push([p.id,'linear-gradient(135deg,'+p.c1+','+p.c2+')',white])});
  defs.push(['demo',null,{safe:1}],['exp',null,{safe:1}],['end',null,{safe:1}]);
  defs.forEach(function(d){var s=el('div','scene');s.dataset.k=d[0];
    if(d[1]){s.dataset.t='c';s.style.background='radial-gradient(circle at 14% 28%,rgba(255,255,255,.14),transparent 42vmax),radial-gradient(circle at 70% 78%,rgba(0,0,0,.24),transparent 46vmax),'+d[1]}buildFx(s,d[0],Object.assign({noio:1,noicons:1},d[2]));host.appendChild(s);SCENES[d[0]]=s});
}

/* campo unico de iconos: nunca se reinicia entre secciones */
function buildField(){
  var names='code terminal braces bug git sun zap flask cpu box layers db cloud server shield wrench cart receipt coin wifioff sync bell pulse bars scale book check lock key browser phone globe mail plane'.split(' ');
  var small=innerWidth<720,R=rng('field'),n=small?8:12,H=innerHeight;
  var xs=[];for(var q=0;q<n;q++)xs.push((q+.15+R()*.7)/n*92+1);
  for(var q=n-1;q>0;q--){var j=Math.floor(R()*(q+1)),tmp=xs[q];xs[q]=xs[j];xs[j]=tmp}
  var old=document.getElementById('field');if(old)old.remove();
  var f=el('div','fx field on');f.id='field';f.setAttribute('aria-hidden','true');
  var st=curScene&&SCENES[curScene]&&SCENES[curScene].dataset.t==='c';
  f.style.setProperty('--ic',st?'#fff':'#EAF0F8');f.style.setProperty('--ic2',st?'#fff':'#4ADE80');f.style.setProperty('--ic3',st?'#fff':'#60A5FA');
  for(var i=0;i<n;i++){
    var x=xs[i];
    var s=Math.round((40+R()*34)*(small?.75:1)),RD=(40+R()*34),rot=(R()*40-20)|0,dur=8+R()*7,y=5+R()*88;
    var e=el('i','fi '+['a','b','c'][i%3]);
    e.style.cssText='left:'+x.toFixed(1)+'%;top:'+(reduce?y.toFixed(1)+'%':'100%')+';--s:'+s+'px;--o:'+((.11+R()*.10)*(small?.8:1)).toFixed(2)+';--n:'+i;
    e.innerHTML='<svg viewBox="0 0 24 24">'+IC[names[i%names.length]]+'</svg>';
    var sv=e.firstChild;f.appendChild(e);
    if(reduce){sv.style.transform='rotate('+rot+'deg)';continue}
    var dl=-RD*1000*R(),D=RD*1000;
    e.animate([{transform:'translate3d(0,0,0)'},{transform:'translate3d(0,'+(-(H+s+24))+'px,0)'}],{duration:D,iterations:Infinity,delay:dl});
    sv.animate([{opacity:0},{opacity:1,offset:.08},{opacity:1,offset:.9},{opacity:0}],{duration:D,iterations:Infinity,delay:dl});
    sv.animate([{transform:'rotate('+rot+'deg)'},{transform:'translateY(-16px) rotate('+(rot+8)+'deg)'}],{duration:dur*1000,iterations:Infinity,direction:'alternate',easing:'ease-in-out',delay:-dur*1000*R()});
  }
  document.body.insertBefore(f,$('scenes').nextSibling);
}
var fieldT=0;addEventListener('resize',function(){clearTimeout(fieldT);fieldT=setTimeout(buildField,250)});
function mixW(h,t){var n=parseInt(h.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;function m(v){return Math.round(v+(255-v)*t)}return '#'+[m(r),m(g),m(b)].map(function(v){return v.toString(16).padStart(2,'0')}).join('')}
var ACC={intro:'#4ADE80',capas:'#4ADE80',demo:'#4ADE80',exp:'#60A5FA',end:'#4ADE80'};
function sceneKey(id){return id==='top'?'intro':id.indexOf('p-')===0?id.slice(2):id==='experiencia'?'exp':id==='contacto'?'end':id}
function showScene(k){
  if(!SCENES[k]||k===curScene)return;
  var prev=curScene&&SCENES[curScene];curScene=k;
  SCENES[k].classList.add('on');SCENES[k].firstChild.classList.add('on');
  var ac=ACC[k]||'#fff';document.querySelector('.rail').style.setProperty('--acc',ac);document.querySelector('.g-ball').style.setProperty('--acc',ac);var c=SCENES[k].dataset.t==='c',fl=$('field').style;fl.setProperty('--ic',c?'#fff':'#EAF0F8');fl.setProperty('--ic2',c?'#fff':'#4ADE80');fl.setProperty('--ic3',c?'#fff':'#60A5FA');
  if(prev){prev.classList.remove('on');setTimeout(function(){if(curScene!==prev.dataset.k)prev.firstChild.classList.remove('on')},900)}
}

/* demo */
var PRODS=[{n:{es:'Orden chica',en:'Small order'},p:70},{n:{es:'Orden grande con extra',en:'Large order with extra'},p:130},{n:{es:'Bebida',en:'Drink'},p:25}];
var led=[],online=true,seq=0,syncTimer=null;
function fmt(n){return (n<0?'-':'')+'$'+Math.abs(n)}
function paintDemo(){
  var pill=$('pill');var pend=led.filter(function(r){return !r.s}).length;
  pill.classList.toggle('off',!online);
  pill.textContent=(online?t('on'):t('off'))+' · '+(pend?pend+' '+t('pending'):t('synced_all'));
  var ps=$('prods');
  if(ps.dataset.lang!==lang){ps.textContent='';ps.dataset.lang=lang;
    PRODS.forEach(function(x){var b=el('button','prod');b.type='button';b.appendChild(el('b',null,L(x.n)));b.appendChild(el('span',null,fmt(x.p)));
      b.addEventListener('click',function(){seq++;led.unshift({id:seq,t:'sale',lbl:L(x.n),a:x.p,s:online,ref:null});paintDemo()});ps.appendChild(b)});}
  var rows=$('rows');rows.textContent='';
  if(!led.length)rows.appendChild(el('li','empty',t('empty')));
  var cancelled={};led.forEach(function(r){if(r.t==='cx')cancelled[r.ref]=true});
  var tot=0;
  led.forEach(function(r){
    tot+=r.a;var li=el('li',r.t==='cx'?'cx':(cancelled[r.id]?'gone':''));
    li.appendChild(el('span','id','#'+r.id));
    li.appendChild(el('span','lbl',(r.t==='cx'?t('cancel')+': ':'')+r.lbl));
    li.appendChild(el('span','amt',fmt(r.a)));
    li.appendChild(el('span','st'+(r.s?'':' p'),r.s?t('ts'):t('tp')));
    rows.appendChild(li);
  });
  $('tot').textContent=fmt(tot);$('offsw').checked=!online;
}
function syncNow(){
  clearTimeout(syncTimer);
  (function step(){var next=null;for(var i=led.length-1;i>=0;i--){if(!led[i].s){next=led[i];break}}
    if(!next||!online){paintDemo();return}
    next.s=true;paintDemo();syncTimer=setTimeout(step,420)})();
}
$('offsw').addEventListener('change',function(e){online=!e.target.checked;paintDemo();if(online)syncNow()});
$('cxbtn').addEventListener('click',function(){
  var cancelled={};led.forEach(function(r){if(r.t==='cx')cancelled[r.ref]=true});
  var tgt=led.filter(function(r){return r.t==='sale'&&!cancelled[r.id]})[0];if(!tgt)return;
  seq++;led.unshift({id:seq,t:'cx',lbl:tgt.lbl,a:-tgt.a,s:online,ref:tgt.id});paintDemo();
});
$('resetbtn').addEventListener('click',function(){clearTimeout(syncTimer);led=[];seq=0;online=true;paintDemo()});

/* experiencia */
function paintExp(){
  var j=$('jobs');j.textContent='';
  JOBS.forEach(function(x){var d=el('div','job');d.appendChild(el('p','yr',x.y[lang]));
    var b=el('div');b.appendChild(el('h3',null,x.t));b.appendChild(el('p','role',x.r));var ol=el('ol');x.b[lang].forEach(function(s){ol.appendChild(el('li',null,s))});b.appendChild(ol);d.appendChild(b);j.appendChild(d)});
  var e=$('edu');e.textContent='';EDU.forEach(function(x){var d=el('div');d.appendChild(el('h3',null,x.t));d.appendChild(el('p',null,x.p[lang]));e.appendChild(d)});
  var g=$('langs');g.textContent='';LANGS[lang].forEach(function(x){g.appendChild(el('span','tag',x))});
  var s=$('skills');s.textContent='';
  LAYERS.forEach(function(l){var d=el('div','sk');d.style.setProperty('--c','var('+l.c+')');d.appendChild(el('h3',null,l.id.toUpperCase()+' · '+l.n[lang]));d.appendChild(el('p',null,SKILLS[l.id]));s.appendChild(d)});
}

/* riel y puntos */
var chaps=[],io=null;
function railOf(c){var p=c.dataset.rail.split('|');return [p[0],c.dataset.railkey?t('r_'+c.dataset.railkey):p[1]]}
function buildNav(){
  chaps=[].slice.call(document.querySelectorAll('[data-rail]'));
  var d=$('dots');d.textContent='';
  chaps.forEach(function(c,i){
    if(!c.id)c.id='c'+i;
    var a=document.createElement('a');a.href='#'+c.id;a.setAttribute('aria-label',railOf(c)[1]);a.dataset.for=c.id;d.appendChild(a);
  });
  if(io)io.disconnect();
  io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)setActive(e.target)})},{rootMargin:'-45% 0px -50% 0px'});
  chaps.forEach(function(c){io.observe(c)});
}
function setActive(c){
  showScene(sceneKey(c.id));var p=railOf(c);$('railyr').textContent=p[0];$('railname').textContent=p[1];
  document.querySelectorAll('.dots a').forEach(function(a){a.setAttribute('aria-current',String(a.dataset.for===c.id))});
}



/* linea del tiempo lateral: regla de scroll */
var rtick=false,rootEl=document.documentElement;
var railEl=document.querySelector('.rail');
function railMove(){
  var vh=innerHeight,max=Math.max(1,rootEl.scrollHeight-vh),p=Math.min(1,Math.max(0,scrollY/max)),ry=36+p*(vh-106);
  railEl.style.setProperty('--ry',ry.toFixed(1)+'px');railEl.style.setProperty('--sy',(ry/vh).toFixed(4));railEl.style.setProperty('--p',p.toFixed(4));
  rootEl.classList.toggle('scrolled',scrollY>20);
}
function railLayout(){
  var vh=innerHeight,max=Math.max(1,rootEl.scrollHeight-vh),track=vh-106;
  railEl.style.setProperty('--m',Math.max(5,120*track/max).toFixed(2)+'px');
  railEl.style.setProperty('--M',Math.max(24,vh*track/max).toFixed(2)+'px');
  railMove();
}
addEventListener('scroll',function(){if(!rtick){rtick=true;requestAnimationFrame(function(){rtick=false;railMove()})}},{passive:true});
addEventListener('resize',railLayout);addEventListener('load',function(){railLayout();setTimeout(railLayout,800)});

/* el auto-scroll termina donde empieza el curriculum; despues el scroll es libre */
(function(){
  var root=document.documentElement,free=false,t=false;
  function chk(){
    t=false;var cv=$('experiencia'),demo=$('demo');if(!cv)return;var top=cv.offsetTop;
    if(!free&&scrollY>=top-2){free=true;root.classList.add('free')}
    else if(free&&scrollY<top-2){free=false;root.classList.remove('free');scrollTo({top:demo.offsetTop,behavior:'smooth'})}
  }
  addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(chk)}},{passive:true});
  addEventListener('load',chk);
})();

/* minijuego: pelota y raqueta sobre toda la pagina */
(function(){
  var SOL='.intro .name,.chap h2,.stackc h2,.demo-s h2,.exp h2,.end h2,.pill-link,.eb';
  var small=innerWidth<720,RB=9,RH=27,GR=70,base=small?250:330;
  var ball=el('div','g-ball'),rk=el('div','g-racket'),hud=el('div','g-hud');
  var tip=el('div','g-tip');tip.textContent=t('g_hint');
  [ball,rk,hud,tip].forEach(function(n){n.setAttribute('aria-hidden','true')});
  rk.innerHTML='<svg viewBox="0 0 60 120" fill="none" stroke-linecap="round"><ellipse cx="30" cy="34" rx="24" ry="30" fill="rgba(255,255,255,.07)" stroke="#fff" stroke-width="3"/><path d="M30 5v58M12 20h36M8 34h44M12 48h36M19 11v46M41 11v46" stroke="#fff" stroke-opacity=".38" stroke-width="1"/><path d="M24 62l-3 14M36 62l3 14" stroke="#fff" stroke-width="3"/><rect x="25" y="74" width="10" height="38" rx="5" fill="#4ADE80" stroke="#04210F" stroke-width="1.5"/></svg>';
  document.body.appendChild(ball);document.body.appendChild(rk);document.body.appendChild(hud);document.body.appendChild(tip);
  var W=innerWidth,H=innerHeight,ang=.55+Math.random()*.5;
  var b={x:W*.32,y:H*.22,vx:Math.cos(ang)*base*(Math.random()<.5?-1:1),vy:Math.sin(ang)*base};
  var r={x:W-70,y:H-34,lx:W-70,ly:H-34,vx:0,vy:0,rot:0,grab:false,ox:0,oy:0};
  var running=!reduce,streak=0,best=0,cool=0,hudT=0,last=0;
  try{best=+localStorage.getItem('jlc-best')||0}catch(e){}
  var hit1=false;
  function say(txt,cls,ms){if(!hit1)return;hud.textContent=txt;hud.className='g-hud on'+(cls?' '+cls:'');clearTimeout(hudT);hudT=setTimeout(function(){hud.classList.remove('on')},ms||2400)}
  function clamp(v,a,c){return Math.max(a,Math.min(c,v))}
  rk.addEventListener('pointerdown',function(e){e.preventDefault();try{rk.setPointerCapture(e.pointerId)}catch(x){}
    r.grab=true;r.ox=r.x-e.clientX;r.oy=r.y-e.clientY;rk.classList.add('grab','used');running=true;tip.classList.remove('on')});
  rk.addEventListener('pointermove',function(e){if(!r.grab)return;r.x=clamp(e.clientX+r.ox,0,innerWidth);r.y=clamp(e.clientY+r.oy,GR*.5,innerHeight+10)});
  function up(){r.grab=false;rk.classList.remove('grab')}
  rk.addEventListener('pointerup',up);rk.addEventListener('pointercancel',up);
  addEventListener('resize',function(){W=innerWidth;H=innerHeight;r.x=clamp(r.x,0,W);r.y=clamp(r.y,GR*.5,H+10);b.x=clamp(b.x,RB,W-RB);b.y=clamp(b.y,RB,H-RB)});
  function wall(){
    if(b.x<RB){b.x=RB;b.vx=Math.abs(b.vx)}else if(b.x>W-RB){b.x=W-RB;b.vx=-Math.abs(b.vx)}
    if(b.y<RB){b.y=RB;b.vy=Math.abs(b.vy)}
    else if(b.y>H-RB){b.y=H-RB;b.vy=-Math.abs(b.vy);if(streak>0){say(t('g_bug'),'bug');streak=0}}
  }
  function hitRect(L,T,R,B){
    var cx=clamp(b.x,L,R),cy=clamp(b.y,T,B),dx=b.x-cx,dy=b.y-cy,d2=dx*dx+dy*dy,nx,ny;
    if(d2>=RB*RB)return;
    if(d2===0){var l=b.x-L,rr=R-b.x,tt=b.y-T,bb=B-b.y,m=Math.min(l,rr,tt,bb);
      if(m===l){nx=-1;ny=0;b.x=L-RB}else if(m===rr){nx=1;ny=0;b.x=R+RB}else if(m===tt){nx=0;ny=-1;b.y=T-RB}else{nx=0;ny=1;b.y=B+RB}}
    else{var d=Math.sqrt(d2);nx=dx/d;ny=dy/d;b.x=cx+nx*RB;b.y=cy+ny*RB}
    var vn=b.vx*nx+b.vy*ny;if(vn<0){b.vx-=2*vn*nx;b.vy-=2*vn*ny}
  }
  var solEls=[],solT=0,rg=document.createRange();
  function solids(){
    var nw=performance.now();if(nw-solT>600){solEls=document.querySelectorAll(SOL);solT=nw}
    var els=solEls;
    for(var i=0;i<els.length;i++){var e=els[i],bb=e.getBoundingClientRect();
      if(bb.bottom<b.y-60||bb.top>b.y+60||bb.right<b.x-60||bb.left>b.x+60)continue;
      if(/^H/.test(e.tagName)||e.classList.contains('name')){rg.selectNodeContents(e);var rs=rg.getClientRects();
        for(var k=0;k<rs.length;k++)hitRect(rs[k].left,rs[k].top,rs[k].right,rs[k].bottom)}
      else hitRect(bb.left,bb.top,bb.right,bb.bottom)}
  }
  function frame(now){
    requestAnimationFrame(frame);
    var dt=Math.min(.033,(now-last)/1000||.016);last=now;
    r.vx+=((r.x-r.lx)/dt-r.vx)*.55;r.vy+=((r.y-r.ly)/dt-r.vy)*.55;r.lx=r.x;r.ly=r.y;
    r.rot+=(clamp(r.vx*.035,-38,38)-r.rot)*Math.min(1,dt*10);
    var a=r.rot*Math.PI/180,hx=r.x+Math.sin(a)*GR,hy=r.y-Math.cos(a)*GR;
    if(running&&!document.hidden){
      b.x+=b.vx*dt;b.y+=b.vy*dt;wall();solids();wall();
      cool-=dt;
      var dx=b.x-hx,dy=b.y-hy,d=Math.sqrt(dx*dx+dy*dy);
      if(d<RH+RB&&cool<=0&&d>0){
        var nx=dx/d,ny=dy/d,rvx=b.vx-r.vx,rvy=b.vy-r.vy,vn=rvx*nx+rvy*ny;
        if(vn<0){b.vx-=1.9*vn*nx;b.vy-=1.9*vn*ny}
        b.vx+=r.vx*.45;b.vy+=r.vy*.45;b.vx+=nx*60;b.vy+=ny*60;b.x=hx+nx*(RH+RB+1);b.y=hy+ny*(RH+RB+1);cool=.12;
        hit1=true;streak++;if(streak>best){best=streak;try{localStorage.setItem('jlc-best',best)}catch(e){}}
        say('✓ '+streak+' '+t('g_ok')+' · '+t('g_best')+' '+best);
      }
      var sp=Math.hypot(b.vx,b.vy)||1,tg=sp>base?Math.max(base,sp-(sp-base)*dt*.4):Math.max(sp,base*.85);tg=Math.min(tg,1600);
      b.vx*=tg/sp;b.vy*=tg/sp;
    }
    ball.style.transform='translate3d('+b.x.toFixed(1)+'px,'+b.y.toFixed(1)+'px,0)';
    rk.style.transform='translate('+r.x.toFixed(1)+'px,'+r.y.toFixed(1)+'px) rotate('+r.rot.toFixed(1)+'deg) translate(-30px,-104px)';
  }
  requestAnimationFrame(frame);
  setTimeout(function(){if(!rk.classList.contains('used')){tip.textContent=t('g_hint');tip.classList.add('on')}},2400);
})();
function paint(){applyStatic();paintStage();paintFacts();paintChapters();paintDemo();paintExp();buildNav();railLayout()}
$('lang').addEventListener('click',function(){lang=lang==='es'?'en':'es';try{localStorage.setItem('jlc-lang',lang)}catch(e){}paint()});
buildScenes();buildField();
buildStage();paint();showScene('intro');
})();

(function(){
  var b=document.getElementById('burger'),m=document.getElementById('menu'),sc=document.getElementById('scrim');
  function set(o){document.documentElement.classList.toggle('menu-open',o);b.setAttribute('aria-expanded',o?'true':'false')}
  b.addEventListener('click',function(){set(!document.documentElement.classList.contains('menu-open'))});
  sc.addEventListener('click',function(){set(false)});
  m.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  window.addEventListener('resize',function(){if(innerWidth>900)set(false)});
})();
