import * as compound from "./moneyMarkets/compound";
import * as aave from "./moneyMarkets/aave";
import * as uniswap from "./markets/uniswap";
import * as curve from "./markets/curve";
import * as balancer from "./markets/balancer";
import * as others from "./other/index";
import * as others2 from "./other/others2";
import * as graphCoins from "./markets/graphCoins";

export default {
  ...compound.adapters,
  ...aave.adapters,
  ...uniswap.adapters,
  ...curve.adapters,
  ...balancer.adapters,
  ...others.adapters,
  ...others2.adapters,
  ...graphCoins.adapters,
  reservoirprotocol: require("./rwa/reservoir-protocol"),
  fortunafi: require("./rwa/fortunafi"),
  jupAg: require("./solana/jupAg"),
  midas: require("./rwa/midas"),
  stobox: require("./rwa/stobox"),
  alex: require("./markets/alex"),
  seamless: require("./other/seamless"),
  pyth: require("./oracles/pyth"),
  unknownTokensV3: require("./other/unknownTokensV3"),
  dinari: require("./rwa/dinari"),
  few: require("./other/few"),
  ociswap: require("./markets/ociswap"),
  optimBonds: require("./other/optimBonds"),
  tangleswap: require("./markets/tangleswap"),
  xexchange: require("./markets/xexchange"),
  cetus: require("./markets/cetus"),
  balanced: require("./markets/balanced"),
  tinyman: require("./markets/tinyman"),
  silo: require("./moneyMarkets/silo"),
  hlp: require("./yield/hlp"),
  digift: require("./rwa/digift"),
  gmxV2: require("./other/gmxV2"),
  timeswap: require("./yield/timeswap"),
  dforce: require("./moneyMarkets/dforce"),
  minswap: require("./markets/minswap2"),
  ergopad: require("./markets/ergopad"),
  sundaeswap: require("./markets/sundaeswap"),
  wingriders: require("./markets/wingriders"),
  // ondo: require("./yield/ondo"),
  yearn: require("./yield/yearn"),
  convex: require("./yield/convex"),
  alchemix: require("./yield/alchemix"),
  meanFinance: require("./yield/mean-finance"),
  misc4626: require("./yield/misc4626"),
  // spectra: require("./yield/misc4626"),
  balancer4626: require("./yield/balancer4626"),
  vesper: require("./yield/vesper"),
  yieldProtocol: require("./yield/yield-protocol"),
  levelFinance: require("./yield/level-finance"),
  quickperps: require("./yield/quickperps"),
  timeless: require("./yield/timeless"),
  beefy: require("./yield/beefy"),
  platypus: require("./markets/platypus"),
  hop: require("./markets/hop"),
  ankr: require("./liquidStaking/ankr"),
  stargate: require("./markets/stargate"),
  jarvis: require("./markets/jarvis"),
  chainlinkNFT: require("./nft/chainlink"),
  arrakis: require("./markets/arrakis"),
  aktionariat: require("./markets/aktionariat"),
  yieldYak: require("./yield/yield-yak"),
  tezos: require("./tezos"),
  elexium: require("./markets/elexium"),
  aaveDebt: require("./moneyMarkets/aave-debt"),
  saber: require("./solana/saber"),
  solend: require("./solana/solend"),
  reservoir: require("./nft/reservoir"),
  jpegd: require("./yield/jpegd"),
  glpDerivs: require("./yield/glpDerivs"),
  pendle: require("./yield/pendle"),
  penpie: require("./yield/pendle"),
  phux: require("./markets/phux"),
  wombat: require("./markets/wombat"),
  wombatWrapped: require("./markets/wombat"),
  backed: require("./rwa/backed"),
  vela: require("./yield/vela"),
  chai: require("./yield/chai"),
  kuma: require("./rwa/kuma"),
  ondo: require("./rwa/ondo"),
  hashnote: require("./rwa/hashnote"),
  hiyield: require("./rwa/hiyield"),
  mux: require("./yield/mux"),
  maverick: require("./markets/maverick"),
  steer: require("./markets/steer"),
  derivs: require("./yield/derivs"),
  apiDerivs: require("./yield/apiDerivs"),
  pxeth: require("./liquidStaking/pxeth"),
  // sthApt: require("./liquidStaking/sthapt"),
  mod: require("./markets/thala"),
  ambitFinance: require("./yield/ambit-finance"),
  eigenpie: require("./yield/eigenpie"),
  bitcow: require("./markets/bitcow"),
  pythAgg: require("./oracles/pythAggregatorV3"),
  warlord: require("./other"),
  ifil: require("./liquidStaking/ifil"),
  uniV3: require("./markets/uniswap/v3"),
  liquity: require("./other/liquity"),
  fxProtocol: require("./yield/fx-protocol"),
  crosscurve: require("./markets/crosscurve"),
  samm: require("./markets/samm"),
  gamma: require("./yield/gamma"),
  thena: require("./markets/thena"),
  pancakeStable: require("./markets/pancakeStable"),
  etherfi: require("./yield/etherfi"),
  wcgUSD: require("./other/wcgUSD"),
  usdrif: require("./other/usdrif"),
  xailocker: require("./liquidStaking/xailocker"),
  sbtc: require("./other/sbtc"),
  aries: require("./moneyMarkets/aries"),
  pragma: require("./oracles/pragma"),
  parallelProtocol: require("./markets/parallelProtocol"),
  sanctum: require("./solana/sanctum"),
  spectra: require("./yield/spectra"),
  kamino: require("./solana/kamino"),
};
