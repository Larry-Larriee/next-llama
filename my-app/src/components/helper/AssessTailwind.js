import React from "react";

export default function AssessTailwind({ userSolution }) {
  let tailwindKeywords = {
    accentColor: "accent-",
    alignContent: "content-",
    alignItems: "items-",
    alignSelf: "self-",
    animation: "animate-",
    appearance: "appearance-",
    aspectRatio: "aspect-",
    backdropBlur: "backdrop-blur-",
    backdropBrightness: "backdrop-brightness-",
    backdropContrast: "backdrop-contrast-",
    backdropGrayscale: "backdrop-grayscale-",
    backdropHueRotate: "backdrop-hue-rotate-",
    backdropInvert: "backdrop-invert-",
    backdropOpacity: "backdrop-opacity-",
    backdropSaturate: "backdrop-saturate-",
    backdropSepia: "backdrop-sepia-",
    backgroundAttachment: "bg-regex",
    backgroundBlendMode: "bg-blend-",
    backgroundClip: "bg-clip-",
    backgroundColor: "bg-regex",
    backgroundImage: "bg-gradient-",
    backgroundOrigin: "bg-origin-",
    backgroundPosition: "bg-regex",
    backgroundRepeat: "bg-regex",
    backgroundSize: "bg-regex",
    blur: "blur-",
    borderCollapse: "border-regex",
    borderColor: "border-regex",
    borderRadius: "rounded",
    borderSpacing: "border-spacing-",
    borderStyle: "border-regex",
    borderWidth: "border-regex",
    boxDecorationBreak: "box-decoration-",
    boxShadow: "shadow-regex",
    boxShadowColor: "shadow-regex",
    boxSizing: "box-",
    breakAfter: "break-after-",
    breakBefore: "break-before-",
    breakInside: "break-inside-",
    brightness: "brightness-",
    captionSide: "caption-",
    caretColor: "caret-",
    clear: "clear-",
    columns: "columns-",
    container: "container",
    content: "content-",
    contrast: "contrast-",
    cursor: "cursor-",
    divideColor: "divide-regex",
    divideOpacity: "divide-regex",
    divideStyle: "divide-regex",
    divideWidth: "divide-regex",
    dropShadow: "drop-shadow-",
    fill: "fill-",
    flex: "flex",
    flexBasis: "basis-",
    flexDirection: "flex-",
    flexGrow: "grow",
    flexShrink: "shrink",
    flexWrap: "flex-regex",
    float: "float-",
    fontFamily: "font-",
    fontSize: "text-regex",
    fontSmoothing: "regex-antialiased",
    fontStyle: "regex-italic",
    fontVariantNumeric: "regex-nums",
    fontWeight: "text-regex",
    forcedColorAdjust: "forced-color-adjust-",
    gap: "gap-",
    gradientColorStops: "from-",
    grayscale: "grayscale",
    gridAutoColumns: "auto-cols-",
    gridAutoFlow: "grid-flow-",
    gridAutoRows: "auto-rows-",
    gridColumnSpan: "col-span-",
    gridColumnEnd: "col-end-",
    gridColumnStart: "col-start-",
    gridRowSpan: "row-span-",
    gridRowEnd: "row-end-",
    gridRowStart: "row-start-",
    gridTemplateColumns: "grid-cols-",
    gridTemplateRows: "grid-rows-",
    height: "h-",
    hueRotate: "hue-rotate-",
    hyphens: "hypens-",
    invert: "invert",
    isolation: "isolate",
    justifyContent: "justify-",
    justifyItems: "justify-items-",
    justifySelf: "justify-self-",
    letterSpacing: "tracking-",
    lineClamp: "line-clamp-",
    lineHeight: "leading-",
    listStyleImage: "list-image-none",
    listStylePosition: "list-regex",
    listStyleType: "list-regex",
    margin: "m-",
    maxHeight: "max-h-",
    maxWidth: "max-w-",
    minHeight: "min-h-",
    minWidth: "min-w-",
    mixBlendMode: "mix-blend-",
    objectFit: "object-regex",
    objectPosition: "object-regex",
    opacity: "opacity-",
    order: "order-",
    outlineColor: "outline-regex",
    outlineOffset: "outline-offset-",
    outlineStyle: "outline-regex",
    outlineWidth: "outline-regex",
    overflow: "overflow-",
    overscrollBehavior: "overscroll-",
    padding: "p-",
    placeContent: "place-content-",
    placeItems: "place-items-",
    placeSelf: "place-self-",
    placeholder: "placeholder:",
    pointerEvents: "pointer-events",
    position: "regex",
    resize: "resize",
    ringColor: "ring-regex",
    ringOffsetColor: "ring-offset-regex",
    ringOffsetWidth: "ring-offset-regex",
    ringWidth: "ring-regex",
    rotate: "rotate-",
    saturate: "saturate-",
    scale: "scale-",
    scrollBehavior: "scroll-",
    scrollMargin:
      /scroll-m([xyestrbl]?)-(([0]|(0\.5)|(1\.5)|(2\.5)|(3\.5)|[4-9]|(10)|(11)|(12)|(14)|(16)|(20)|(24)|(28)|(32)|(36)|(40)|(44)|(48)|(52)|(56)|(60)|(64)|(72)|(80)|(96)|px))/,
    scrollPadding: "scroll-p",
    scrollSnapAlign: /snap-(start|end|center|align-none)/,
    scrollSnapStop: "snap-(normal|always)",
    scrollSnapType: /snap-(none|[xy]|both|mandatory|proximity)/,
    sepia: "sepia",
    size: "size-",
    skew: "skew-",
    space: "space-",
    stroke: /stroke-(.*?)(?=[0]|inherit|current|transparent|black|white)/,
    strokeWidth: /stroke-[0-2]/,
    tableLayout: "table-",
    textAlign: /text-(left|center|right|justify|start|end)/,
    textColor: /text-(.*?)(?=[0]|inherit|current|transparent|black|white)/,
    textDecoration: /underline|overline|line-through|no-underline/,
    textDecorationColor:
      /decoration-(.*?)(?=[0]|inherit|current|transparent|black|white)/,
    textDecorationStyle: /decoration-(solid|double|dotted|dashed|wavy)/,
    textDecorationThickness: /decoration-(auto|from-font|[0-8])/,
    textIndent: "indent-",
    textOverflow: /truncate|text-ellipsis|text-clip/,
    textTransform: /undercase|lowercase|capitalize|normal-case/,
    textUnderlineOffset: "underline-",
    textWrap: /text-(wrap|nowrap|balance|pretty)/,
    touchAction: "touch-",
    transform: "transform-",
    transformOrigin: "origin-",
    transitionDelay: "delay-",
    transitionDuration: "duration-",
    transitionProperty: "transition",
    transitionTimingFunction: "ease-",
    translate: "translate-",
    userSelect: "select-",
    verticalAlign: "align-",
    visibility: /decoration-([sw]|double|dotted|dashed)/,
    whitespace: "whitespace-",
    width: "w-",
    willChange: "will-change-",
    wordBreak: "break-",
    zIndex: "z-",
  };

  let included = [];

  // for...in allows you to iterate over js objects
  // includes returns a boolean and does not allow regex
  // search returns an integer and allows regex
  for (let tailwindKeyword in tailwindKeywords) {
    if (
      typeof tailwindKeywords[tailwindKeyword] === "string" &&
      userSolution.includes(tailwindKeywords[tailwindKeyword])
    ) {
      included.push(tailwindKeyword);
    }
    // check if the tailwind keyword is regex
    // In your code, if the if condition was true and the code within it executed, the else if condition wouldn't be evaluated at all. However, if the first condition in the if was false but the typeof part was true, the else if would be evaluated because the if block didn't execute fully.
    if (
      typeof tailwindKeywords[tailwindKeyword] === "object" &&
      userSolution.search(tailwindKeywords[tailwindKeyword]) !== -1
    ) {
      included.push(tailwindKeyword);
    }
  }

  return (
    <>
      {
        // map will return a new array with all the list elements that were created in the callback
        // react will automatically use the array and render all the list elements
        included.map((tailwindKeyword) => {
          return (
            <li key={tailwindKeyword}>
              <p className="text-lg text-white">{tailwindKeyword}</p>
            </li>
          );
        })
      }
    </>
  );
}
