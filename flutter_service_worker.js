'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8a42f7c73ce24eb7ce5b001a669ebb3a",
"index.html": "ce06b8ec352fd9c6d4396974335cbc9e",
"/": "ce06b8ec352fd9c6d4396974335cbc9e",
"main.dart.js": "adef2c7f1fffe01845f8f72be8f47685",
"manifest.json": "32d702220831f52547c6443bc861909d",
".git/config": "715dc614413f940c28f66b1dcce0756e",
".git/objects/59/62a5541d4c1e38b258ec377c5d6c984e65dc3d": "348d714bc1acceb2227854676e486f53",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/6a/d21b5ca541597cf5fed41dfeffd7e358d5d31d": "f58ee2850d96bed12716ff5a7d9acc0a",
".git/objects/6a/0e2f4dfe9d62fd7c6145ebbfd516a28833509c": "2201c1e3bc9503e198f3d26120ca7b2b",
".git/objects/35/d13b2895039aaabe5aaf20a5646fd8721d025b": "f6812c326382c0205c8e10f33b5b34d9",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/56/56b9c0dd847e9e17f1b47149157c8ae59b5167": "b5642b288e723d56e3d2a47fd2a79bcb",
".git/objects/94/06a18cf858919004e8af95fbbe40469b00d8fb": "d4ab64763b003284fe3e50a0498c76ed",
".git/objects/60/11a7d06b3ef4ce931ce12fd8cdf8e04f524f84": "16775027e78dffba54a5cb2decfad056",
".git/objects/5a/c40bae28ea8807d3ad78f458f65132e58de17b": "1be2bbf1e253f3721ec2a7485aad5a01",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ad/2b2d575e3e5db1715da8f5c9fe78ba26d45414": "c48ffeb72f993b5e3e447c33a1e9f654",
".git/objects/d7/00ac590cea3534dd4834d6ebd4f45a3d37c7cc": "1c84f8d53eb0759b64c78e44fe461f82",
".git/objects/d1/9dbfb4f92de3982713b344dd039df7ea7a1e85": "361da6fe42eaaa545a455f49d290234a",
".git/objects/d6/042a7e536d88fef06b7ceb43e4ba7b52153348": "bd83dd1f7c2f9853bf05fbc67927f4a9",
".git/objects/ab/75e3690d0584203aa964fd96de524cb242c2e6": "20a76932a396ecc8567f0196e77f533e",
".git/objects/ee/fc6d529bb702c33edd0982e63fbaa54c428a6a": "f5db909f5b92bcd28f627537b30738b9",
".git/objects/fe/e39881b7e307d10b71e7a2d08805a74b320477": "b355513f21c5d950750085efb80b09fb",
".git/objects/c6/55c6892c57e91c659744e9d60f090e77eb2c60": "2559bd9e59f140abcd904705e229d972",
".git/objects/18/b586e2f1bbe7e575673c455724b649dd8ec3bc": "cf497c61b8414542584353fb1d695e0d",
".git/objects/16/d5e847f1c439500f6226db4712147ec233e344": "0300838b6c20b5e98c53bee47b55e42d",
".git/objects/42/1cde03527a0cff0cacbcaf41aa7f232aba57b1": "cd3c02ba1c6fea261052c4426952c2ae",
".git/objects/89/9d2d9a00f1a18e314fc44dcfb7f2cd0e9d4ac7": "1f6a4a5508e7ed29526c98eb3fb31252",
".git/objects/73/6d180c47277d105ee58eaa60a31e232d6910d5": "92e675e04eedb45792ca27643690d1e6",
".git/objects/8f/a572664dfd2e4666a14fa68987a7c0fd438977": "5e1296485b4c46569b2bce006e0ddd98",
".git/objects/81/c0cd457c3287a24f2d1bc505dc38eb8cbbd0df": "5690bb46ba83d1a417dcd861e1c1d4d7",
".git/objects/81/f8fba5e5e65e0c23663e1610152f79ff34c174": "667f3cf3b7fce94e57a17219669d66bd",
".git/objects/86/9ab441920e9d4bd7aa5f7a99bbfc23ef9788d7": "455079191728de41a90fb4bd9366aa52",
".git/objects/72/35d6adda5e2ebcae8e19a0a6fa2f9f5ea1e775": "c4f246cbd07574f36ffddcd72ade4462",
".git/objects/43/e76eeb408c940fd21123f6a66f2746db437141": "515ef85e77d47e7e59ec35910da86108",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/6b/afc97b8d7d318562b6413925049ddc7305e306": "da9c4e2b9d5938ef9f68ff75c58bb5fd",
".git/objects/07/9fa0396b2cabfe0ff9f1467f368a6cefa9fd77": "c80ccb9573fb2e196a0a080e53ad4767",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/31/5026a8ed7dcf9e5071bb557b7634a1bf5fec62": "0610de95fd2e2db7b2cd87294c2726af",
".git/objects/98/ef1314a9e9a5a74c5a179ee3d0dbd939d401d2": "ae5948c9f79774d1261e0259c123aa3b",
".git/objects/98/be497471dbda8eefaffa68ffd12c4ba7e05ae4": "8e76c5fcd9d5a8b7fa4d768b4aa6375c",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/37/71fd5d10e8c346d464cf7f92d3599c29c3730f": "be56700cc85add1f758beba461f6a79e",
".git/objects/97/79c1b7567d0a102e7ff47d3d7972fc09478773": "132b3ad3e2deb59954be6c64874887db",
".git/objects/0a/4f25c606fe474b3f4d73d55ee2a49b34bb5daa": "0e9172eccf62ad892f92e1fa3208774b",
".git/objects/90/d3951936d2c6e24c0e76f86e3d5f48271fc614": "eca8c3dd464d8306ad41a0f7ceb362df",
".git/objects/a7/10d2b0b7e8f57b0b1e1d32e434088d42fb0b48": "9bab85f86810867b428c0fc5af12e464",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/b6/c71eeaee872b71512ab1728c2df885e12b8101": "6294567f3c5b41b07d243287d8f99b08",
".git/objects/d5/d53e7822822bb5b95059e1480e23ae56936498": "bc7be24db296b7feccbc6186f3497594",
".git/objects/af/a2dacdff1709fd8dfe948208ba4a113cd097f6": "a3b4518b07ea2d8d41713c313b8ce437",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/a1/7810aa1708d589a2b24fa05ec0921f94449c99": "b4c579a5717ef34c12b627f9787e0fcd",
".git/objects/a1/887787499c816ae9b96db9ee75f5d8d842404a": "db46599286b521f904ea2e0ba8d16b37",
".git/objects/cd/01173ab15b83e32bd65c1a9831ced0c0168065": "446bfb7e3dfd2c78652c99fddabd1438",
".git/objects/cc/741bbffd01054f35046c718ce326a574f1a033": "77360cb6d41bc1bb2f9b8f739a4c6397",
".git/objects/e6/0aae1d6d20445524620df6ea38da13edefb107": "eaacc4e1cdfcd4d63f92cafa1aa1b349",
".git/objects/f0/6e65103fc9b7775f3885e6825e6bf43c1cf3b6": "5bba90c33e4695580e8d25f6dd276bd1",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/e7/1809e9a295583c2766364d675d988b2bbb311b": "cb97df2b2e22f52f343ee674c6691211",
".git/objects/cb/0efd3e18732d8726cf83af4bb32a70af09af3d": "eae1b13fe0b06fc335dcefcb6e76383e",
".git/objects/2c/fcf49123992288cefd0771ae7f1a37c953c4a7": "b321de4c2d5f64416f21d027ffbfc997",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/ecfdd54cc237124efa3447ee71257069c2c6b6": "cfb2a6ae2996ce4de94483bab0fce49a",
".git/objects/1b/2ff8945466cd282bb31cb4540e5aed712da93b": "38f4ce08736b91ce91113856c1237e53",
".git/objects/1b/5ce6466760a95381dc7f44b872906a1dc732f2": "7f18133a1b03edb3e3e2ed274275012d",
".git/objects/1e/dde6e0e01a7a5deb04aa617942a56feef60790": "22969f29a10be4ca631a823384309acf",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/4f/88201c1efb960eb9cf3cd784b934e0cead58fc": "406ec2a7112935d14a9041bf8f066fdf",
".git/objects/12/e8d5d84250e3d7aa500a2ea8fd33e7e101c1a4": "f0eceeb7810bb6e907e6dff7d228828b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/2b/895e367783471d37a57296e116063b5a4253fe": "590d8216fc597ad5f21d4aa1e4fb1925",
".git/objects/8b/2a67b5b7a20241ed2ab9354463713fb8b7f6dd": "790ca139beb5de3a29953f50c725838f",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d6306d60f94dd2266ba55528b69099f",
".git/logs/refs/heads/main": "7d6306d60f94dd2266ba55528b69099f",
".git/logs/refs/remotes/origin/main": "548bf0ef0020c90c366615b691f854bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6ce1144b38a51c602df940d0aa878416",
".git/refs/remotes/origin/main": "6ce1144b38a51c602df940d0aa878416",
".git/index": "a9a9c76ae8a5ab1cd565313608e7df0c",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "6c1106a9dea9cb19c80c70b8f8930c89",
"assets/NOTICES": "62885daddddd5e78985bad77eb1fcfb5",
"assets/FontManifest.json": "e2f126e136ff8be123b9c7260c25ac7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/icons/chat.png": "dc5ad7f23dd7e810cea24488d9024624",
"assets/assets/fonts/Pretendard-Medium.ttf": "be5dedc52c0403d321e8202ae6aac2b3",
"assets/assets/fonts/Pretendard-Black.ttf": "eb51bbd6cd9010dc92357f8303784b17",
"assets/assets/fonts/Pretendard-Regular.ttf": "d1a9532a41f64908fab67d700ff2a5f0",
"assets/assets/fonts/Pretendard-Thin.ttf": "86fdcc882292e5db7d6bef1c68aceba6",
"assets/assets/fonts/Pretendard-ExtraLight.ttf": "abebb245a46f488f6b820c97609889dd",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "695f00aeed623840ba7ed68dc166c761",
"assets/assets/fonts/Pretendard-ExtraBold.ttf": "a75966342357de44f5a09d07b0ae535a",
"assets/assets/fonts/Pretendard-Bold.ttf": "dc5a0e145559879abb18d5969da0df6b",
"assets/assets/fonts/Pretendard-Light.ttf": "3a2c8b53f02202d322fa86eb9672ba30"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
