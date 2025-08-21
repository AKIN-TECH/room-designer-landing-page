'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4bb0f72c222b789950a703619b89960c",
".git/config": "58a3e683f13af356216f7b480e82406b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6b56af5b3cc4acb6cb9d0011ceab2eb3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "55c46fcaa9264ed0a340ee99404b78e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81e27e6ca5f891ebbe446d3ad24f3dc0",
".git/logs/refs/heads/main": "5a8adc78c80f1896955de3121fc81705",
".git/logs/refs/remotes/origin/HEAD": "c179bfe6da4bb10b34dafe109c600c99",
".git/logs/refs/remotes/origin/main": "bf35fa5d3691470bffd28d3a18da70d7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0e/62788fb237d63c7d54c35fe01d2a719d2ac4ba": "fcd041c257ce5b8f293bd762aab693bb",
".git/objects/13/7e0cc78c9e9dcd3e3539dfecd42b538e7c2d9b": "2b17a808698639ba1090b63ad403f2cc",
".git/objects/14/a02bde777ac84807a3e7032b0e3579ed71999c": "fcdcaccf518eab58ad0c6a44ab66533c",
".git/objects/16/6214fae43884f97cfa927b0e45d2665467922d": "9da61c6a3a7008438391fd5d0a9f11f5",
".git/objects/17/5986ebd3526f5c7ddc4819068636637bbde8dc": "e63f4b21e83e23b9a46a0b54f0ee1096",
".git/objects/18/2f273f2e8a63ce3862ec645d55dc1cbf19d003": "5233c76872917bd95b98baad8646596f",
".git/objects/18/49cb9511289f19be1c1e869af2fcb380e421bf": "89103dc17cbbabbec7129f9ec95425b9",
".git/objects/19/0b229b4df0b2eaef55a4d1aa5fcd0dbc371783": "12c6ae24555b31f79f4c4ee79a9c42fd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/4e9fd40123d9c4b25549c60454b75c29cce1f4": "9355e72a1cbe9056f73fd72ef327ba21",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/31/5a85df9591b8c4746ebca8518e969d21027444": "61ca059a70b23d4ada24436f9d0a3cd0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7faffc0684c201646c8e0044de88150b818190": "840397ea5402a9adbd8522c96c7b3a5f",
".git/objects/62/03a1978b0b9137052872442202b2ad6f80b396": "4c287e670e5f6cefc26b3e34b7b2d1bc",
".git/objects/62/1f8921cb17793a980c712308dc5c74b6911846": "8d123b5e84d86562d9541ed7f8106d36",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/6c6d40e807594ccd31ebe8572873e5b40535d9": "de010cc865d01c4c0b2a5c02ecf2c0af",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6c/4fb70f6479f3aebe1c75266dc935bb19222667": "c6d00f3de1fcbfc43633aab88b78beb0",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/d795de73acab0be0c19024de50ceebc22ec9d7": "5b867a04e82346d8207b6fb440bac026",
".git/objects/79/86d87b26a31f8726619680ab3d5d1b29877123": "34251085543f5aa137985d75e30a73e0",
".git/objects/7b/36abba7399f26c0c0933eb52eea4420ea99851": "4916a0e84489b873779105c4b3b95626",
".git/objects/7d/bd025e3d65a2897773872a2bacc616dc4c342d": "d18380053c362da01e076281d96fe36e",
".git/objects/7e/571d66c68bd19d39b9b164f3b74cc9e298363e": "1b04d3277edc316d9b332901e5599363",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a187c86b7e6f18779636fcf9363b46ebd52170": "169d123ba65c91a5df0a6be93eb73624",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2883e992dc6588c2ec6c911a21728f6a5cb02f": "9faaa4d7386314664f6e0eb32e5d1670",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2504690829fa5c2c720baad38a57793b7e931a": "b516c37b79eed6a345f24006e21befbb",
".git/objects/8b/8f053155366bf35028839a36f7f7012384260b": "fd434a1c8136ad16b296e9c81eaff097",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/96/97c3aff0a5cf38dc4eb287e18e83409b79091b": "925cb11a568336e6dd686621edb3fa54",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/0f997d2e4885a810222e9f5850e01e1680e2d1": "7c4f1233d7e7e14ad019d63dc4b4eb48",
".git/objects/9c/0cdc03d1eaf5636f986c4c89221ee609e07e25": "f4f85e93d39a806ff160c4e93b770a00",
".git/objects/9e/7b23db36d24928b25e6c24cb01ea3137dcca9b": "88955f72277ebb2d7c3c11f6d9c7d8b6",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/e9b7c8a6f1694a372f1d4679989d905b16ef42": "38f502f887a1ccc8f049c790455c95fe",
".git/objects/c3/a665cd033e90ead2bbcdbb2da685f8886550eb": "f365deec1f6ff02a2c015fa8632961f1",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/61bbb5943490a039b16831d956dd268ef9cb1b": "48c371e6dae1e571d87f864a117d677c",
".git/objects/df/b4a235c3f178d1b5e7b81b853fdf2bc8ae93e7": "c4cb0d33c42ef9872f81cacfd633654d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/389e2e40a1d6f3687bfb7628f745255ec310cb": "10d9fe1b2864c944641d7860cad58c08",
".git/objects/ef/c8dc4a6b1ab649036715a00b5eb32c6300c36b": "56fc8a6ed56424b4d13ed3befb7278b7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/257293d45d32cb2d5d8140eb2ea6b133c71c07": "d10ebacfb1c6c8c831e752b7184db298",
".git/objects/fa/181e2c48f63669b919373c0c85d8ff4e3d3ed0": "09d324a4dbdbfe94f772eea92e573dbb",
".git/objects/fe/3986973e82346fc2515ebf04d252452da180e7": "e3f3941be94bbebf2ed10f17397b40cc",
".git/refs/heads/main": "fb26701aeac5972a3aa229c1ec887c44",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fb26701aeac5972a3aa229c1ec887c44",
"assets/AssetManifest.bin": "1af733543d628f0e51fee656a7f2ef4f",
"assets/AssetManifest.bin.json": "7cf2e722514728cacb52f4066c4becb1",
"assets/AssetManifest.json": "d150cf67a71410e76cb891160f1d0c47",
"assets/assets/cover_page.jpg": "6c83b062b8fae899adeb5e9513edccf5",
"assets/assets/cover_page2.jpg": "d554eaae8f45246766c86c8711cff29d",
"assets/assets/logo.png": "96e169af9584a11f32910dfaeb972320",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f64b1f787eb3de4cd16d6f9a8d9b2c5c",
"assets/NOTICES": "b5aca3632b26b71fc353a07e4b24c960",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "4532ff461f121c1bde78731a7984ddf1",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "860396ca984c602cd648aa246ebda8c9",
"icons/Icon-192.png": "bc7363b947f9fd88d86701ef5996edbe",
"icons/Icon-512.png": "470768bb337a989e2c8e1031ffcdadc1",
"icons/Icon-maskable-192.png": "bc7363b947f9fd88d86701ef5996edbe",
"icons/Icon-maskable-512.png": "470768bb337a989e2c8e1031ffcdadc1",
"index.html": "ae663791faa7cecd044fa14eea8e502f",
"/": "ae663791faa7cecd044fa14eea8e502f",
"main.dart.js": "320cb75c7ac9bf793ed742b9b05e561f",
"manifest.json": "bd3c153598351960d9bff0f319343e24",
"version.json": "4791f204a867cf3e0e6fd1b7ba319c92"};
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
