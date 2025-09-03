"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
function AlternatingLogo() {
    var _a = react_1.useState(true), showYawning = _a[0], setShowYawning = _a[1];
    var _b = react_1.useState(false), isGlitching = _b[0], setIsGlitching = _b[1];
    react_1.useEffect(function () {
        // Toggle between logos every 5 seconds
        var intervalId = setInterval(function () {
            // Trigger glitch effect
            setIsGlitching(true);
            // After a short delay, change the logo
            setTimeout(function () {
                setShowYawning(function (prev) { return !prev; });
                // After changing, stop the glitch effect
                setTimeout(function () {
                    setIsGlitching(false);
                }, 300);
            }, 200);
        }, 5000);
        return function () { return clearInterval(intervalId); };
    }, []);
    // Random subtle glitch effect that happens occasionally
    react_1.useEffect(function () {
        var randomGlitch = function () {
            // Reduce frequency of random glitches (30% chance instead of 70%)
            var shouldGlitch = Math.random() > 0.7;
            if (shouldGlitch && !isGlitching) {
                setIsGlitching(true);
                // Shorter glitch duration for subtlety
                setTimeout(function () { return setIsGlitching(false); }, 100 + Math.random() * 150);
            }
            // Schedule next random glitch
            setTimeout(randomGlitch, 2000 + Math.random() * 5000);
        };
        var timeout = setTimeout(randomGlitch, 3000);
        return function () { return clearTimeout(timeout); };
    }, [isGlitching]);
    return (React.createElement("div", { className: "relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto" },
        React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
            React.createElement(framer_motion_1.motion.div, { key: showYawning ? "yawning" : "coming", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: "w-full " + (isGlitching ? "animate-glitch-subtle" : "") },
                React.createElement("div", { className: "relative aspect-[2/1] w-full" }, showYawning ? (React.createElement(image_1["default"], { src: "/images/yawning-logo.png", alt: "Yawningz Shots", fill: true, sizes: "(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw", className: "object-contain", priority: true })) : (React.createElement(image_1["default"], { src: "/images/coming-soon.png", alt: "Coming Soon", fill: true, sizes: "(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw", className: "object-contain", priority: true }))))),
        isGlitching && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "absolute inset-0 bg-red-500 mix-blend-screen opacity-10 animate-glitch-subtle" }),
            React.createElement("div", { className: "absolute inset-0 bg-blue-500 mix-blend-screen opacity-10 animate-glitch-subtle", style: { animationDelay: "0.03s" } })))));
}
exports["default"] = AlternatingLogo;
