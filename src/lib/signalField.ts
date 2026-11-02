/**
 * Builds the node-and-link field drawn behind the home hero, as pure geometry from a seed.
 * A small seeded generator places the points, and each point links to its nearest neighbours, so the picture is stable across renders.
 * Nothing here touches the DOM; the editorial hero (components/editorial/SignalHero.astro) turns the result into SVG.
 */

export type FieldNode = { id: number; x: number; y: number; r: number; lit: boolean };
export type FieldLink = { from: number; to: number };
export type SignalField = { nodes: FieldNode[]; links: FieldLink[] };

export type FieldOptions = {
  seed: number;
  count: number;
  width: number;
  height: number;
  neighbours: number;
  litEvery: number;
};

/** The field the hero draws: 70 points on a 1600 x 900 canvas, three links each, every ninth point lit. */
export const DEFAULT_FIELD: FieldOptions = { seed: 7, count: 70, width: 1600, height: 900, neighbours: 3, litEvery: 9 };

const LCG_MULTIPLIER = 1664525;
const LCG_INCREMENT = 1013904223;
const LCG_MODULUS = 2 ** 32;
const MIN_RADIUS = 1.5;
const RADIUS_SPREAD = 2.5;

/** A linear congruential generator: the same seed always yields the same sequence in [0, 1). */
export function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, LCG_MULTIPLIER) + LCG_INCREMENT) % LCG_MODULUS >>> 0;
    return state / LCG_MODULUS;
  };
}

function nearest(nodes: FieldNode[], origin: FieldNode, k: number): FieldNode[] {
  return nodes
    .filter((node) => node.id !== origin.id)
    .map((node) => ({ node, d: (node.x - origin.x) ** 2 + (node.y - origin.y) ** 2 }))
    .sort((a, b) => a.d - b.d)
    .slice(0, k)
    .map((entry) => entry.node);
}

/** Place the points and link each to its nearest neighbours, keeping one link per pair. */
export function buildSignalField(options: FieldOptions): SignalField {
  const random = seededRandom(options.seed);
  const nodes: FieldNode[] = Array.from({ length: options.count }, (_, id) => ({
    id,
    x: Math.round(random() * options.width),
    y: Math.round(random() * options.height),
    r: MIN_RADIUS + random() * RADIUS_SPREAD,
    lit: id % options.litEvery === 0,
  }));
  const seen = new Set<string>();
  const links: FieldLink[] = [];
  for (const node of nodes) {
    for (const other of nearest(nodes, node, options.neighbours)) {
      const key = node.id < other.id ? `${node.id}-${other.id}` : `${other.id}-${node.id}`;
      if (!seen.has(key)) {
        seen.add(key);
        links.push({ from: Math.min(node.id, other.id), to: Math.max(node.id, other.id) });
      }
    }
  }
  return { nodes, links };
}
