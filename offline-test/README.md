# offline test

### goal

learn and understand HTMLs `web storage` and `service worker` (offline page) capabilities and limitations.

## notes

`web storage` has two forms: `local` and `session`.

`local storage` is a long-term storage mechanism, data is persistant even after the browser is closed.

`session storage` is a short-term storage mechanism, data is deleted when the user closes the browser or navigates away from the website.

```javascript
// local storage get/set
localStorage.setItem("key", "value");
var data = localStorage.getItem("key");

// session storage get/set
sessionStorage.setItem("key", "value");
var data = sessionStorage.getItem("key");
```

##### reference
- [w3schools: web-storage](https://www.w3schools.in/html5/web-storage)
- [w3schoold: service-worker](https://www.w3schools.in/html5/offline-web-pages)