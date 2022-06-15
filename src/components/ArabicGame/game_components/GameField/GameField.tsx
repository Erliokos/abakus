import React from 'react'
import { GameChips } from '../GameChips/GameChips'
import * as Styled from './Style'

type TProps = {
  width: number
  height: number
}

export default function GameField({width, height}: TProps) {
  
  const gameСhips = GameChips()

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}%`}
    height={`${height}%`}
    version="1.1"
    viewBox="0 0 28623.63 28623.62"
  >
    <Styled.Field
      d="M1545.67 10l25532.29 0c844.62,0 1535.67,691.05 1535.67,1535.67l0 25532.28c0,844.62 -691.05,1535.67 -1535.67,1535.67l-25532.29 0c-844.62,0 -1535.67,-691.05 -1535.67,-1535.67l0 -25532.28c0,-844.62 691.05,-1535.67 1535.67,-1535.67z"
    />
    <Styled.GameField
      d="M1545.67 1082.65l25532.28 0c254.68,0 463.03,208.36 463.03,463.01l0 25532.31c0,254.66 -208.35,463.01 -463.03,463.01l-25532.28 0c-254.68,0 -463.03,-208.35 -463.03,-463.01l0 -25532.31c0,-254.65 208.35,-463.01 463.03,-463.01z"
    />
    <Styled.FieldPicture
      d="M26542.46 2155.98l-2643.03 2643.03c22.76,-3.04 45.68,-4.55 68.6,-4.55 132.02,0 264.06,50.37 364.79,151.1 100.77,100.77 151.14,232.81 151.14,364.83l0 18001.28 0.01 1.55c0,132.03 -50.39,264.07 -151.13,364.81 -100.74,100.74 -232.78,151.13 -364.81,151.13 -22.92,0 -45.84,-1.52 -68.6,-4.56l2643.03 2643.03 0 74.83 -74.81 0 -2643.04 -2643.04c3.04,22.76 4.56,45.68 4.56,68.6 0,132.03 -50.39,264.07 -151.13,364.81 -100.74,100.74 -232.78,151.13 -364.81,151.13l-1.55 -0.01 -17948.89 0 -1.55 0.01c-132.03,0 -264.07,-50.39 -364.81,-151.13 -100.74,-100.74 -151.13,-232.78 -151.13,-364.81 0,-44.39 5.71,-88.78 17.1,-131.99l-2706.43 2706.43 -74.81 0 0 -74.83 2638.65 -2638.65c-4.46,0.11 -8.91,0.18 -13.37,0.18 -132.03,0 -264.07,-50.39 -364.81,-151.13 -100.74,-100.74 -151.13,-232.78 -151.13,-364.81l0.01 -1.55 0 -17999.73 -0.01 -1.55c0,-132.03 50.39,-264.07 151.13,-364.81 100.74,-100.74 232.78,-151.13 364.81,-151.13 4.45,0 8.91,0.06 13.36,0.17l-2638.64 -2638.64 0 -74.81 74.83 0 2706.4 2706.4c-11.4,-43.21 -17.09,-87.59 -17.09,-131.98 0,-132.03 50.39,-264.07 151.13,-364.81 100.74,-100.74 232.78,-151.13 364.81,-151.13l1.55 0.01 17950.44 0c132.02,0 264.06,50.37 364.79,151.1 100.77,100.77 151.14,232.81 151.14,364.83 0,22.92 -1.52,45.84 -4.55,68.6l2643.02 -2643.02 74.83 0 0 74.81zm-22246.11 20844.12c13.75,-17.97 28.84,-35.25 45.28,-51.69 100.74,-100.74 232.78,-151.12 364.81,-151.12 132.02,0 264.07,50.38 364.81,151.12 16.44,16.44 31.53,33.73 45.29,51.7l0 -17376.61c-13.76,17.97 -28.85,35.26 -45.29,51.7 -100.74,100.74 -232.79,151.12 -364.81,151.12 -132.03,0 -264.07,-50.38 -364.81,-151.12 -16.44,-16.44 -31.53,-33.72 -45.28,-51.69l0 17376.59zm-0.01 -17689.71l0.01 0 0 1.64c0.42,104.4 40.46,208.71 120.1,288.35 80.06,80.06 185.03,120.1 289.99,120.1 104.95,0 209.93,-40.04 289.99,-120.1 80.06,-80.06 120.1,-185.04 120.1,-289.99 0,-49.42 -8.88,-98.85 -26.63,-145.67l-237.79 -237.79c-46.83,-17.76 -96.25,-26.64 -145.67,-26.64 -104.96,0 -209.93,40.05 -289.99,120.11 -80.06,80.06 -120.11,185.03 -120.11,289.99zm0.01 18001.19l0 1.64 -0.01 0c0,104.96 40.05,209.93 120.11,289.99 80.06,80.06 185.03,120.11 289.99,120.11 49.42,0 98.84,-8.88 145.67,-26.64l237.79 -237.79c17.75,-46.82 26.63,-96.25 26.63,-145.67 0,-104.95 -40.04,-209.93 -120.1,-289.99 -80.06,-80.06 -185.04,-120.1 -289.99,-120.1 -104.96,0 -209.93,40.04 -289.99,120.1 -79.64,79.64 -119.68,183.95 -120.1,288.35zm18703.76 1066.53c-17.97,-13.75 -35.25,-28.84 -51.69,-45.28 -100.74,-100.74 -151.12,-232.78 -151.12,-364.81 0,-132.02 50.38,-264.07 151.12,-364.81 16.44,-16.44 33.73,-31.53 51.7,-45.29l-17325.77 0c17.97,13.76 35.26,28.85 51.7,45.29 100.74,100.74 151.12,232.79 151.12,364.81 0,132.03 -50.38,264.07 -151.12,364.81 -16.44,16.44 -33.72,31.53 -51.69,45.28l17325.75 0zm-17638.87 0.01l0 -0.01 1.64 0c104.4,-0.42 208.71,-40.46 288.35,-120.1 80.06,-80.06 120.1,-185.03 120.1,-289.99 0,-104.95 -40.04,-209.93 -120.1,-289.99 -80.06,-80.06 -185.04,-120.1 -289.99,-120.1 -104.96,0 -209.93,40.04 -289.99,120.1 -80.06,80.06 -120.11,185.04 -120.11,289.99 0,104.96 40.05,209.93 120.11,289.99 80.06,80.06 185.03,120.11 289.99,120.11zm17950.35 -0.01l1.64 0 0 0.01c104.96,0 209.93,-40.05 289.99,-120.11 80.06,-80.06 120.11,-185.03 120.11,-289.99 0,-104.95 -40.05,-209.93 -120.11,-289.99 -80.06,-80.06 -185.03,-120.1 -289.99,-120.1 -104.95,0 -209.93,40.04 -289.99,120.1 -80.06,80.06 -120.1,185.04 -120.1,289.99 0,104.96 40.04,209.93 120.1,289.99 79.64,79.64 183.95,119.68 288.35,120.1zm1066.53 -18754.58c-13.75,17.96 -28.83,35.22 -45.26,51.65 -100.77,100.77 -232.81,151.14 -364.83,151.14 -132.02,0 -264.06,-50.37 -364.79,-151.1 -16.45,-16.45 -31.55,-33.74 -45.31,-51.72l0 17376.61c13.76,-17.97 28.85,-35.26 45.29,-51.7 100.74,-100.74 232.79,-151.12 364.81,-151.12 132.03,0 264.07,50.38 364.81,151.12 16.44,16.44 31.53,33.72 45.28,51.69l0 -17376.57zm0.01 17689.69l-0.01 0 0 -1.64c-0.42,-104.4 -40.46,-208.71 -120.1,-288.35 -80.06,-80.06 -185.03,-120.1 -289.99,-120.1 -104.95,0 -209.93,40.04 -289.99,120.1 -80.06,80.06 -120.1,185.04 -120.1,289.99 0,104.96 40.04,209.93 120.1,289.99 80.06,80.06 185.04,120.11 289.99,120.11 104.96,0 209.93,-40.05 289.99,-120.11 80.06,-80.06 120.11,-185.03 120.11,-289.99zm-18703.77 -19067.72c17.97,13.75 35.25,28.84 51.69,45.28 100.74,100.74 151.12,232.78 151.12,364.81 0,132.02 -50.38,264.07 -151.12,364.81 -16.44,16.44 -33.73,31.53 -51.7,45.29l17325.75 0c-17.96,-13.76 -35.23,-28.84 -51.66,-45.27 -100.77,-100.77 -151.14,-232.81 -151.14,-364.83 0,-132.02 50.37,-264.06 151.11,-364.8 16.44,-16.44 33.72,-31.53 51.69,-45.29l-17325.74 0zm-311.48 0l-1.64 0 0 -0.01c-104.96,0 -209.93,40.05 -289.99,120.11 -80.06,80.06 -120.11,185.03 -120.11,289.99 0,104.95 40.05,209.93 120.11,289.99 80.06,80.06 185.03,120.1 289.99,120.1 104.95,0 209.93,-40.04 289.99,-120.1 80.06,-80.06 120.1,-185.04 120.1,-289.99 0,-104.96 -40.04,-209.93 -120.1,-289.99 -79.64,-79.64 -183.95,-119.68 -288.35,-120.1zm18089.21 1000.85l-2219.15 2219.15 -74.82 -74.82 2219.15 -2219.15 -18130.92 0 2263.61 2263.61 -74.82 74.82 -2212.76 -2212.76 0 18029.21 2212.76 -2212.76 74.82 74.82 -2263.61 2263.61 18130.92 0 -2219.14 -2219.14 74.82 -74.82 2219.14 2219.14 0 -18130.91zm-428.83 -880.77c-80.09,80.09 -120.12,185.06 -120.12,290.01 0,104.95 40.03,209.92 120.08,289.97 80.09,80.09 185.06,120.12 290.01,120.12 104.95,0 209.92,-40.03 289.97,-120.08 80.09,-80.09 120.12,-185.06 120.12,-290.01 0,-104.95 -40.03,-209.92 -120.08,-289.97 -80.09,-80.09 -185.06,-120.12 -290.01,-120.12 -104.95,0 -209.92,40.03 -289.97,120.08zm654.8 654.8c-80.09,80.09 -120.12,185.06 -120.12,290.01 0,104.95 40.03,209.92 120.08,289.97 80.09,80.09 185.06,120.12 290.01,120.12 104.95,0 209.92,-40.03 289.97,-120.08 80.09,-80.09 120.12,-185.06 120.12,-290.01 0,-104.95 -40.03,-209.92 -120.08,-289.97 -80.09,-80.09 -185.06,-120.12 -290.01,-120.12 -104.95,0 -209.92,40.03 -289.97,120.08zm-9366.25 7531.95c485.86,0 925.74,196.94 1244.14,515.34 318.4,318.4 515.34,758.28 515.34,1244.14 0,485.86 -196.94,925.74 -515.34,1244.14 -318.4,318.4 -758.28,515.34 -1244.14,515.34 -485.86,0 -925.74,-196.94 -1244.14,-515.34 -318.4,-318.4 -515.34,-758.28 -515.34,-1244.14 0,-485.86 196.94,-925.74 515.34,-1244.14 318.4,-318.4 758.28,-515.34 1244.14,-515.34zm1188.02 571.46c-304.02,-304.02 -724.07,-492.08 -1188.02,-492.08 -463.95,0 -884,188.06 -1188.02,492.08 -304.02,304.02 -492.08,724.07 -492.08,1188.02 0,463.95 188.06,884 492.08,1188.02 304.02,304.02 724.07,492.08 1188.02,492.08 463.95,0 884,-188.06 1188.02,-492.08 304.02,-304.02 492.08,-724.07 492.08,-1188.02 0,-463.95 -188.06,-884 -492.08,-1188.02zm-1188.02 116.49c295.89,0 563.8,119.95 757.7,313.85 193.91,193.9 313.86,461.79 313.86,757.68 0,295.89 -119.95,563.78 -313.86,757.68 -193.9,193.9 -461.81,313.85 -757.7,313.85 -295.89,0 -563.8,-119.95 -757.7,-313.85 -193.91,-193.9 -313.86,-461.79 -313.86,-757.68 0,-295.89 119.95,-563.78 313.86,-757.68 193.9,-193.9 461.81,-313.85 757.7,-313.85zm701.58 369.97c-179.54,-179.54 -427.6,-290.59 -701.58,-290.59 -273.98,0 -522.04,111.05 -701.58,290.59 -179.53,179.52 -290.6,427.58 -290.6,701.56 0,273.98 111.07,522.04 290.6,701.56 179.54,179.54 427.6,290.59 701.58,290.59 273.98,0 522.04,-111.05 701.58,-290.59 179.53,-179.52 290.6,-427.58 290.6,-701.56 0,-273.98 -111.07,-522.04 -290.6,-701.56zm-701.58 304.68c109.59,0 208.81,44.43 280.63,116.25 71.82,71.82 116.25,171.04 116.25,280.63 0,109.59 -44.43,208.81 -116.25,280.63 -71.82,71.82 -171.04,116.25 -280.63,116.25 -109.59,0 -208.81,-44.43 -280.63,-116.25 -71.82,-71.82 -116.25,-171.04 -116.25,-280.63 0,-109.59 44.43,-208.81 116.25,-280.63 71.82,-71.82 171.04,-116.25 280.63,-116.25zm205.81 191.07c-52.65,-52.65 -125.43,-85.23 -205.81,-85.23 -80.38,0 -153.16,32.58 -205.81,85.23 -52.65,52.65 -85.23,125.43 -85.23,205.81 0,80.38 32.58,153.16 85.23,205.81 52.65,52.65 125.43,85.23 205.81,85.23 80.38,0 153.16,-32.58 205.81,-85.23 52.65,-52.65 85.23,-125.43 85.23,-205.81 0,-80.38 -32.58,-153.16 -85.23,-205.81z"
    />
    <Styled.Hole
      d="M27077.96 26614.93c255.72,0 463.02,207.3 463.02,463.02 0,255.72 -207.3,463.02 -463.02,463.02 -255.72,0 -463.02,-207.3 -463.02,-463.02 0,-255.72 207.3,-463.02 463.02,-463.02z"
    />
    <Styled.Hole
      d="M1545.66 26614.93c255.72,0 463.02,207.3 463.02,463.02 0,255.72 -207.3,463.02 -463.02,463.02 -255.72,0 -463.02,-207.3 -463.02,-463.02 0,-255.72 207.3,-463.02 463.02,-463.02z"
    />
    <Styled.Hole
      d="M27077.96 1082.64c255.72,0 463.02,207.3 463.02,463.02 0,255.72 -207.3,463.02 -463.02,463.02 -255.72,0 -463.02,-207.3 -463.02,-463.02 0,-255.72 207.3,-463.02 463.02,-463.02z"
    />
    <Styled.Hole
      d="M1545.66 1082.64c255.72,0 463.02,207.3 463.02,463.02 0,255.72 -207.3,463.02 -463.02,463.02 -255.72,0 -463.02,-207.3 -463.02,-463.02 0,-255.72 207.3,-463.02 463.02,-463.02z"
    />
    {gameСhips}
  </svg>
  )
}
