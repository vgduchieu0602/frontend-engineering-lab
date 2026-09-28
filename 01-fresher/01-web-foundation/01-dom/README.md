# Lesson 01 - DOM Mental Model

## 1. HTML là gì?

HTML là **markup** dùng để mô tả cấu trúc và nội dung của một document.

Ví dụ:

```html
<button>Buy</button>
```

HTML và DOM có liên quan nhưng không phải cùng một thứ.

---

## 2. DOM là gì?

DOM (Document Object Model) là **object model** mà browser tạo ra để biểu diễn document.

Mental model:

```text
HTML
  ↓
Browser parse
  ↓
DOM
```

JavaScript có thể sử dụng các DOM API để đọc và thay đổi document.

---

## 3. HTML String khác DOM Element

```js
const html = "<button>Buy</button>";
```

`html` ở đây chỉ là một JavaScript string.

Trong khi:

```js
const button = document.querySelector("button");
```

`button` là reference tới DOM element được tìm thấy trong document.

Điểm cần nhớ:

```text
Thay đổi String
≠
Thay đổi DOM
```

Thay đổi DOM có thể khiến browser cập nhật phần giao diện mà người dùng nhìn thấy.

---

## 4. `document`

`document` đại diện cho document hiện tại trong DOM.

JavaScript có thể bắt đầu từ `document` để tìm các element.

Ví dụ:

```js
const title = document.querySelector("#title");
```

Mental model:

```text
document
   ↓
querySelector("#title")
   ↓
DOM Element
```

---

## 5. `querySelector()`

`querySelector()` trả về element đầu tiên phù hợp với CSS selector được truyền vào.

HTML:

```html
<h1 id="title">Frontend Engineering Lab</h1>
```

JavaScript:

```js
const title = document.querySelector("#title");
```

Biến `title` giữ reference tới DOM element tìm được.

---

## 6. `textContent`

`textContent` có thể được sử dụng để đọc hoặc thay đổi text của một DOM node.

```js
title.textContent = "DOM Updated!";
```

Mental model:

```text
DOM ban đầu
   ↓
JavaScript thay đổi DOM
   ↓
DOM mới
   ↓
Browser cập nhật UI
```

---

## 7. Event Listener

Có thể đăng ký một callback để chạy khi event xảy ra.

```js
button.addEventListener("click", () => {
  title.textContent = "DOM Updated!";
});
```

Mental model:

```text
User click
   ↓
Click event
   ↓
Event listener
   ↓
Callback
   ↓
JavaScript xử lý
```

Event sẽ được học chi tiết ở lesson riêng.

---

## 8. Example hoàn chỉnh

HTML:

```html
<h1 id="title">Frontend Engineering Lab</h1>

<button id="change-title-button">
  Change title
</button>

<script src="./main.js"></script>
```

JavaScript:

```js
const title = document.querySelector("#title");

const changeTitleButton = document.querySelector(
  "#change-title-button"
);

changeTitleButton.addEventListener("click", () => {
  title.textContent = "DOM Updated!";
});
```

Flow:

```text
HTML
  ↓
Browser parse
  ↓
DOM
  ↓
JavaScript lấy DOM element
  ↓
User click
  ↓
Callback chạy
  ↓
JavaScript thay đổi textContent
  ↓
DOM thay đổi
  ↓
Browser cập nhật UI
```

---

## 9. Những điều cần nhớ

### HTML không phải DOM

HTML mô tả cấu trúc document.

Browser parse HTML và tạo DOM representation.

### JavaScript xử lý được string

Không nên hiểu:

```text
JavaScript không xử lý được HTML string
→ nên cần DOM
```

Mental model đúng hơn:

```text
HTML string
≠
DOM element đang tồn tại trong document
```

### `querySelector()` không tạo element

```js
document.querySelector("#title");
```

chỉ tìm element đã tồn tại trong DOM.

### Biến có thể giữ reference tới DOM element

```js
const title = document.querySelector("#title");
```

Có thể hình dung:

```text
title
  │
  └────────→ DOM h1 element
```

### Thay đổi DOM có thể dẫn tới thay đổi UI

```js
title.textContent = "Hello";
```

JavaScript thay đổi DOM và browser cập nhật phần hiển thị tương ứng.

---

## 10. Mental Model cuối cùng

```text
HTML
  ↓
Browser
  ↓
DOM
  ↓
JavaScript
  ↓
DOM Manipulation
  ↓
Browser cập nhật UI
  ↓
User nhìn thấy thay đổi
```

Đây là nền tảng để sau này hiểu tại sao React tồn tại và React giải quyết vấn đề gì khi ứng dụng có rất nhiều DOM cần quản lý.
