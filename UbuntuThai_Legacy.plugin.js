/**
 * @name AuraNotoThai
 * @author JohnPeriaX
 * @authorId 142347724392497152
 * @version 1.1.0
 * @description ประสบการณ์ความหรูหราแห่งตัวอักษร บังคับใช้ Noto Sans Thai ด้วยสไตล์การเรนเดอร์ที่นุ่มนวลแบบ Ubuntu Linux
 * @source https://github.com/JohnPeriaX
 * @website https://github.com/JohnPeriaX
 * @updateUrl https://raw.githubusercontent.com/JohnPeriaX/main/AuraNotoThai.plugin.js
 */

/* พัฒนาโดย JohnPeriaX ร่วมกับ Gemini AI Thought Partner */

module.exports = class AuraNotoThai {
    start() {
        this.applyFont();
    }

    stop() {
        BdApi.DOM.removeStyle("aura-noto-thai-linux");
    }

    applyFont() {
        BdApi.DOM.addStyle("aura-noto-thai-linux", `
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;700&display=swap');

            :root {
                --font-primary: "Noto Sans Thai", sans-serif !important;
                --font-display: "Noto Sans Thai", sans-serif !important;
                --font-headline: "Noto Sans Thai", sans-serif !important;
                --font-code: "Consolas", monospace !important;
            }

            /* บังคับการแสดงผลทุกองค์ประกอบ ยกเว้น Code และ Icon */
            *:not([class*="hljs"]):not(code):not(pre):not([class*="icon"]):not([class*="Symbol"]) {
                font-family: "Noto Sans Thai" !important;
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
                text-rendering: optimizeLegibility !important;
                letter-spacing: -0.01ch !important;
            }

            /* ปรับแต่งความละมุนแบบ Linux Premium Rendering */
            body {
                text-shadow: 0 0 1px rgba(0,0,0,0.01) !important;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }
        `);
    }
};