// Writes public/favicon.ico from public/favicon.svg, for the clients that ask
// for /favicon.ico and never read the SVG link (older browsers, mail clients,
// link previews). The file is an ICO container holding one PNG per size, which
// every current reader accepts. Run it by hand after the SVG changes and commit
// the result: `node scripts/favicon.mjs`.
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';

const SOURCE = 'public/favicon.svg';
const TARGET = 'public/favicon.ico';
const SIZES = [16, 32, 48];
const HEADER_BYTES = 6;
const ENTRY_BYTES = 16;
const ICO_TYPE = 1;
const COLOUR_PLANES = 1;
const BITS_PER_PIXEL = 32;

const svg = readFileSync(SOURCE, 'utf8');
const images = SIZES.map((size) => ({
  size,
  png: new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng(),
}));

const header = Buffer.alloc(HEADER_BYTES);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(ICO_TYPE, 2);
header.writeUInt16LE(images.length, 4);

let offset = HEADER_BYTES + ENTRY_BYTES * images.length;
const entries = images.map(({ size, png }) => {
  const entry = Buffer.alloc(ENTRY_BYTES);
  entry.writeUInt8(size, 0);
  entry.writeUInt8(size, 1);
  entry.writeUInt16LE(COLOUR_PLANES, 4);
  entry.writeUInt16LE(BITS_PER_PIXEL, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += png.length;
  return entry;
});

writeFileSync(TARGET, Buffer.concat([header, ...entries, ...images.map((i) => i.png)]));
console.log(`favicon: ${TARGET} written with sizes ${SIZES.join(', ')}`);
