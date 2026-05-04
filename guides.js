// =================================================================
// MALAFO v3 — guides.js
// Accurate path-based SVG silhouettes for camera overlay
// ViewBox: 300x200. Stroke: rgba(240,168,32,.85)
// =================================================================
const GUIDES = {

  horse: {
    side: `
      <path d="M54,148 L54,118 L58,110 L66,106 L74,104 L82,103 L90,102 L102,100 L116,99 L132,98 L148,98 L162,99 L174,101 L184,104 L191,109 L194,116 L196,125 L196,148 L184,148 L184,128 L182,118 L177,112 L168,108 L158,107 L148,108 L140,110 L136,115 L134,122 L133,134 L133,148 L119,148 L119,126 L118,116 L116,110 L112,106 L106,104 L100,104 L94,106 L90,112 L88,122 L88,134 L88,148 L74,148 L74,126 L72,116 L69,110 L66,107 L62,106 L58,107 L54,112 L54,122 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M54,118 L58,110 L66,106 L74,104 L82,103 L90,102 L102,100 L116,99 L132,98 L148,98 L162,99 L174,101 L184,104 L191,109 L196,118 L196,108 L194,100 L192,94 L190,88 L188,83 L186,78 L183,73 L180,69 L193,54 L196,44 L198,36 L196,30 L192,26 L188,24 L184,24 L180,26 L178,30 L177,36 L176,42 L175,50 L170,57 L163,62 L157,66 L150,70 L143,73 L136,75 L126,76 L116,76 L105,77 L95,79 L87,82 L80,86 L74,92 L68,99 L62,104 L55,108 L51,112 L49,118 L50,124 L52,118" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M28,128 Q22,120 26,110 Q30,100 36,96 L50,104 L49,118 L50,124 L42,128 Z" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
    `,
    front: `
      <path d="M116,148 L116,130 L114,118 L112,108 L110,100 L110,90 L112,82 L116,76 L122,72 L128,70 L134,70 L140,72 L146,76 L150,82 L152,90 L152,100 L150,108 L148,118 L146,130 L146,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M110,90 L104,88 L96,86 L88,86 L80,88 L74,92 L70,98 L68,105 L70,112 L74,118 L80,122 L88,124 L96,124 L104,122 L110,118 L112,108" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M152,90 L158,88 L166,86 L174,86 L182,88 L188,92 L192,98 L194,105 L192,112 L188,118 L182,122 L174,124 L166,124 L158,122 L152,118 L150,108" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M122,72 L118,64 L116,56 L118,50 L122,46 L128,44 L134,44 L140,46 L144,50 L146,56 L144,64 L140,72" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <line x1="116" y1="148" x2="116" y2="130" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="126" y1="148" x2="126" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="136" y1="148" x2="136" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="146" y1="148" x2="146" y2="130" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
    `,
    back: `
      <path d="M118,148 L118,132 L116,120 L114,108 L112,98 L112,88 L114,80 L118,74 L124,70 L131,68 L138,68 L145,70 L150,74 L153,80 L154,88 L154,98 L152,108 L150,120 L148,132 L148,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M112,98 L106,96 L98,95 L90,96 L82,99 L76,104 L72,110 L70,118 L72,126 L78,132 L86,136 L94,136 L102,134 L109,128 L112,120 L112,108" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M154,98 L160,96 L168,95 L176,96 L184,99 L190,104 L194,110 L196,118 L194,126 L188,132 L180,136 L172,136 L164,134 L157,128 L154,120 L154,108" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M131,68 Q133,56 133,46 L130,40 L134,34 L138,40 L137,46 Q137,56 138,68" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="118" y1="148" x2="118" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="128" y1="148" x2="128" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="138" y1="148" x2="138" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="148" y1="148" x2="148" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
    `
  },

  cow: {
    side: `
      <path d="M56,148 L56,120 L58,112 L62,107 L68,104 L76,103 L86,103 L96,102 L108,101 L122,100 L138,100 L154,101 L168,102 L178,105 L185,110 L189,118 L190,128 L190,148 L178,148 L178,130 L176,118 L172,112 L165,108 L156,107 L148,108 L142,112 L138,120 L137,132 L137,148 L124,148 L124,130 L122,120 L118,113 L112,109 L104,108 L97,109 L91,113 L88,121 L87,132 L87,148 L72,148 L72,128 L70,118 L66,111 L62,108 L57,108 L53,112 L51,120 L51,132 L52,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M56,120 L58,112 L62,107 L68,104 L76,103 L86,103 L86,96 L87,90 L90,84 L96,80 L104,78 L114,77 L122,77 L132,78 L140,80 L147,84 L152,90 L154,96 L154,101 L164,100 L172,96 L178,90 L180,84 L180,78 L178,73 L174,68 L168,65 L182,55 L190,46 L194,38 L196,32 L196,26 L192,22 L186,21 L182,23 L180,28 L178,36 L176,44 L175,52 L168,57 L160,60 L164,66 L164,72 L158,68 L152,65 L147,64 L152,72 L154,80 L154,88" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M196,26 Q204,28 208,34 Q212,40 210,46 Q208,52 202,54 L190,46" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M196,32 Q204,34 206,38 L202,42" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M96,134 Q92,140 96,148 L104,148 Q108,140 104,134 Z" fill="rgba(255,255,255,.08)" stroke="rgba(240,168,32,.6)" stroke-width="1.2"/>
    `,
    front: `
      <path d="M114,148 L114,132 L112,120 L110,108 L108,98 L108,88 L110,80 L114,74 L120,70 L128,68 L136,68 L144,70 L150,74 L154,80 L156,88 L156,98 L154,108 L152,120 L150,132 L150,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M110,90 Q100,88 92,90 Q82,94 78,102 Q74,110 78,120 Q82,130 92,134 Q102,136 112,132" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M154,90 Q164,88 172,90 Q182,94 186,102 Q190,110 186,120 Q182,130 172,134 Q162,136 152,132" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M120,70 Q118,60 120,52 Q122,46 128,44 Q136,42 142,46 Q148,50 148,58 Q148,64 144,70" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M120,50 Q116,44 112,42" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M144,50 Q148,44 152,42" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round" fill="none"/>
      <line x1="114" y1="148" x2="114" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="124" y1="148" x2="124" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="140" y1="148" x2="140" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="150" y1="148" x2="150" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
    `,
    back: `
      <path d="M114,148 L114,130 L112,118 L110,106 L108,96 L108,86 L110,78 L116,72 L124,68 L133,66 L142,68 L150,72 L156,78 L158,86 L158,96 L156,106 L154,118 L152,130 L152,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M108,96 Q100,94 92,96 Q82,100 78,108 Q74,116 78,126 Q82,136 92,140 Q102,142 112,138 L112,118" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M158,96 Q166,94 174,96 Q184,100 188,108 Q192,116 188,126 Q184,136 174,140 Q164,142 154,138 L154,118" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M124,68 Q124,56 130,48 L133,44 L136,48 Q142,56 142,68" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="114" y1="148" x2="114" y2="130" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="124" y1="148" x2="124" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="142" y1="148" x2="142" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="152" y1="148" x2="152" y2="130" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
    `
  },

  sheep: {
    side: `
      <path d="M76,148 L76,132 L78,124 L82,118 L88,116 L96,116 L104,117 L112,118 L120,118 L130,118 L142,118 L152,118 L160,117 L168,116 L174,114 L178,110 L180,104 L179,98 L176,94 L171,90 L164,88 L156,88 L148,90 L142,94 L138,100 L134,108 L130,114 L124,118 L120,112 L118,106 L118,98 L120,90 L124,84 L130,80 L138,76 L148,74 L158,74 L168,76 L176,80 L182,86 L186,94 L187,104 L185,112 L182,118 L186,120 L192,120 L198,118 L202,112 L202,104 L198,96 L192,90 L186,88 L183,118 L180,122 L178,128 L178,136 L178,148 L162,148 L162,132 L161,124 L159,118 L100,148 L100,132 L99,124 L96,118 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M88,116 L76,112 L68,106 L62,98 L62,90 L66,84 L72,80 L80,78 L88,78 L96,80 L102,86 L104,94 L104,102 L100,110 L96,116" fill="rgba(255,255,255,.06)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M80,78 Q82,68 80,62 Q78,58 76,55 L80,50 Q86,46 92,46 Q98,46 102,50 L102,58 Q100,64 100,72 L96,80" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M68,55 Q64,50 64,46" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M98,52 Q100,46 102,44" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <line x1="76" y1="148" x2="76" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="100" y1="148" x2="100" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="162" y1="148" x2="162" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="178" y1="148" x2="178" y2="136" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
    `,
    front: `
      <path d="M118,148 L118,134 L116,122 L114,110 L112,100 L112,92 L114,86 L118,82 L124,80 L133,80 L142,80 L148,84 L152,90 L153,100 L152,110 L150,122 L148,134 L148,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M112,100 Q104,98 96,102 Q88,108 88,118 Q88,128 96,134 Q104,138 114,136 L114,122" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M153,100 Q161,98 169,102 Q177,108 177,118 Q177,128 169,134 Q161,138 151,136 L151,122" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M120,82 Q118,72 120,64 Q124,58 133,56 Q142,58 146,64 Q148,72 146,82" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M120,64 Q116,58 114,54" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M146,64 Q150,58 152,54" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <line x1="118" y1="148" x2="118" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="128" y1="148" x2="128" y2="136" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="138" y1="148" x2="138" y2="136" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="148" y1="148" x2="148" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
    `,
    back: `
      <path d="M120,148 L120,134 L118,122 L116,110 L114,100 L114,92 L116,86 L120,82 L127,80 L133,80 L139,80 L145,82 L149,88 L151,96 L151,106 L149,118 L147,130 L147,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M114,100 Q106,98 98,102 Q90,108 90,118 Q90,128 98,134 Q106,138 116,136 L116,122" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M151,100 Q159,98 167,102 Q175,108 175,118 Q175,128 167,134 Q159,138 149,136 L149,118" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M125,80 Q124,68 126,60 L133,56 L140,60 Q142,68 141,80" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="120" y1="148" x2="120" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="130" y1="148" x2="130" y2="136" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="140" y1="148" x2="140" y2="136" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="150" y1="148" x2="150" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3.5" stroke-linecap="round"/>
    `
  },

  goat: {
    side: `
      <path d="M70,148 L70,128 L72,118 L76,110 L82,106 L90,104 L100,103 L112,102 L126,102 L140,102 L152,103 L162,105 L170,110 L175,116 L177,124 L177,148 L165,148 L165,130 L163,120 L160,114 L154,110 L146,109 L138,110 L132,114 L128,122 L127,134 L127,148 L114,148 L114,130 L112,120 L108,114 L102,110 L95,110 L88,114 L84,122 L83,134 L83,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M70,128 L70,118 L72,110 L76,104 L82,100 L90,96 L98,92 L106,88 L114,84 L124,81 L134,80 L144,80 L153,82 L161,86 L168,92 L173,100 L176,110 L177,118 L176,100 L174,92 L170,86 L164,80 L157,75 L149,72 L150,64 L152,56 L152,48 L150,42 L146,38 L140,36 L134,36 L128,38 L124,42 L120,36 L116,30 L118,24 L120,20 L124,42 L122,50 L120,58 L120,66 L122,72 L126,76 L132,78 L148,72 L152,56" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M146,38 Q152,32 156,28 Q158,24 156,20" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      <path d="M50,124 Q44,118 46,108 Q48,100 56,96 L70,108 L70,124 Z" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
    `,
    front: `
      <path d="M120,148 L120,134 L118,120 L116,108 L114,98 L114,90 L116,84 L122,80 L130,78 L133,78 L136,78 L144,80 L150,86 L152,94 L152,104 L150,114 L148,126 L147,138 L147,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M114,98 Q106,96 100,100 Q92,106 92,116 Q92,126 100,132 Q108,136 118,134 L118,120" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M152,98 Q160,96 166,100 Q174,106 174,116 Q174,126 166,132 Q158,136 148,134 L148,120" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M122,80 Q120,70 122,62 Q126,56 133,54 Q140,56 144,62 Q146,70 144,80" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M126,60 Q122,50 118,46" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M140,58 Q144,50 148,46" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M128,54 Q133,44 133,36" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round" fill="none"/>
      <line x1="120" y1="148" x2="120" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="130" y1="148" x2="130" y2="136" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="138" y1="148" x2="138" y2="136" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="147" y1="148" x2="147" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
    `,
    back: `
      <path d="M120,148 L120,132 L118,120 L116,108 L114,98 L114,90 L116,84 L122,80 L133,78 L144,80 L150,86 L152,94 L152,104 L150,116 L148,128 L148,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M114,98 Q106,96 98,100 Q90,106 90,116 Q90,128 100,134 Q110,138 120,134 L118,120" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M152,98 Q160,96 168,100 Q176,106 176,116 Q176,128 166,134 Q156,138 148,134 L148,120" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M126,80 Q126,68 133,58 L133,50 L136,44 L133,36 L130,44 L133,50 L133,58 Q140,68 140,80" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="120" y1="148" x2="120" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="130" y1="148" x2="130" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="138" y1="148" x2="138" y2="134" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
      <line x1="148" y1="148" x2="148" y2="132" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round"/>
    `
  },

  camel: {
    side: `
      <path d="M44,148 L44,120 L46,108 L52,100 L60,96 L70,95 L82,94 L96,93 L110,92 L124,92 L140,93 L154,95 L166,98 L174,104 L179,112 L181,122 L181,148 L168,148 L168,128 L166,116 L162,108 L155,103 L146,102 L138,104 L132,110 L129,120 L128,135 L128,148 L114,148 L114,128 L112,116 L108,108 L102,103 L93,102 L84,104 L78,110 L74,120 L73,135 L73,148 L58,148 L58,128 L56,116 L52,108 L47,104 L42,104 L38,108 L36,118 L36,132 L37,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M44,120 L46,108 L52,100 L60,96 L70,95 L82,94 L82,86 L84,78 L88,70 L94,64 L100,60 L108,56 L116,54 L116,44 L118,34 L122,26 L128,22 L134,22 L140,26 L144,34 L145,44 L144,54 L152,56 L160,60 L166,66 L170,74 L171,82 L170,92 L166,98" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M128,22 Q126,14 130,8 Q134,4 138,8 Q140,14 140,22" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M18,132 Q12,122 16,110 Q20,100 30,96 L44,108 L44,132 Z" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
    `,
    front: `
      <path d="M110,148 L110,128 L108,116 L106,104 L104,94 L104,84 L106,76 L112,72 L120,70 L133,70 L146,70 L154,74 L158,82 L160,92 L160,104 L158,116 L156,128 L156,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M106,94 Q96,92 88,96 Q78,102 76,114 Q74,126 82,134 Q90,140 102,138 L106,120" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M160,94 Q170,92 178,96 Q188,102 190,114 Q192,126 184,134 Q176,140 164,138 L160,120" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M116,72 Q114,56 120,46 Q126,40 133,38 Q140,40 146,46 Q152,56 150,72" fill="rgba(255,255,255,.06)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M124,48 Q133,38 133,24 Q133,14 133,8" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <line x1="110" y1="148" x2="110" y2="128" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="122" y1="148" x2="122" y2="130" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="144" y1="148" x2="144" y2="130" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="156" y1="148" x2="156" y2="128" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
    `,
    back: `
      <path d="M110,148 L110,128 L108,116 L106,104 L104,94 L104,84 L106,76 L114,70 L124,68 L133,68 L142,68 L152,72 L158,80 L160,90 L160,102 L158,114 L156,128 L156,148 Z" fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="1.8"/>
      <path d="M104,94 Q94,92 86,96 Q76,102 74,112 Q72,124 80,132 Q88,140 100,138 L104,116" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M160,94 Q170,92 178,96 Q188,102 190,112 Q192,124 184,132 Q176,140 164,138 L160,116" fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M124,68 Q124,52 133,40 Q133,28 133,18" fill="none" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <line x1="110" y1="148" x2="110" y2="128" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="122" y1="148" x2="122" y2="130" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="144" y1="148" x2="144" y2="130" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="156" y1="148" x2="156" y2="128" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
    `
  }
};
