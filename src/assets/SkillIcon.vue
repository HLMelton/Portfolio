<script>

export default {
    props: ['name'],
    name: 'SkillIcon'
}

</script>



<template>
<svg 
    v-if="name === 'Vue'" 
    version="1.1" 
    viewBox="0 0 261.76 226.69" 
    xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
        <g transform="translate(178.06 235.01)">
            <path
            d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
            fill="#41b883"/>
        </g>
        <g transform="translate(178.06 235.01)">
            <path
            d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
            fill="#34495e"/>
        </g>
    </g>
</svg>

<svg
    v-else-if="name === 'Vite'"
    viewBox="0 0 410 404"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
    d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
    fill="url(#paint0_linear)"/>
    <path
    d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
    fill="url(#paint1_linear)"/>
    <defs>
        <linearGradient
        id="paint0_linear"
        x1="6.00017"
        y1="32.9999"
        x2="235"
        y2="344"
        gradientUnits="userSpaceOnUse">
            <stop stop-color="#41D1FF" />
            <stop offset="1" stop-color="#BD34FE" />
        </linearGradient>
        <linearGradient
        id="paint1_linear"
        x1="194.651"
        y1="8.81818"
        x2="236.076"
        y2="292.989"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFEA83" />
        <stop offset="0.0833333" stop-color="#FFDD35" />
        <stop offset="1" stop-color="#FFA800" />
        </linearGradient>
    </defs>
</svg>

<svg 
    v-else-if="name === 'Tailwind'"
    viewBox="0 0 1000 1000" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
  <path
    d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z"
    fill="#07B6D5"
  />
  <path
    d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z"
    fill="#07B6D5"
  />
</svg>

<svg 
    v-else-if="name === 'Javascript'"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 630 630">
    <rect width="630" height="630" fill="#f7df1e" />
    <path
    d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
    />
</svg>

<svg
    v-else-if="name === 'Git'"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 97 97"
    enable-background="new 0 0 97 97"
    xml:space="preserve">
    <g>
        <path
        fill="#F05133"
        d="M92.71,44.408L52.591,4.291c-2.31-2.311-6.057-2.311-8.369,0l-8.33,8.332L46.459,23.19
        c2.456-0.83,5.272-0.273,7.229,1.685c1.969,1.97,2.521,4.81,1.67,7.275l10.186,10.185c2.465-0.85,5.307-0.3,7.275,1.671
        c2.75,2.75,2.75,7.206,0,9.958c-2.752,2.751-7.208,2.751-9.961,0c-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997
        c0.67,0.332,1.303,0.774,1.861,1.332c2.75,2.75,2.75,7.206,0,9.959c-2.75,2.749-7.209,2.749-9.957,0c-2.75-2.754-2.75-7.21,0-9.959
        c0.68-0.679,1.467-1.193,2.307-1.537V36.369c-0.84-0.344-1.625-0.853-2.307-1.537c-2.083-2.082-2.584-5.14-1.516-7.698
        L31.798,16.715L4.288,44.222c-2.311,2.313-2.311,6.06,0,8.371l40.121,40.118c2.31,2.311,6.056,2.311,8.369,0L92.71,52.779
        C95.021,50.468,95.021,46.719,92.71,44.408z"/>
    </g>
</svg>

<svg
    v-else-if="name === 'Github'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    preserveAspectRatio="none"
    fill="white">
    <path
    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
</svg>

<svg
    v-else-if="name === 'Firebase'"
    viewBox="0 0 111 151"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="false">
    <defs>
    <linearGradient
        x1="-3.48177083%"
        y1="17.0266727%"
        x2="100.833333%"
        y2="92.8868033%"
        id="linearGradient-1"
    >
        <stop stop-color="#FFFFFF" stop-opacity="0.1" offset="0%"></stop>
        <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
    </linearGradient>
    <path
        d="M95.7984919,33.6246194 C95.5859256,32.3610745 94.6848395,31.3206592 93.4615125,30.9262876 C92.2381855,30.5319161 90.8962602,30.8492378 89.9812105,31.7492661 L72.2727216,49.5651223 L58.2428077,23.0544463 C57.6801918,21.9189555 56.5194912,21.2001264 55.2486188,21.2001264 C53.9777463,21.2001264 52.8170458,21.9189555 52.2544298,23.0544463 L44.6406351,37.5458126 L25.3922776,1.91410025 C23.852409,-0.984173003 19.489448,-0.216983024 18.9761585,3.02226355 L0.497735304,121.16952 L50.0301752,148.873603 C53.1471684,150.578603 56.9223279,150.578603 60.0393211,148.873603 L109.999502,121.16952 L95.7984919,33.6246194 Z"
        id="path-2"
    ></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="styleguide" transform="translate(-664.000000, -1272.000000)">
        <g id="Group-16" transform="translate(40.000000, 1187.000000)">
        <g id="Group-9" transform="translate(114.000000, 0.000000)">
            <g id="Group-26" transform="translate(405.000000, 1.000000)">
            <g
                id="logo_lockup_firebase_vertical"
                transform="translate(105.193370, 83.977901)"
            >
                <g id="_Group_">
                <mask id="mask-3" fill="white">
                    <use xlink:href="#path-2"></use>
                </mask>
                <use
                    id="_Path_5"
                    fill="url(#linearGradient-1)"
                    fill-rule="nonzero"
                    xlink:href="#path-2"
                ></use>
                <g id="_Group_2" mask="url(#mask-3)">
                    <g transform="translate(-6.346125, -0.160154)">
                    <g
                        id="_Group_3"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <path
                        d="M6.84386044,121.329674 L25.4078319,3.18241769 C25.9211214,-0.0568288873 30.2840824,-0.824018866 31.823951,2.07425439 L50.9867602,37.7059667 L58.600555,23.2146005 C59.189165,22.0849984 60.360174,21.3760986 61.637518,21.3760986 C62.9148621,21.3760986 64.0858711,22.0849984 64.6744811,23.2146005 L116.345627,121.329674 L6.84386044,121.329674 Z"
                        id="_Path_"
                        fill="#FFA000"
                        fill-rule="nonzero"
                        ></path>
                        <g id="_Group_4" transform="translate(0.000000, 30.119310)">
                        <image
                            id="Bitmap"
                            opacity="0.12"
                            x="0"
                            y="0"
                            width="74.4269822"
                            height="94.6200974"
                            xlink:href="data:image/png;base64,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"
                        ></image>
                        <polygon
                            id="Shape"
                            fill="#F57C00"
                            fill-rule="nonzero"
                            points="70.8339555 45.1789654 50.901212 7.58665646 6.84386044 91.2103641"
                        ></polygon>
                        </g>
                    </g>
                    <g
                        id="_Group_5"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                        transform="translate(3.421930, 23.299844)"
                    >
                        <image
                        id="_Image_"
                        opacity="0.2"
                        x="0"
                        y="0"
                        width="119.767558"
                        height="131.27473"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACbCAYAAACwE3MdAAAABGdBTUEAA1teXP8meAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAFbBJREFUeAHtndly28jVx3sBQFIUJVm7l5loJlOTlH2V8gOMHyC3foXvNcZ+je8V/BLOdcqVq5mqpKamnMpkLInaKYkLgO78T5OgKIukSaDBtWGDDWLpbvT56SwNdJNrrZlbXAuM2gJi1BPdea4FqAU81wzz1wIcyzC7wHFLsBzDTkl90zynfFNXyF04uAUSUN4yxp9j3XnF+L9qjPgwy/cVpqvvmf4ZvPyIlahJjtlKHTC2WjLvfEALgfLDKyaq1ReCXV5Ktt6UrWZs3IqKFPqyIFV8VYrL5Y+K/cRiAucNVlpsVc8BY6sl88wHsLxjTLAXTJbOn3gnwW0gZSEoysgPZezFqiCkaCqhvFDroFXmreZZczU8OPgY/e09UzahcT5MnoK2kTfB8pqJ1X9854XRRVArRCuBXyhr0SrHQqww7Rc4j4WK/VhwXWeseV2L9XWgzm/Yx4M6e/Ux0u9ZbKMqlIfTMLZaMo98OrDc/P3AL4vLAvPEauTpDR3KLSbUI3gp65rzFaG1UIyHXLKa1upMRrIaqui0yNjlodhq7P/ll+j1O6Zs+DROw+QhaBt59sCysXFRbNRERWmxpWK2LwV7DFj2GOebnPGy5kxwpltM83PBxCclmOdJP24KFW74tWinak/DOGBsCNd2Hp/BEoZ8jQdiG77rE6n015qLr5kQjwHJltK6jDCJIqUGPNszQFPE/hiB960fiptCvVmvxizEcYU1s/PrgLEt7Kz59YEljOWO0uyp5PwPWrBvtGJ/ABR7iH0ecc5gecCLZg0UvYKNCPrmUit1Env8VLDiFVt7Jt+9/i1+jbyzmiUHTFYB27x+ACwCsACKA/gn31IK7fEExW6Bk1WojIAowHZDcK7gqFzBMd3A/oqnomIsuR/eaPFV1WihzLV1jwYyN6GlDIbAAof2ABblj6DiG5T2DOsu1g2sq/BhSmSGgEwJWqgMuMqAapULvqKZKMow9tbRV9PbwYfrUi8OmNRNZ/HC0WA5gOF5Cs2xAzjWkcL8sAAmyEOs68HYwFroQHFWgiZagdla0QBJCd8/a0byUYOZjr+stXYmKWsLZr1+TFhQ3JrxWzTzYWTaf/CgB4vkiI7gyxQQPZXMylSRxToQMEyrTcZ/NKdl+3AaJlv7Zbs6DSwMTu4dLGAHegV2CYCgO4ZD25BP09YyOFCKmShUwhV5vfNMoAOQzqNLUi9Ow6RuuowXWoCFagDlQgQgQRcetAw2yEwVOWDR0DCSM7/paW+1JflfM1aZLncaxkIjjp2FJVh6yiWtQSs68LiHNcBWQWONuAxYpGS9EYr3FiIlB0xPq09k0z4sSbUNMIiwScv4XOmAYdVc+SxW5qm2jUjJAZM09yTS/GAxPTEABVE188gskXYRWOEX48m275UjJWxESg6YSYBCZeQIi8meiqDuO4qWoGHwGKGoyI/RqtjicXBlKVJywFBr573kDAuqDx/XREDkw0hsBRBsUTBVwpcihx9jK1JyUdL8w2LugFQLRUr46EZKFFajh9hqpOQ0jGnonD7y1yy9FSdYaM01UnLA9Da5ze3JwpLU3ACTZ6TkgEma2mY6HVgmEik5YGyCQnlNCRZTNBWfc6TkgKGWtrVMERbcwkQiJRclLQYs5i7Igck7UnIaxjRyxo/papbeyuceKTlgeps7zfbswJLUPtdIyQGTNHOadPZgyT1ScsCkAYWumUFYTLWoajlGSg4YauVxlxmFBbeRe6TkoqTFgcXcSd6RktMw4wAzu5ql9y5yjZQcML1NPWx7PmBJ7iC3SMkBkzTxsHS+YMk1UnLADAOFjs0ZLKbKVO2cIiUHDLXwoGUOYcGt5BopuShpsWAxd5NnpOQ0TD9g5lOz9N5JbpGSA6a3mWl7/mFJ7iiXSMkBkzTvYsGSW6TkgEmAWRzNYu7I2KQcIiUHzIJplg7/fSMlDDkx45Q84flpxym5KGnBNEtXYZoNje4YJrFpZnQQNFMVxilF+O4HXJZSzOiw3BpmQWHpahly4WmcEuaNgXUCNDzA9GeBENKrh0oGYczHndFheYFZbFgMM4ClHSlxLSBoCX3jgyBMNa89hUl/L2NMcDbmspwmaQlgSTiASaLfysGsDpgHD3PHEDSAxxOY34F+2KLS82soyTXD0uXTMMsESztKIi0CP4ZgaZslTAzty7A9BcivY06WuFzALBEspCWIFHoISY6vmTMGU4AYxzfDFCDLA8ySwWJY6ZkCBL4LmSLMGp5tCpDl8GGWDxZSMEbD2B7YtvgaZklhMcR0rBK2rU0BstjALDcsHWY6obWlyRIXFxgHiwGGfrYCDq+1yRIXExgHS6JdupESdliZLHHxgHGwdGHBRt+HkFkmS1ysKMnB0guL2W73/dubLHFxNIyD5QEsnR2m/w7bViKlxQDGwTIIlmQ/QSPwGl7maeXnHxgHSwLFwNRmpDTfwDhYBkLSeyB5poR9mSOl+QXGwdLLxLBtq5HSfEZJDpZhgDw4ZjNSmj8N42B5AMQIO6xFSvMFjINlBDYGnmIlUpofYBwsA0kY5YCtSGk+gHGwjMLE0HNsRUqzD4yDZSgIIx60FinNdpTkYBmRhy+fZitSml0N42D5MgXjnWElUppNYBws46Ew+tmZI6XZA8bBMrr4xzzTRqQ0W8A4WMZEYLzTbURKswOMg2U86Y9/dt9IKRmnNOoUILMRJTlYxhd/iiuSSIlGQuLyVFOATF/DOFhSiD71JTSCINMUINMFxsGSWvJpL4SWaUdKKacAmZ5JcrCklXnm64yWSTkFyHQ0jIMls9DTZkChNa6lNdUUIJMHxsGSVtZWrjO0ZJgCZLLAOFisCD1DJvdC6zRTgEzOh3GwZJCzvUtJw2SZAmQyGsbBYk/i2XNKfJhUA9vyB8bBkl3E9nMgaFINbMsXGAeLfVFbyDHLQ8j8gHGwWBBtPlkkkRJyH3tgWz7AOFjykbSdXO9FSuiRCQBBcdQpQOxHSQ4WO2LNMZcskZJdDeNgyVHMVrNOHSnZA8bBYlWiE8gsVaRkBxgHywTka7eItJFSdmAcLHYlOaHc0kZK2YBxsExIvNaLSR0ppY+SHCzWpTjJDNNGSuk0jINlkrLNq6xUkdL4wDhY8hLgNPIdO1IaDxgHyzSEmluZaSKl0YFxsOQmuGllnCZSGg0YB8u0ZJpnuakipS9HSQ6WPIU21bzTRErDNYyDZaoCnUDhY0dKg4FxsExAXjNRxFiRUn9gHCwzIclJVGLcSOkhMA6WSchpZsoYN1K6D4yDZWYEOaGKjB0p3UVJvbCwi2It5GuBktv4scCnivEDzCPyRwyYOwCRTzE2d4cxtobtItPMx2t+BB7B6pY5a4G20LT5MXRU3UwBwjQvQd5FvPDr60DLUkvyv3buq61hCBYMOzj8B/PK4rKgPLHqN70tdQfLtw6WOSNh9Or2nQIEv5EeaCH9eqhkvRGK99W2QjDAvIV2OH/JxH5hx2clr1T39KNYsH2l9Nea6W9w+E6zaKdZRpfFfJwJLWOggZ4hHiS+eYozjyktA6VFLTI/AWhuRmB6Gf4cF3x1SWalGTQbbFUwuYlhcftMiGcYVomVPcYpW8i4As6KSD2klDk23TLnLYBACUaos3aEyvHrbUIDlhjrNm7wX7W2rOk423nFeLz+REa3RZ/7AvaLrYGyTa71NlTTJn2HpllBxrBxTCoaNeeWeW8BiJPBPcWqeYztCP5ohJ0R9EAMRQIxYykyVosVf2m+9Aj+PIy5t6I5j5XUsfZhjgJ8I4eW5kPDsEqjTqCzuIL+osIMlZ18XDInLUCaBFUlGOCishjfQuxq4Pstvl8jvYZ4sc2b3BNh2OKqIoX+gAO0dKOkui/16g1TKmhFOpJNxfktjteQNSmjMlaPSkLmRZBCsJCmoZFztHSS9hf3ObMtoCEzkh1plBhpC2kTXskNdl8gPYYpOsL2iVD6kmlR5wUZXvpSfV8xoLWBqb5n+qvvfo/Pw/WQyeItrNeF5upYKl2CliENAzWFjDXbABoV8FFGpgWYKx9pWwO1oXHgoKFmcKG/dVrhy5L50aHRINAkkOcVILnAsROt9SEsyH9go/4ruahGUBYF0WreXG3G1T8lwOCsnznXPzxj8clZscVu2HXRUycwW4IMFNRTA4Vcca0uuOA7KGgLBTxCAQAHQDEGcAx4BA4Bk6zYdMuUWyABhVLIkkUwDk1s1yE7WA5+ju+nSusTbB9BIRxCeL9zKT7pWFWlkrWGLDVbWx/jf78DMGAFfi2ygS5CJvzdCxL8ThDd8jIMzxqLFcAQ23BcdoTWu7hkD/psH0ptF07xFq4hjVPGfnKUfeTkIaMkenLgoFGmtBAgZsUHtIqxECFkVcdemB92ARmeQobHBAn2H4GBY9irKk4/YVKc8wa/gk+Lc6ut1z+Z6w0wbR+GqCFmfoJte1FtRZU9rVv1KIj9Rszjayk8mCh9hpPOcNY5AKIC91HgDlJABbgYW8GxAtJ74GAf6mS0Dg65Jc8WQFubEBllUGpAwT44tYy0yi1kdQVpnCOt4s/6EM8FPkEBHMLAHMOKnCoVXeCX0Gst0bjllZWGFx+HhgmCz2gWEiZlnSwdTfP/L5kMTg/kZuHab8ZeMfQbK+jNqcSRt8kl31EqBizsMQrZx6W7yG0Lha+j8AoqSNqGwDEhOHInxxj/HTRogzwXAwsa2ji0KMg4tGj/Ov5ia/iDvyQosP8Y8joEAp+EkIeIiKvSi84QLtX8sHhbkFHjrLkakhn6vw8mry4sVPlulERfjI2CpnmDE5+zj+rpSxb/evQMsbloqthrMJ/fGo0j9ZVWAl41O0PBp1h3cfU2Yu9N+D0b+F6BNoLGcY6xadd8P+gvntZ+Dm0NrsSFsQyanUBex/izPYKGOeJSHcdMnQouL1TDv9EyqrOGFz7dO4ya/zxR//6IswwRvRrlcw3Te2PQNm9xnHqB2QsmS8Un3lXrBk6zX4J3W2nBv+FCbpJ/Ay21i30wT3oXwOzAvG1i3yMUCMeYOce4t13tbSegUNpxaI3pqWNHDeKD6dFnMCF4CsQBB6ti3zG646paxWcB/BTsq6kgrK8F5Wa98XtE5udnQPIjAXjP9NxV+r5Jutt/t9UB54dXTNR/+05eFy59L24UmqG/gkC+oj1vA52Fm1B321qrXZimPSC2Bz6/6BgDKOff3LX0qFtdULAx1KGF2I9gio44F2SGTmApznjU9lMKfngbyWJztbkelp79Ev/tPVPDQEkq92VgcCaYIcHSwhP/xveugoAFBVZolvBsqsKVt66Z2kLgtQsQ9qHPHqPCxjHGPgClSdusYHX+DbXkmAva1PgouIzSO1AShxZdH12HlhxZ+Cg4r+PQilMtokuPI5RuFuot1mqG0Vqr109B/qRUOmIeXLn7PsyA85KMwE3Xv/m27d+EVDjAqcMxvgYYNYBzCTf3AmrvAprmAhrnArAYxxjkbeBGnH8zoJ2H7O7bQwvp9ji0xpeEJlGH6J3/BHfhEIaqqmR8znl05beKt0ZW8FP+DD/l1w9n9/yUL5LSqdxIGubBjXTMFPk3AEfAMfZQH1/EXkn7vIxKbkjSNkrAp2H7eAlrF51De0LAbKHjDwA6/+ZBo/bdQXKkFT36D3poaxDeBf5Iz3AKHFp068OhhY444oIcWnEqYnnBQ32j4NAGjZXw273fAApTX/JT+takszMdMEmOPeAMcow1F1tS8m2l1R66jg1Ao/g3KIK0JK3LuCSgUDoxh3aUhs4GTFJCB5x+jjE6YSoxHONB/g3g6Xb8Ibtl7/jrgoKNOz+lTw9tHg5tIs5hqR1gUAKYGegYu46/YSIwanQmHNrhtWwfHcnpHSWjYY6x6/gb2oIz49AOrWXnoDUN86CwEfybJe/4S8zPzDi0D2TYZ0d+wCSFDfFvsnb8oYh5dIwTUCidKYc2EdmwNH9gSKpD/JtROv4WxDHugoKNmXRoh4GSHJsIMN3CAM4b8PN5/w31GJNjjD6FNR57jxbpiThU4Nw4tImchqXWnN5hhSTHOo4x+u7wYPMD08/Zb+rPL1mEjj+8Miia6PhroOPvZoGeiM+VQ5vIaVg6UQ3zoCIETkfjDOr4m1PHODE/c+XQPpBPnx3TBSapUAecfh1/WR1jmATqHyLneBJLAgqlc+fQjtJAswEMagpmBnb8jeIYT/mJeBcUbMytQztXwCSVJXDedMxU74PNUR1jkHfviTiyym0ozKI5tIkMhqUTdXqHVSQ5lsYxxhPxczwRP0U4socx4dt4628SQ2EWzqFNZDAsnRmTNLCS0Dhfcown/EQ8MT8L59AOlEHPgdkHJqlsB5x+jvGEnognoFC6kA5t0tTD0vkBBndB/g1JizY/f1U0zRNx5BXADxllqC9eicU/3h3C0XdQ2LReOWg3yWQ+5wqYpEkInDd9HON+b/zhrVK8kI4RmzRyEy+qAzmMaMBQGM5W8R3vGGvzDg7yphGbcIFM1yxKMD20+IYHE4h88EEzHZgx5th3i2sn8g4tVWCWlplzekdpnH6OcfCCxRgKE2EoTMtr+Q3JxA2GwtSYkDRS8xTa5KQ9FIbtcgHHWMEx5noD5RE4mAVFI5piGPgHlEBIR5NR0p4WQ2FgGMe0GJpftweFTeYd2lHaY5LnzKWGedBA0AdvIeh+/k2/jj96VRSdJXsgA5M76keggkZsGk2DFAEXIWOgwWkcWkW3sMOM98FuGu9ziiIn8g7tg3ud8o7FAAaNCAEO9G8+7/jDSIYdkIBJBZQxUzA31HdDQ2AwiRImFIC3gpQGc4E3HrZhac+hApgACwaDMV7NOihsyrJPVfzCAJPcPYHzBvwMeiJOY8RDeiLO1LaZvkRhXDgX69ApZczpVgB2HibSASdwWzA+A2C0AA7NenANKjEJgTrDkTMpxZmKoksavJ52UFhS53lKFw6YbuND2m/7gLOi/WLksTKGvawpoUizrKNDpYK0hIl0AIzAlCXwUqBkMJIzghuMSbt0Qwl5y1lUkzG/jLWuBQV9nXVQWLeuc7SxuMAkQugBh56In2OMeHB6G5TLfjEMxQr3wlIUi5LPRYCRDTS3H81xA2CgVwSPMRNpyHTcwqD1JmbmquswrgtRbCjVaH0+1ucNXYMlKXoR08UHJpFaBxz2ionn1ReiVDz36ud1P/JKfixbvtdSXsNXmJe2IELYHF8AFUxawUIRR4GICqEXhaV65GP0+s1NOaJhpo8yDgpLqjZP6fIAA6mAGdIcjExVGxzE3jcHYnurJWi261YzFjeAheZjowVqRQcFqUpFX9WPhD4sFlVh/Re1jKC0W4RU72Jr0OQ+76W94JBzzF5jrhJMipFMXkxz0n7oXPE9Zo+sYiIThrn1kyGmMFnG9tzLdEm+LCUwvbJN4OndRxroRzDRu2+ZIbnXDsuoYXobwG2P1wL/Azyrjq9QHp0DAAAAAElFTkSuQmCC"
                        ></image>
                        <g
                        id="_Group_6"
                        transform="translate(3.421930, 7.387755)"
                        fill-rule="nonzero"
                        fill="#FFCA28"
                        >
                        <path
                            d="M109.501767,90.6420753 L95.3007566,3.09717436 C95.0881903,1.8336295 94.1871042,0.793214154 92.9637772,0.398842606 C91.7404502,0.00447105695 90.3985249,0.321792836 89.4834752,1.22182108 L0,90.6420753 L49.5324399,118.346158 C52.6494331,120.051158 56.4245926,120.051158 59.5415858,118.346158 L109.501767,90.6420753 Z"
                            id="_Path_2"
                        ></path>
                        </g>
                    </g>
                    <path
                        d="M102.144617,33.7847735 C101.932051,32.5212286 101.030965,31.4808133 99.8076376,31.0864418 C98.5843106,30.6920702 97.2423854,31.009392 96.3273356,31.9094202 L78.6188467,49.7252764 L64.5889329,23.2146005 C64.0263169,22.0791096 62.8656164,21.3602806 61.5947439,21.3602806 C60.3238715,21.3602806 59.1631709,22.0791096 58.600555,23.2146005 L50.9867602,37.7059667 L31.7384028,2.07425439 C30.1985342,-0.824018866 25.8355731,-0.0568288873 25.3222836,3.18241769 L6.84386044,121.329674 L6.75831218,121.329674 L6.84386044,121.414918 L7.35714997,121.670648 L78.5332985,50.5777097 L96.3273356,32.8470969 C97.2423854,31.9470686 98.5843106,31.6297468 99.8076376,32.0241184 C101.030965,32.4184899 101.932051,33.4589053 102.144617,34.7224501 L116.174531,121.414918 L116.345627,121.329674 L102.144617,33.7847735 Z M7.01495695,121.159188 L25.4078319,4.034851 C25.9211214,0.795604422 30.2840824,0.0284144437 31.823951,2.9266877 L50.9867602,38.5584 L58.600555,24.0670338 C59.189165,22.9374317 60.360174,22.2285319 61.637518,22.2285319 C62.9148621,22.2285319 64.0858711,22.9374317 64.6744811,24.0670338 L78.362202,49.9810064 L7.01495695,121.159188 Z"
                        id="_Compound_Path_"
                        fill-opacity="0.2"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                    ></path>
                    <path
                        d="M66.3854462,148.181324 C63.2684531,149.886324 59.4932935,149.886324 56.3763003,148.181324 L6.92940869,120.562484 L6.84386044,121.329674 L56.3763003,149.033757 C59.4932935,150.738757 63.2684531,150.738757 66.3854462,149.033757 L116.345627,121.329674 L116.260079,120.562484 L66.3854462,148.181324 Z"
                        id="_Path_3"
                        fill="#A52714"
                        fill-rule="nonzero"
                        opacity="0.2"
                    ></path>
                    </g>
                </g>
                <polygon
                    id="_Path_4"
                    mask="url(#mask-3)"
                    points="-26.8777064 -6.69547618 137.374944 -6.69547618 137.374944 156.971719 -26.8777064 156.971719"
                ></polygon>
                <path
                    d="M95.7984919,33.6246194 C95.5859256,32.3610745 94.6848395,31.3206592 93.4615125,30.9262876 C92.2381855,30.5319161 90.8962602,30.8492378 89.9812105,31.7492661 L72.2727216,49.5651223 L58.2428077,23.0544463 C57.6801918,21.9189555 56.5194912,21.2001264 55.2486188,21.2001264 C53.9777463,21.2001264 52.8170458,21.9189555 52.2544298,23.0544463 L44.6406351,37.5458126 L25.3922776,1.91410025 C23.852409,-0.984173003 19.489448,-0.216983024 18.9761585,3.02226355 L0.497735304,121.16952 L50.0301752,148.873603 C53.1471684,150.578603 56.9223279,150.578603 60.0393211,148.873603 L109.999502,121.16952 L95.7984919,33.6246194 Z"
                    id="_Path_5"
                    fill="url(#linearGradient-1)"
                    fill-rule="nonzero"
                    mask="url(#mask-3)"
                ></path>
                </g>
            </g>
            </g>
        </g>
        </g>
    </g>
    </g>
</svg>

<svg
    v-else-if="name === 'VSCode'"
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100"
            height="100"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z"
              fill="#0065A9"
            />
            <g filter="url(#filter0_d)">
              <path
                d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z"
                fill="#007ACC"
              />
            </g>
            <g filter="url(#filter1_d)">
              <path
                d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z"
                fill="#1F9CF0"
              />
            </g>
            <g style="mix-blend-mode: overlay" opacity="0.25">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z"
                fill="url(#paint0_linear)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-8.39411"
              y="15.8291"
              width="116.727"
              height="92.2456"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.16667" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="overlay"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x="60.4167"
              y="-8.07558"
              width="47.9167"
              height="116.151"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4.16667" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="overlay"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="49.9392"
              y1="0.257812"
              x2="49.9392"
              y2="99.7423"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
</template>