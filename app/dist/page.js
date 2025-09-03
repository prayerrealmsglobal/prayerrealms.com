"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var particles_background_1 = require("@/components/particles-background");
var image_1 = require("next/image");
function Home() {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted)
        return null;
    return (React.createElement("main", { className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black bg-grid bg-noise" },
        React.createElement(particles_background_1["default"], null),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" }),
        React.createElement("div", { className: "container relative z-10 px-4 py-10 mx-auto flex flex-col items-center justify-center" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "w-full animate-float" }),
            React.createElement(image_1["default"], { className: "max-w-16 mx-auto text-center", src: "/images/prayer-realms-white.png", alt: "Description", width: 500, height: 100 }),
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.6 }, className: "flex gap-4 mt-12" },
                React.createElement(button_1.Button, { variant: "ghost", size: "icon", className: "rounded-full cursor-pointer !text-[#ec1c24] !hover:text-[#f05a28] !hover:bg-red-500/10 animate-glitch-hover" },
                    React.createElement(lucide_react_1.Instagram, { className: "h-5 w-5" }),
                    React.createElement("span", { className: "sr-only" }, "Instagram")),
                React.createElement(button_1.Button, { variant: "ghost", size: "icon", className: "rounded-full cursor-pointer !text-[#ec1c24] !hover:text-[#f05a28] !hover:bg-red-500/10 animate-glitch-hover" },
                    React.createElement(lucide_react_1.Twitter, { className: "h-5 w-5" }),
                    React.createElement("span", { className: "sr-only" }, "Twitter")),
                React.createElement(button_1.Button, { variant: "ghost", size: "icon", className: "rounded-full cursor-pointer !text-[#ec1c24] !hover:text-[#f05a28] !hover:bg-red-500/10 animate-glitch-hover" },
                    React.createElement(lucide_react_1.Facebook, { className: "h-5 w-5" }),
                    React.createElement("span", { className: "sr-only" }, "Facebook")),
                React.createElement(button_1.Button, { variant: "ghost", size: "icon", className: "rounded-full cursor-pointer !text-[#ec1c24] !hover:text-[#f05a28] !hover:bg-red-500/10 animate-glitch-hover" },
                    React.createElement(lucide_react_1.Mail, { className: "h-5 w-5" }),
                    React.createElement("span", { className: "sr-only" }, "Email"))),
            React.createElement("h1", { className: "text-4xl !mt-8 !font-bold text-white text-center capitalize" }, "COMING SOON")),
        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.8 }, className: "absolute bottom-4 w-full text-center text-xs text-[#ec1c24]/70" },
            React.createElement("p", null,
                "\u00A9 ",
                new Date().getFullYear(),
                " PrayerRealms Global. All rights reserved.")),
        React.createElement("div", { className: "fixed bottom-6 right-6 z-20" },
            React.createElement(button_1.Button, { variant: "outline", size: "icon", className: "rounded-full bg-red-600/10 border-red-500/30 hover:bg-red-600/20 text-[#ec1c24] animate-spin-slow" },
                React.createElement(lucide_react_1.Sparkles, { className: "h-5 w-5" }),
                React.createElement("span", { className: "sr-only" }, "Effects")))));
}
exports["default"] = Home;
