self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("nurseflow").then(cache =>
      cache.addAll(["./","./index.html","./styles.css","./app.js"])
    )
  );
});

