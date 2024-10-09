import { useLayoutEffect } from "react";
import gsap from "gsap";

const useFromRightGsapAnimation = (selectors: string[], options: gsap.TweenVars) => {
    useLayoutEffect(() => {
        const tween = gsap.fromTo(
            selectors,
            {
                x: "100%",
                opacity: 0,
                rotate: "0deg",
            },
            {
                ...options,
                x: 0,
                opacity: 1,
                ease: "power3.out",
                stagger: 0.2,
            }
        );

        return () => {
            tween.kill();
        };
    }, [selectors, options]);
};

export default useFromRightGsapAnimation;
