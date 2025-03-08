// SignatureAnimation.js
import React from 'react';
import './SignatureAnimation.css';

const SignatureAnimation = () => {
  return (
    <div className="signature-container">
      <svg
        id="signature"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250 100"  // Adjust based on your SVG's dimensions
      >
        {/* First stroke */}
        <path
          className="signature-path"
          d="M 6.4071701,26.148919 15.65717,1.1489181
c 0,0 -1.25,4.0625 -2,8.000001 -0.75,3.9374999 0,19.7499999 0,19.7499999 0,0 0.75,20.25 1.5625,28.250001 0.8125,8 1.625,25.125 0.5625,27.25 -1.0625,2.124998 -7.0624999,-4.125 -8.2499999,-6.5 -1.1875,-2.375 -6.0000002,-9.9375 -6.1875002,-17.3125 -0.1875,-7.375 14.3750001,-15.562501 14.8750001,-16.562501"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Second stroke */}
        <path
          className="signature-path"
          d="m 22.362251,39.774755 0.883884,-0.618718"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Third stroke */}
        <path
          className="signature-path"
          d="m 35.996293,6.0164151
c 0.881609,1.4796637 0.793449,2.1701727 0.793449,3.1566157 0,0.9864422 0.705288,19.1369762 -0.969771,37.7807322 -1.675058,18.643757 -0.793448,-25.351562 -1.410575,-31.270215 -0.617127,-5.9186512 -0.440805,-3.156614 0,-1.578307 0.440805,1.578307 0,6.017297 5.906784,3.353902 5.906784,-2.663393 13.047821,-7.201026 13.664948,-7.5956022 0.617127,-0.394577 1.322414,0.8877972 1.234254,1.7755952 -0.08816,0.887798 -1.057932,38.175309 -1.057932,38.175309"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Fourth stroke */}
        <path
          className="signature-path"
          d="m 68.589357,34.825009
c 0.176776,-1.590991 1.767766,-3.358758 0.53033,-4.596194 -1.237437,-1.237437 -6.187184,0.353553 -8.308505,4.24264 -2.12132,3.889087 -2.65165,7.424621 -1.06066,8.485281 1.59099,1.06066 6.894291,-0.353553 8.838835,-3.005204 1.944543,-2.65165 3.71231,-6.89429 3.358757,-5.3033 -0.353554,1.59099 -0.176777,5.126524 1.59099,5.3033 1.767767,0.176777 8.131727,-2.474873 10.783378,-4.065863 2.65165,-1.590991 9.192383,-3.889087 11.313703,-3.712311 2.12132,0.176777 5.833625,2.474874 6.717515,4.596194 0.88388,2.12132 1.59099,8.485281 1.41421,11.667261 -0.17678,3.181977 0,19.798987 -1.06066,26.693277 -1.06066,6.89429 -1.41421,8.83884 -2.12132,9.8995 -0.707105,1.06066 -1.414205,1.06066 -2.298095,1.41421"
        // d="m 81.062502,41.875001 0.4375,-4.1875 -0.8125,-1.125 c 0,0 -3.625,-0.0625 -6.1875,2.3125 -2.5625,2.375 -3.0625,5.25 -3,7.9375 0.0625,2.6875 1.4375,3.375 2.3125,3.4375 0.875,0.0625 4.1875,-1 5,-1.6875 0.8125,-0.6875 4.3125,-3.875 5.4375,-6.8125 1.125,-2.9375 -1,1.6875 -0.5625,2.8125 0.4375,1.125 2.125,2.1875 2.6875,2.1875 0.5625,0 4.5,-0.625 11.75,-4.125 7.249998,-3.5 8.124998,-3.8125 10.937498,-3.625 2.8125,0.1875 3.75,1.8125 4.75,3.25 1,1.4375 3.0625,5.625 2.8125,9.9375 -0.25,4.3125 0.0625,21.687501 -0.9375,26.250001 -1,4.5625 -1.625,11.6875 -2.25,12.75 -0.625,1.0625 -1.5625,1.1875 -1.5625,1.1875"
          
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Fifth stroke */}
        <path
          className="signature-path"
          d="m 119.32426,27.577164
c -2.82842,0.707107 -5.65685,1.767767 -6.36396,4.065864 -0.70711,2.298097 3.35876,11.844038 1.59099,12.904698 -1.76777,1.06066 -7.24783,1.414214 -10.07626,-1.237437"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Sixth stroke */}
        <path
          className="signature-path"
          d="m 135.58773,1.9445438
c 0,1.4142137 -0.35356,3.8006994 -0.61872,4.6845824 -0.26517,0.883884 -8.39689,24.3951848 -9.45755,25.9861748 -1.06066,1.59099 -4.77298,11.048544 -4.77298,11.048544"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Seventh stroke */}
        <path
          className="signature-path"
          d="m 133.77523,29.328041
c -1.9361,5.31693 -2.90415,7.443702 -8.87379,9.038782 -5.96964,1.595079 1.12939,0.708924 3.22684,1.240617 2.09743,0.531694 6.13097,4.076313 12.58464,1.77231"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Eigth stroke */}
        <path
          className="signature-path"
          d="m 150.08341,32.703688
c -2.65165,-2.12132 -4.06586,-2.65165 -6.18718,-2.298097 -2.12132,0.353553 -4.59619,3.005204 -4.77297,4.596194 -0.17678,1.59099 0.53033,5.833631 1.94454,6.187184 1.41422,0.353553 3.53554,1.414213 6.89429,-1.59099 3.35876,-3.005204 3.35876,-7.071068 3.71231,-4.772971 0.35356,2.298097 0.70711,5.833631 4.77297,7.071068 4.06587,1.237436 7.07107,1.414213 16.44024,-1.767767 9.36916,-3.181981 36.76955,-14.495689 36.76955,-14.495689"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Ningth stroke */}
        <path
          className="signature-path"
          d="m 114.06401,15.308917
c 0.8475,1.036193 0.8475,1.480276 3.13574,2.664497 2.28825,1.184221 4.06799,1.850345 7.20374,2.072386 3.13574,0.222041 15.33972,-2.812525 15.33972,-2.812525
L 194.57637,1.6163641"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default SignatureAnimation;