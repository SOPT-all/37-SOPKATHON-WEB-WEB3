import type { SVGProps } from 'react';
const SvgUnionBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 79 153'
    {...props}
  >
    <g filter='url(#Union-bottom_svg__a)'>
      <path
        fill='#37BC69'
        d='M27.701 147.088c-8.879 0-26.73-4.214-20.972-16.864 5.76-12.651 33.674-19.12 49.011-42.954C71.078 63.437 66.77 5.365 69.468 5.61c2.697.243 6.154 52.807 1.61 77.515-8.64 46.973-34.498 63.964-43.377 63.964'
      />
      <path
        fill='url(#Union-bottom_svg__b)'
        d='M27.701 147.088c-8.879 0-26.73-4.214-20.972-16.864 5.76-12.651 33.674-19.12 49.011-42.954C71.078 63.437 66.77 5.365 69.468 5.61c2.697.243 6.154 52.807 1.61 77.515-8.64 46.973-34.498 63.964-43.377 63.964'
      />
      <path
        fill='url(#Union-bottom_svg__c)'
        fillOpacity={0.5}
        d='M27.701 147.088c-8.879 0-26.73-4.214-20.972-16.864 5.76-12.651 33.674-19.12 49.011-42.954C71.078 63.437 66.77 5.365 69.468 5.61c2.697.243 6.154 52.807 1.61 77.515-8.64 46.973-34.498 63.964-43.377 63.964'
      />
    </g>
    <defs>
      <linearGradient
        id='Union-bottom_svg__b'
        x1={69.582}
        x2={62.095}
        y1={23.101}
        y2={110.761}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FEBD79' stopOpacity={0.6} />
        <stop offset={1} stopColor='#5BC182' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='Union-bottom_svg__c'
        x1={46.923}
        x2={3.978}
        y1={122.352}
        y2={174.407}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' stopOpacity={0} />
        <stop offset={1} stopColor='#fff' />
      </linearGradient>
      <filter
        id='Union-bottom_svg__a'
        width={78.892}
        height={152.696}
        x={0}
        y={0}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feTurbulence
          baseFrequency='2.1398472785949707 2.1398472785949707'
          numOctaves={3}
          seed={1322}
          type='fractalNoise'
        />
        <feDisplacementMap
          width='100%'
          height='100%'
          in='shape'
          result='displacedImage'
          scale={11.216}
          xChannelSelector='R'
          yChannelSelector='G'
        />
        <feMerge result='effect1_texture_106_9328'>
          <feMergeNode in='displacedImage' />
        </feMerge>
      </filter>
    </defs>
  </svg>
);
export default SvgUnionBottom;
