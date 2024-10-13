'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "be3232b5acdf330467550597d5141864",
".git/config": "2ba9b3a0e7d076b4e650ab15afa4566f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "61924a3de3d1b55ac9bd6bf5d037765c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc7f9402bf7b6c324adb7186a5018e0a",
".git/logs/refs/heads/main": "28e16374e2b14d6feb5a2ed6cf5452a6",
".git/logs/refs/remotes/origin/main": "86afdca45a8c8f89653d345b8001450f",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/0e/eed6174c5d219d26a7f9b25a8b422fe730d46f": "aa12bcf6366f846cf286160fa02491a1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/1839c251141a179c17e49a62e365ab42b77312": "4d345583a7e755965b661c0a34c904a4",
".git/objects/11/8d2d9f7361f072a9fca01215362a5be69bdc6f": "d458f6c36f78e8924d80000189bfa1dc",
".git/objects/15/afb80b78716170c215cd7030cee8a5de3fe0c5": "debdbd8c0f637371e5e10a66bf6cc887",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/41a74f0374a5b6c8f6f712a58fa4e534e40b5b": "dc7e84e6d0caab60ce0c04163d9610d8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/377b1d8e932aac7829a1b94872b3223d3a7df6": "97ab49069a77c66d26d8d9ac8c9ba9ad",
".git/objects/21/c95ce06e545ec132554e407c39da8199d0edb0": "0f1700661e95a825228a1afbd6860a1f",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/aaf0dd7bcea8fcd62314fdf304a6dd8a10a26d": "d90c48ba45699ad4c2437b1b55cfa2d5",
".git/objects/31/723bc4db5464d6508bce3389fe3fcea51b7c83": "b1e4666358dd8c303dc329e8042b8cc6",
".git/objects/31/9631666fc298311d43200acb1f114b425b7d30": "8300191d9705f0c6af807859207c872e",
".git/objects/32/50a28cbfd649a56efbc80393ea9177853d0d50": "7df6204b14e14a042145e50044f75988",
".git/objects/33/48d6bae849826e5dc4b24bc9cd476723abca10": "28ce6ff26c992a9601420122031e4c21",
".git/objects/3a/cd9a2046bede012d891e66a2a30ad0a3123734": "da6ae0956445cc858c87fd6d62bb85d6",
".git/objects/3b/ee3eb05cc82cf99f6bae022ac0039f70801a24": "dcfd4fa5c3de54e26a0a28c0792e955f",
".git/objects/3f/03972f3041ccac58fd0bbed78c9597f0776d2c": "84933e351b145d87b5fbb2509e3b7f7f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/167324544c18077cf891c9647ac5b15e766a92": "ac0d2e5ab8131692c152ebfc962f3fdf",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/16d6def892242a899fc065a435c1019c12aa49": "210116c1bdd7eb1ab512ac5651b67a1c",
".git/objects/4c/2ed9e0c894c3a8f5843e4da104b28542e57e45": "124157cc3c192f69e697d05cf79c983d",
".git/objects/4e/dc4e8ab3bd0f193167fddb468a6589f71324e7": "60a36492aeee446554ab18620fdae2b2",
".git/objects/50/68a8b5c44e0a1952169385f85092fa40894bdf": "6a1f4d6211a52139ce62b0cf4945cd14",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/b3e0fd934e3076bc51b7d4b1dfd7bce64dc673": "02945745ef09c9e4025f6d6242909ff4",
".git/objects/5e/c3a66e7dca48623b758a03a7f3035c9c931716": "d3e11402fb120b8bf6e256c762c507ec",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/a2f166b41647abec8066dab293aa03741c6575": "66399def2b0af87902c2df4cef0378a2",
".git/objects/6f/ab31c8f4e93fe8ca1747deb2810215274de515": "43efd89d6cf931832b2a82010c03d65f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/7a/33f78b45417ccd3f80eb707d197c726e6dc4e3": "c34f6427585962da28dc5c8f68ac8da7",
".git/objects/7f/82cd0911a25392ed00cf4085eb9331fb92bde1": "5d8cab68956efb04506073dfcb205814",
".git/objects/82/f9f709d85fa61814e1e9b5948df56b5d140ab5": "21d380a75c0100b2c74c7dc881d8df4b",
".git/objects/83/7ecdd85f708adb5060a5a2cee8cb3d307df615": "fa829404655a4cea14551c19c557728c",
".git/objects/84/b26de13137988f8cd29e4f0d9345404e9474ef": "6b98664fbbe92409c089674ea2b472fd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c769e015d29f4dc4e72017451a2efaac0858bf": "6c82f8ecfc9f7ca101e67aad3ca599a5",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/8c/67fc047ea9a6a394eacdb63e5b77f3e57bfb05": "bdca79ae9ff5757416de3795914293ed",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/6581a62c0bb0b88bd724840f4b53b27b3bced3": "30ff6394b1b7a9827f16583f6e1f1807",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/099e6d562678dc5abf27008c5e6c9870bcad59": "8e6087279318e2b6b4a135a96ab257ad",
".git/objects/9a/51ea6cf65220ff45210806af9c63aa6a204069": "546a4af884d102f1bf8580bd6f3f42fa",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/a0/2a89d583415137e9feec6cfbc295fce5967778": "871a7d9ac0ddc441b738a220caa8e1a2",
".git/objects/a2/b67ac282788883425ac9d8b3b70517acbd8387": "45683fcf95d6b8e220f515e74f6aad1f",
".git/objects/a4/b8c51d9c49084de837a179ef12a5745a7ad743": "f8e495c680d9c65914a799525c2f78ba",
".git/objects/a7/82ddcc42bdc7ad73592a386afd1b00418fa27b": "c4a5a056d64051b496181ed2b8b02cae",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/b1/3573e9db0b4e2f5d5c85d9fa377d36d8510e3c": "b4a0f575a0cbc582dda2b37a1ebc910a",
".git/objects/b3/9c138ba2ebfe1ac900d00d54f3e452b6487dd2": "b4371fb1bdcb47a8102a6f5dfd0e17dd",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b6/d8f4e8a7a43c8148da6eb631e7b4ba612bbb12": "3afe42e0068c4c1a2bd7f07f2c03fd63",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/acfe90e4e7ff6ccd10a323f5c50b4e9088d8d1": "7549004e6a9a75461f76a43422f6fc23",
".git/objects/c2/c8268c57f222b3cfbc9aab669e4f31e499edc4": "67fe52580515052885a89986e0ea0ae0",
".git/objects/c4/9686a80c3645bac5c9bb48b076e4054670eb06": "3dcb6f9c5d77b1d0a198cea125cfcc5e",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/4288e8ffbcbfc2dd378e8b3cb5f46a4e8f8df9": "235b629e334a46ef25102e6c6241158a",
".git/objects/cb/3abe1b90fcaee204df326b80fc968f7ac5dd06": "54ec814935fdcfcf93e5f80424e7e783",
".git/objects/cc/5bfb16910d6b734fe00618b35f75b0cec4d94e": "bad018c15f83c9f2836097f48e0687c6",
".git/objects/cc/a3495f157f9149690104936738ee6b950d36c5": "deb49ad1e9544ce639b34eb59c18c316",
".git/objects/cd/6978e1625b6708b80ccca16eb961321ae4f5f5": "7b31c9133789dc6ed932e70ee5e08c35",
".git/objects/ce/cc74bef40f824d2f23ee3b6d067c833aa4522b": "c6091763bc53d305017bd8e8963aef78",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/3dc5f94f87a0e7b3501eff1f95da6c82a1515f": "7a870c68e967498debf65d74bab59e7f",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e2d32eef80321648a1099e5873ca67c9a07a8b": "c6d73de31fd9099bc149e89ff6ec20f8",
".git/objects/dd/da2ad83fb8dded2cde239f77016eb4e0094358": "dc7b90405a6c6ac318a3c8264aba9cb5",
".git/objects/df/37bd0666609f854626725f9d4939cc2b62ad9d": "9353750a72ee2595185cc8f0632644e6",
".git/objects/e0/cedfdd46f9be586ecad3b734fbe19bbea6fd1c": "e32a9375f39efab7550fd8b6ff5b0ac6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/08bd68c9e00cfabb73455f2489ba8780b3caa3": "3aa32a47f5fe548c796c798c8e1a8fc9",
".git/objects/f8/551847648ee058602de29e8fe68ca977c55570": "6cb8eb26b411745b14b21149559f8820",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "62dd265a38bf1c25da3f325620960e66",
".git/refs/remotes/origin/main": "62dd265a38bf1c25da3f325620960e66",
"assets/AssetManifest.bin": "879848e98da01721b935418921d8261d",
"assets/AssetManifest.bin.json": "300e585fe301d82a2a33ccaa32377187",
"assets/AssetManifest.json": "bad360b3e75486f50550a22c30c4cfde",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/edeft.jpg": "86803d03b05d1203441027fa5839b583",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/fas.jpg": "59211575d655354f9e6e99986d1d49b5",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/hack.png": "34658e4d95570a39e53a688ec28a0e82",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/lifeMate.jpg": "8ae2127ef0477bf0944ac356456cb3ee",
"assets/assets/images/portfolio.png": "7d8bfaffce8019e55ac166d81a41704e",
"assets/assets/images/pro1.png": "5b94a90efa79e4524faf9bb877910cb5",
"assets/assets/images/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/whatsapp.png": "35392db2e56693af4d9e2f0f8e11ec7a",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/assets/images/xtwit.png": "7eb57922b9ac9c7a5f1d1c490fcac6d8",
"assets/assets/images/you.png": "7211fbb00bce8645fb9fbd825dcc502f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ac86ba16c85c8f46e9e80199724734be",
"assets/NOTICES": "45be6363eb1633cc40a7f5f4853163ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "09fed06c57832df3f0ce36aac8599d22",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0516cbd2dde46e461275bc400392092e",
"icons/Icon-192.png": "a33c46434b831c80e0cfaa6905be7d41",
"icons/Icon-512.png": "2420fcd7391864ff06d0ade87b35b69c",
"icons/Icon-maskable-192.png": "a33c46434b831c80e0cfaa6905be7d41",
"icons/Icon-maskable-512.png": "2420fcd7391864ff06d0ade87b35b69c",
"index.html": "bc8d896c3cbffa4518588e75f86bbea4",
"/": "bc8d896c3cbffa4518588e75f86bbea4",
"main.dart.js": "5d90b70014eee7b26e5b59bfecd12ca8",
"manifest.json": "d6eb409f55f713b1f5be2b3c2a606750",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
