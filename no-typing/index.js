(function(t){"use strict";const{instead:a}=vendetta.patcher,o=vendetta.metro.findByProps("startTyping"),e=["startTyping","stopTyping"].map(n=>a(n,o,()=>{})),r=()=>e.forEach(n=>n());return t.onUnload=r,t})({});