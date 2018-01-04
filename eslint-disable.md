```
/* eslint-disable no-alert, no-console */

---

/* eslint-disable */

alert('foo');

/* eslint-enable */

---

/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */

---

/* eslint-disable */

alert('foo');

---

/* eslint-disable no-alert */

alert('foo');

---

alert('foo'); // eslint-disable-line

---

// eslint-disable-next-line
alert('foo');

---

alert('foo'); // eslint-disable-line no-alert

---

// eslint-disable-next-line no-alert
alert('foo');

---

alert('foo'); // eslint-disable-line no-alert, quotes, semi

---

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

---

foo(); // eslint-disable-line example/rule-name
```