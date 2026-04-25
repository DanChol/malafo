/* camera.css — camera screen specific styles already in style.css */

/* guides.js — SVG guide paths for each animal × view */
const GUIDES = {
  horse: {
    side: `
      <ellipse cx="138" cy="115" rx="82" ry="44"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="200" cy="97" rx="44" ry="32"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="215" cy="72" rx="20" ry="22"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M222 53 L236 30 L228 28 L220 51"
        stroke="rgba(240,168,32,.85)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <line x1="82"  y1="152" x2="86"  y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="106" y1="155" x2="110" y2="179" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="160" y1="153" x2="164" y2="177" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="182" y1="152" x2="186" y2="176" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <path d="M50 115 Q36 105 40 93"
        stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round" fill="none"/>`,
    front: `
      <ellipse cx="150" cy="120" rx="50" ry="36"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="88" rx="30" ry="22"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="65" rx="16" ry="18"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M142 49 L136 29" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M158 49 L164 29" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="112" y1="150" x2="108" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="132" y1="152" x2="129" y2="180" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="168" y1="152" x2="171" y2="180" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="188" y1="150" x2="192" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>`,
    back: `
      <ellipse cx="150" cy="118" rx="52" ry="38"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="86" rx="32" ry="24"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="66" rx="14" ry="16"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M150 52 L150 30" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M144 38 L150 30 L156 38" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <line x1="112" y1="148" x2="108" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="132" y1="151" x2="129" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="168" y1="151" x2="171" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="188" y1="148" x2="192" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>`
  },

  cow: {
    side: `
      <ellipse cx="132" cy="116" rx="78" ry="40"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="196" cy="102" rx="38" ry="28"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="206" cy="76" rx="16" ry="18"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M200 60 Q202 50 198 46" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M212 60 Q214 50 210 46" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="72"  y1="150" x2="75"  y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="96"  y1="153" x2="99"  y2="181" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="152" y1="151" x2="155" y2="179" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="174" y1="150" x2="177" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>`,
    front: `
      <ellipse cx="150" cy="118" rx="44" ry="34"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="88" rx="28" ry="22"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="66" rx="16" ry="16"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M140 52 Q136 44 134 40" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M160 52 Q164 44 166 40" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="114" y1="148" x2="110" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="134" y1="151" x2="131" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="166" y1="151" x2="169" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="186" y1="148" x2="190" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>`,
    back: `
      <ellipse cx="150" cy="116" rx="46" ry="36"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="86" rx="30" ry="24"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="66" rx="14" ry="16"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <line x1="114" y1="148" x2="110" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="134" y1="151" x2="131" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="166" y1="151" x2="169" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>
      <line x1="186" y1="148" x2="190" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="5" stroke-linecap="round"/>`
  },

  sheep: {
    side: `
      <ellipse cx="138" cy="118" rx="68" ry="34"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="192" cy="106" rx="32" ry="24"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="200" cy="83" rx="13" ry="15"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M196 70 Q198 62 195 58" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <path d="M206 70 Q208 62 205 58" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <line x1="86"  y1="148" x2="89"  y2="172" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="106" y1="151" x2="109" y2="175" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="154" y1="149" x2="157" y2="173" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="172" y1="148" x2="175" y2="172" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>`,
    front: `
      <ellipse cx="150" cy="120" rx="36" ry="30"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="92" rx="24" ry="20"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="73" rx="12" ry="14"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M142 61 Q138 54 136 50" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <path d="M158 61 Q162 54 164 50" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <line x1="120" y1="148" x2="117" y2="172" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="138" y1="151" x2="136" y2="175" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="162" y1="151" x2="164" y2="175" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="180" y1="148" x2="183" y2="172" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>`,
    back: `
      <ellipse cx="150" cy="118" rx="38" ry="32"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="88" rx="26" ry="22"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="68" rx="12" ry="14"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <line x1="120" y1="148" x2="117" y2="172" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="138" y1="151" x2="136" y2="175" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="162" y1="151" x2="164" y2="175" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="180" y1="148" x2="183" y2="172" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>`
  },

  goat: {
    side: `
      <ellipse cx="140" cy="120" rx="62" ry="30"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="188" cy="108" rx="28" ry="22"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="194" cy="86" rx="12" ry="14"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M188 73 Q190 65 188 61" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <path d="M200 73 Q202 65 200 61" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <path d="M30 118 Q18 110 22 100" stroke="rgba(240,168,32,.85)" stroke-width="3" stroke-linecap="round" fill="none"/>
      <line x1="94"  y1="147" x2="97"  y2="170" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="112" y1="149" x2="115" y2="172" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="154" y1="148" x2="157" y2="171" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="170" y1="147" x2="173" y2="170" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>`,
    front: `
      <ellipse cx="150" cy="120" rx="30" ry="28"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="94" rx="20" ry="18"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="76" rx="11" ry="13"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M144 65 Q140 57 138 53" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <path d="M156 65 Q160 57 162 53" stroke="rgba(240,168,32,.85)" stroke-width="2" stroke-linecap="round"/>
      <line x1="124" y1="148" x2="121" y2="171" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="140" y1="151" x2="138" y2="174" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="160" y1="151" x2="162" y2="174" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="176" y1="148" x2="179" y2="171" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>`,
    back: `
      <ellipse cx="150" cy="118" rx="32" ry="30"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="90" rx="22" ry="20"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="70" rx="11" ry="13"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <line x1="124" y1="148" x2="121" y2="171" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="140" y1="151" x2="138" y2="174" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="160" y1="151" x2="162" y2="174" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>
      <line x1="176" y1="148" x2="179" y2="171" stroke="rgba(240,168,32,.85)" stroke-width="4" stroke-linecap="round"/>`
  },

  camel: {
    side: `
      <ellipse cx="130" cy="114" rx="80" ry="38"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="198" cy="96" rx="36" ry="28"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="148" cy="78" rx="22" ry="28"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="210" cy="70" rx="15" ry="18"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <path d="M208 54 Q210 44 212 40" stroke="rgba(240,168,32,.85)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="68"  y1="148" x2="71"  y2="178" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="94"  y1="150" x2="97"  y2="180" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="152" y1="149" x2="155" y2="179" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="176" y1="148" x2="179" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>`,
    front: `
      <ellipse cx="150" cy="118" rx="42" ry="36"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="85" rx="26" ry="22"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="130" cy="62" rx="16" ry="20"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="170" cy="62" rx="16" ry="20"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <line x1="112" y1="150" x2="108" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="136" y1="153" x2="133" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="164" y1="153" x2="167" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="188" y1="150" x2="192" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>`,
    back: `
      <ellipse cx="150" cy="116" rx="44" ry="38"
        fill="rgba(255,255,255,.07)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="150" cy="82" rx="28" ry="24"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="132" cy="60" rx="14" ry="18"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <ellipse cx="168" cy="60" rx="14" ry="18"
        fill="rgba(255,255,255,.05)" stroke="rgba(240,168,32,.85)" stroke-width="2"/>
      <line x1="112" y1="150" x2="108" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="136" y1="153" x2="133" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="164" y1="153" x2="167" y2="181" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>
      <line x1="188" y1="150" x2="192" y2="178" stroke="rgba(240,168,32,.85)" stroke-width="6" stroke-linecap="round"/>`
  }
};
