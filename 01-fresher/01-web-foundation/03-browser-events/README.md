# Lesson 03 - Browser Events

## 1. Event là gì?

Event là một sự kiện xảy ra trong browser, ví dụ: click, input, submit, scroll, chọn file hoặc resize.

Mental model:

```text
Something happens
       ↓
Browser detects event
       ↓
Event
       ↓
Registered listener
       ↓
Callback(event)
       ↓
JavaScript handles it
```

## 2. addEventListener()

```js
element.addEventListener(eventType, callback);
```

Ví dụ:

```js
button.addEventListener("click", () => {
  console.log("clicked");
});
```

Ba thành phần:

```text
button   → Event Target
"click"  → Event Type
() => {} → Callback
```

## 3. Register Callback không phải Execute Callback

```js
button.addEventListener("click", callback);
```

Dòng trên đăng ký callback với browser, không gọi callback ngay.

```text
SETUP

Find DOM Element
       ↓
addEventListener()
       ↓
Register Callback
       ↓
WAIT

RUNTIME

User Action
       ↓
Event xảy ra
       ↓
Browser gọi Callback
```

## 4. Event Object

```js
button.addEventListener("click", (event) => {
  console.log(event);
});
```

`event` là object chứa thông tin về event vừa xảy ra.

```js
event.type;
```

có thể cho biết loại event, ví dụ `"click"`.

Event object không phải DOM element.

## 5. event.target

`event.target` là element nơi event bắt nguồn.

```js
input.addEventListener("input", (event) => {
  console.log(event.target);
});
```

Mental model:

```text
event
└── target
    └── input DOM element
```

## 6. event.target.value

```js
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

Nếu user nhập `react`:

```text
event
├── type → "input"
└── target → input element
             └── value → "react"
```

## 7. Input Event

```text
User nhập dữ liệu
       ↓
Input thay đổi
       ↓
input event xảy ra
       ↓
Browser gọi callback(event)
       ↓
event.target
       ↓
Input DOM Element
       ↓
event.target.value
       ↓
Current Input Value
```

## 8. value và textContent

Với element chứa text:

```js
result.textContent;
```

Với input:

```js
searchInput.value;
```

Mental model cơ bản:

```text
p / h1 / div...
       ↓
textContent

input
       ↓
value
```

## 9. Example

```js
const searchInput =
  document.querySelector("#search-input");

const searchButton =
  document.querySelector("#search-button");

const result =
  document.querySelector("#result");

searchButton.addEventListener("click", () => {
  result.textContent =
    `Searching for: ${searchInput.value}`;
});

searchInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

## 10. Những điều cần tránh hiểu sai

### Event không phải Event Target

Sai:

```text
event = input
```

Đúng:

```text
event
└── target
    └── input
```

### addEventListener không tự kích hoạt event

Nó chỉ đăng ký callback.

### Callback không chạy ngay khi đăng ký

Callback được browser gọi khi event phù hợp xảy ra.

## 11. Liên hệ với React

Browser JavaScript:

```js
button.addEventListener("click", handleClick);
```

React:

```jsx
<button onClick={handleClick}>
  Search
</button>
```

Browser event là nền tảng để hiểu event handling trong React.

## 12. Final Mental Model

```text
SETUP

DOM Element
     ↓
addEventListener
     ↓
Register Callback
     ↓
WAIT

EVENT

User Action
     ↓
Browser detects event
     ↓
Event Object
     ↓
Registered Callback
     ↓
JavaScript handles event
     ↓
DOM / Application State may change
     ↓
UI may update
```
