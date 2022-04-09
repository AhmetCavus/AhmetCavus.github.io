'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "29edfa4f06572c6b19924ab083fc27bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5854739d98a66afa387a48f622e48313",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/README.sample": "d82bea07313becc69a9abcb4556a924f",
".git/index": "e232aeede74ada560190b8e3baa7ccb4",
".git/info/exclude": "d718c267464b76000574e4fb4d9cbafd",
".git/logs/HEAD": "85ede35cdd8bf679642b08097392ea52",
".git/logs/refs/heads/master": "85ede35cdd8bf679642b08097392ea52",
".git/logs/refs/remotes/AhmetCavus.github.io/master": "bbe7bd3a31ef390f4c75921dddd4b872",
".git/objects/04/1d170ed3f2993299a865ca9914449beac93e97": "af2a898e3979931271df8b236515559f",
".git/objects/04/b1c2e937c3fdd06855da5b8537327bafaa8d83": "4ba2bcfae7fa57fcdcbf7590099903ca",
".git/objects/04/fee627c1e6b320e25ce1f74382d1dc4b1a3c92": "fc8269f8a2bdc65ff1c32a7b63a4860d",
".git/objects/05/293eab1048e86cf9a851346121626a1df7fbc1": "fe4d17df7d11fc8d35d63f3da60575e4",
".git/objects/0e/6db220300a4370431bc456825a9472fb2ebeee": "003f8d631080aae9dcd5c61a7dce9a6f",
".git/objects/0f/9594620da432be157dd49cfed811c1a88d83b6": "074edd40d2628f5c29c809e2d3720810",
".git/objects/11/2d3a41f580af7b5ac32062d3e9af9661800eee": "4c1a2d5464a0711e09ac21e02ba3256b",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/3c0c083f956973543fcf9adad5414587a2f667": "60e8f05708d5eda4492c5dd307d493f8",
".git/objects/20/45b464cb48afdd44027222d4b432a4d6cfba96": "0c0ed6eaa945a5c09fefe0a5293c4117",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2f/71321580981d552299e15321588f426160afcc": "3cbcc9de54252816354da247733f0100",
".git/objects/30/07caac308bfb9b8a7d22a7a8b1332928b68033": "9300decec4f8ff5348edab0ba02ae3fb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/ee61a0554c1802c6421b46d63bc2e2c90b3d98": "7d05b9a8726b6d8103b79e4ef2fd4b48",
".git/objects/36/a91b7d89ba031d5ba65f6766e1419a2c28178b": "d9137611ff940a49f4ef9d62fbd32312",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/39/315e3101657f97a596105c3375134e978f14c1": "3a9fa03ef6b59e4694656aefbd26da27",
".git/objects/48/9532b5302bf5f018107b8067813efe11c771c6": "6bb4e29aac83646822915c7514fd5483",
".git/objects/4b/3d28e2521424c5e860f15d888b26ca14e811e8": "7c2476aebf694c76f1e1dd1bb8b27999",
".git/objects/4c/f57ef460e1849b8685dbca9e1a85eab5ce86ac": "0b48edc9d6ca510a743eb533c925020a",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/57/73415e2ba45b0e520113afa5c4ae99e97baaa5": "d29c529a8f723f746ea758183a0fcc49",
".git/objects/5b/28a63aad41dce833cda24f6ad808371db04fab": "51b26cfa0d09adbfc60acec21897ecd2",
".git/objects/64/9c7332f73626d89b69f4299d216a019ad0cd17": "e208a4082e904743a8bf84507d30a53f",
".git/objects/66/a2d260a4e8d43de17db6e07a706af095e94fbb": "5351155606d18abd991617744c297372",
".git/objects/68/abde1de0fb9f46c24f74349db7c082ba0cf9b6": "e349eb5d31a613f180056cbd7c02d4e0",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/72/02fd20fd78feca958f7629dae4db4ae6ea3900": "8c882616d4597fcc7b3e5d4d5fba1d12",
".git/objects/73/bbf80da6d8c26d65f973530ba0f85ed668aead": "5c426923eec1e3ab2319abebb3dd98e5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/1e371859af1801cf9bc74ecc9f74a3d31e1af3": "1580f7eb928eae8cd5dcaf3f5c095a44",
".git/objects/80/c0c36ea90df1092b2fdcf7b1318005eb7c9876": "6a7b2603905a8ad0f4c48c5ebee0674f",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d12722f32a65b8689b5e687d351e6200ec03ac": "3fed9f3f4299ad017cfdae20653189ab",
".git/objects/8d/cc5c0fe5c3b4a01c822af293d355f104935bc6": "2bfcc3db015f8729409ef75b5cfb89ab",
".git/objects/8e/b8d4b55d7c183898601ddb4eccc04448cabd3b": "884d2d3977061b72ad68c8eb092b45ac",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/d238bc5281642fd05e736bbf077e339b63daa7": "2c134e742569170144aaa17c134c2451",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/96/60088596cff0e9b4eef4af9d47c6007516c34d": "c5538b836e87f0f272862f4b2e4597bd",
".git/objects/97/41269b27f8bb34051017b3e449c71ff3315a51": "3765c1df3917c8b4a8b60a6fb1107db4",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9b/dc24264b9893375ebf987c5d5e4a50593cc165": "79501044745cc3df9e1c592f37f908fb",
".git/objects/9c/c17095450743359ee858080e2891aa8523ba12": "af77563f9b925043a574f89cd71c49ea",
".git/objects/a0/640029025dd7670b1a009c9414662db175a6cd": "3c758a3fbbf5cadcafc827c37d5589a9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/c9f093a93427960329ea50ffa53a9dffd8f80a": "487b1543f6dafb0a253eb9bc9a7afd11",
".git/objects/a4/ef936afc8ff2b22a3dbd7d5d391ceff00dce8a": "08d524bdecaeb5ff5d475bcc5465e994",
".git/objects/a6/642dcedb573d487bf93b1e76058124f6322e94": "a7244eceac5a243f380597da36ba4184",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/879d8bf5da64fa13a3e0cd3a4816c69c0a6b4b": "fc6cf314c6ff6deb97e365a0011e3244",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/ac/eb1e92acccf2a9bc611ce2c54f43b02a7e381d": "e34d6045a81f4b8de62bdd144a544212",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/77f699eb8928bb3589ec69c2393918b70020e0": "b77a034a9ba6ae03348ba85a90f5ec5d",
".git/objects/b2/6ace6f6a350b93991637c29b64116ded60f34e": "40f3432124a7e5ab17d22c15cb87b2a3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/25b99915737fa63c3723548ef0b4f1683ec46b": "6fc7d05ffab913e70cd1add45ccc125d",
".git/objects/c7/0c9cd0bc0088dfcfb1b7c982632d0242fabd70": "7a2eed169ff6d2e9cd8506590cee92af",
".git/objects/ce/8fe08de32223fe0dbb3f43d80be7e5dc6abbac": "4bbed5eacb68e58f48b7837357298b2e",
".git/objects/d4/637a79811256ec09a7faea2b751453e26492cf": "df6329b9541f6ad8785c49c208aa24b3",
".git/objects/d5/3e5fc488b40a3dc4023a9b4aa7a3a8cce3b49d": "25f823fc36d9e64911f7051467313e48",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/0a8533fb370cc970560bcaa200d371df0f4b38": "74f930ce8b19e251b29ef7a86cfeb8c7",
".git/objects/d9/98cf5b468413ca1c950096dc9d0f5dfdb1359f": "872d06090d2311cd71232a001d72623a",
".git/objects/db/bd9aa7d654a300af89a6d3ec6e5cc65e4ef87c": "dcce71ebfe107e65ee2d4e1c11eb9500",
".git/objects/db/f7478542312ae35a49ba2b8a3fa6a7f6695224": "6ae1e46f6b62184d79aa5c9da783b50d",
".git/objects/e2/e33d7b300321285008b9ea711aff827ce44171": "2d7efde538daeb8b1aa3b80e1a56d882",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/29afe6df27297f0082ccbe34acdc6ae15472fa": "cf03f3d1506f36093e2eff1d8a494cee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f4b9fffe5804bdfca6b576ea81d68088a52f6c": "d7fde8afca1d33ad33d122fe3647b45a",
".git/objects/ed/bd047e69f24054c78030215639ec653a26c443": "f372cb9ae3035977b04d17fd71e9742c",
".git/objects/f5/4fb605b152dac2e3982b95f53c8765e968ed60": "318e1abdf15f5e388242d5527105cc9f",
".git/objects/f7/14a514d94e495095e2f1e525a341eade187c17": "ca0d4350dcdad8026382089554e0448e",
".git/objects/f8/7139f6a9541dd90bfdcb78349c04fd3c80d9b8": "0a9e6be42fb3c32200c854866ac69b33",
".git/refs/heads/master": "bb9a99fca82f21e90096ad49c7b56682",
".git/refs/remotes/AhmetCavus.github.io/master": "bb9a99fca82f21e90096ad49c7b56682",
"assets/AssetManifest.json": "16544798b967bdafd391ab6d13cad6d4",
"assets/export.template.light.xlsx": "e1ee1b3c24268bebd2144c2d187af0b3",
"assets/export.template.xlsx": "e9f4b5b292134eeb5eb597860a437a1b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/fonts/WorkSans-Bold.ttf": "1fed2d8028f8f5356cbecedb03427405",
"assets/fonts/WorkSans-Medium.ttf": "488b6f72b6183415e7a20aafa803a0c8",
"assets/fonts/WorkSans-Regular.ttf": "30be604d29fd477c201fb1d6e668eaeb",
"assets/fonts/WorkSans-SemiBold.ttf": "6f8da6d25c25d58ef3ec1c8b7c0e69c3",
"assets/images/app_logo.png": "e4dfa85f1342df594eb83b0b5bb00d59",
"assets/NOTICES": "543fef7241593d8bca9a9a1bf1a911c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/translations/de-DE.json": "d26d047662dd91aa16d9348b61c7e0fa",
"assets/translations/en-GB.json": "d26d047662dd91aa16d9348b61c7e0fa",
"assets/translations/en-US.json": "d26d047662dd91aa16d9348b61c7e0fa",
"assets/translations/tr-TR.json": "d26d047662dd91aa16d9348b61c7e0fa",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0aa28361305db06405a2bfbdcef87abd",
"/": "0aa28361305db06405a2bfbdcef87abd",
"main.dart.js": "e85f1b99103f0c71f9b1d81aad11f570",
"manifest.json": "373baa6dea590e99420c913ecdf3125c",
"README.md": "6aa62ef26ffc24d3790340c1974c1f06",
"version.json": "d05b6f26763a1b9ab13e3bca7e5471b7",
"web.config": "99d65e1fb2a33d7f078debbf56406c19"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
