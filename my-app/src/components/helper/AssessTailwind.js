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
    backgroundAttachment: /bg-(fixed|local|scroll)/,
    backgroundBlendMode: "bg-blend-",
    backgroundClip: "bg-clip-",
    backgroundColor: /bg-(.*?)(?=inherit|current|transparent|black|white|0)/,
    backgroundImage: "bg-gradient-",
    backgroundOrigin: "bg-origin-",
    backgroundPosition: /bg-(bottom|center|left|right|top)(-)?(bottom|top)?/,
    backgroundRepeat: /bg-(no-)?(repeat)(-)?(x|y|round|space)?/,
    backgroundSize: /bg-(auto|cover|contain)/,
    blur: "blur-",
    borderCollapse: /border-(collapse|separate)/,
    borderColor: /border-(.*?)(?=inherit|current|transparent|black|white|0)/,
    borderRadius: "rounded",
    borderSpacing: "border-spacing-",
    borderStyle: /border-(solid|dashed|dotted|double|hidden|none)/,
    borderWidth: /border-([xysetrbl]-)?(0|2|4|6|8)/,
    boxDecorationBreak: "box-decoration-",
    boxShadow: /shadow(-)?(sm|md|lg|xl|2xl|inner|none)?/,
    boxShadowColor: /shadow-(.*?)(?=inherit|current|transparent|black|white|0)/,
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
    divideColor: /divide-(.*?)(?=inherit|current|transparent|black|white|0)/,
    divideStyle: /divide-(solid|dashed|dotted|double|none)/,
    divideWidth: /divide-(?:[xy])(-([0]|[2]|[4]|[6]|[8]))?/,
    dropShadow: "drop-shadow-",
    fill: "fill-",
    flex: "flex",
    flexBasis: "basis-",
    flexDirection: "flex-",
    flexGrow: "grow",
    flexShrink: "shrink",
    flexWrap: /flex-(no)?(wrap)(-)?(reverse)?/,
    float: "float-",
    fontFamily: /font-(sans|serif|mono)/,
    fontSize: /text-(?:(xs|sm|base|lg|xl)|([2-9]xl))/,
    fontSmoothing: /(subpixel-?)antialiased/,
    fontStyle: /italic|not-italic/,
    fontVariantNumeric:
      /normal-nums|ordinal|slashed-zero|lining-nums|oldstyle-nums|proportional-nums|tabular-nums|diagonal-fractions|stacked-fractions/,
    fontWeight:
      /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
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
    listStylePosition: /list-(inside|outside)/,
    listStyleType: /list-(none|disc|decimal)/,
    margin: "m-",
    maxHeight: "max-h-",
    maxWidth: "max-w-",
    minHeight: "min-h-",
    minWidth: "min-w-",
    mixBlendMode: "mix-blend-",
    objectFit: /object-(contain|cover|fill|none|scale-down)/,
    objectPosition:
      /object-(bottom|center|left|left-bottom|left-top|right|right-bottom|right-top|top)/,
    opacity: "opacity-",
    order: "order-",
    outlineColor:
      /outline-(.*?)(?=[0]|inherit|current|transparent|black|white)/,
    outlineOffset: "outline-offset-",
    outlineStyle: /outline-(?:(dashed|none|dotted|double))/,
    outlineWidth: /outline-([0]|[1]|[2]|[4]|[8])(?!\d)/,
    overflow: "overflow-",
    overscrollBehavior: "overscroll-",
    padding: "p-",
    placeContent: "place-content-",
    placeItems: "place-items-",
    placeSelf: "place-self-",
    placeholder: "placeholder:",
    pointerEvents: "pointer-events",
    position: /static|fixed|absolute|relative|sticky/,
    resize: "resize",
    ringColor: /ring-(.*?)(0|inherit|current|transparent|black|white)/,
    ringOffsetColor:
      /ring-offset-(.*?)(?=[0]|inherit|current|transparent|black|white)/,
    ringOffsetWidth: /ring-offset-([0-2]|[4]|[8])(?!\d)/,
    ringWidth: /ring|ring-([0-2]|4|8|inset)(?!\d)/,
    rotate: "rotate-",
    saturate: "saturate-",
    scale: "scale-",
    scrollBehavior: "scroll-",
    scrollMargin:
      /scroll-m([xyestrbl]?)-(([0]|(0\.5)|(1\.5)|(2\.5)|(3\.5)|[4-9]|(10)|(11)|(12)|(14)|(16)|(20)|(24)|(28)|(32)|(36)|(40)|(44)|(48)|(52)|(56)|(60)|(64)|(72)|(80)|(96)|px))(?!\d)/,
    scrollPadding: "scroll-p",
    scrollSnapAlign: /snap-(start|end|center|align-none)/,
    scrollSnapStop: "snap-(normal|always)",
    scrollSnapType: /snap-(none|[xy]|both|mandatory|proximity)(?!\w)/,
    sepia: "sepia",
    size: "size-",
    skew: "skew-",
    space: "space-",
    stroke: /stroke-(.*?)(?=[0]|inherit|current|transparent|black|white|none)/,
    strokeWidth: /stroke-[0-2]/,
    tableLayout: "table-",
    textAlign: /text-(left|center|right|justify|start|end)/,
    textColor: /text-(.*?)([0]|inherit|current|transparent|black|white)/,
    textDecoration: /(underline|overline|line-through|no-underline)(?!\w)/,
    textDecorationColor:
      /decoration-(.*?)(?=[0]|inherit|current|transparent|black|white)/,
    textDecorationStyle: /decoration-(solid|double|dotted|dashed|wavy)(?!\w)/,
    textDecorationThickness: /decoration-(auto|from-font|[0-8])(?!\d)/,
    textIndent: "indent-",
    textOverflow: /(truncate|text-ellipsis|text-clip)(?!\w)/,
    textTransform: /(undercase|lowercase|capitalize|normal-case)(?!\w)/,
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
    visibility: /(visible|invisible|collapse)(?!w)/,
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
          // reformat tailwind camelCase to look more like CSS
          let tailwindKeywordSplit = tailwindKeyword.split(/(?=[A-Z])/);
          tailwindKeyword = tailwindKeywordSplit.join("-").toLowerCase();

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
