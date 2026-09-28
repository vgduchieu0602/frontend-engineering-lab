# Lesson 02 - DOM Manipulation

## 1. DOM Manipulation là gì?

DOM Manipulation là việc JavaScript đọc và thay đổi DOM sau khi browser đã tạo document.

Ở mức cơ bản có thể ghi nhớ các thao tác:

```text
READ
  ↓
CREATE
  ↓
UPDATE
  ↓
APPEND
  ↓
REMOVE
```

---

## 2. Read - Tìm DOM Element

Có thể sử dụng `document.querySelector()` để tìm element đầu tiên phù hợp với CSS selector.

```js
const taskList = document.querySelector("#task-list");
```

Mental model:

```text
document
   ↓
querySelector("#task-list")
   ↓
DOM Element
   ↓
taskList giữ reference tới element
```

`querySelector()` không tạo element mới.

---

## 3. Create - Tạo DOM Element

```js
const task = document.createElement("p");
```

`createElement()` tạo một DOM element mới.

Mental model:

```text
document.createElement("p")
          ↓
      p element
```

Điểm quan trọng:

```text
Element được tạo
≠
Element đã nằm trong DOM tree
```

Sau `createElement()`, element đã tồn tại nhưng chưa được gắn vào document nên người dùng chưa nhìn thấy nó trên giao diện.

---

## 4. Update - Thay đổi DOM Element

Có thể thay đổi nội dung text bằng `textContent`.

```js
task.textContent = "Learn React";
```

Mental model:

```text
BEFORE

p


UPDATE

task.textContent = "Learn React"


AFTER

p
└── "Learn React"
```

`textContent` có thể được dùng để đọc hoặc thay đổi text của node.

---

## 5. Append - Đưa Element vào DOM Tree

```js
taskList.appendChild(task);
```

`appendChild()` thêm một node vào bên trong node cha.

Trước:

```text
div#task-list
```

Element mới:

```text
p
└── "Learn React"
```

Sau `appendChild()`:

```text
div#task-list
└── p
    └── "Learn React"
```

Khi DOM tree thay đổi, browser có thể cập nhật UI để phản ánh trạng thái mới.

---

## 6. `createElement()` khác `appendChild()`

Hai API giải quyết hai việc khác nhau.

### `createElement()`

```js
const task = document.createElement("p");
```

Tạo DOM element.

### `appendChild()`

```js
taskList.appendChild(task);
```

Đưa DOM element vào DOM tree.

Mental model:

```text
CREATE
   ↓
Element tồn tại
   ↓
CONFIGURE
   ↓
Element được thay đổi
   ↓
APPEND
   ↓
Element nằm trong DOM tree
   ↓
Browser cập nhật UI
```

---

## 7. Remove - Xóa DOM Element

```js
task.remove();
```

`remove()` loại element đó khỏi DOM tree.

Ví dụ:

```text
BEFORE

div#task-list
└── p
    └── "Learn React"


task.remove()


AFTER

div#task-list
```

Sau khi element bị remove khỏi DOM tree, nó không còn được hiển thị tại vị trí đó trên document.

---

## 8. Event + DOM Manipulation

DOM manipulation thường xảy ra sau một hành động của người dùng.

Ví dụ:

```js
addButton.addEventListener("click", () => {
  const task = document.createElement("p");

  task.textContent = "Learn Frontend";

  taskList.appendChild(task);
});
```

Flow:

```text
User click
   ↓
click event
   ↓
callback chạy
   ↓
createElement()
   ↓
textContent
   ↓
appendChild()
   ↓
DOM thay đổi
   ↓
Browser cập nhật UI
```

Có thể thêm event cho element vừa tạo:

```js
task.addEventListener("click", () => {
  task.remove();
});
```

Flow:

```text
User click task
   ↓
callback chạy
   ↓
task.remove()
   ↓
task bị loại khỏi DOM tree
   ↓
UI cập nhật
```

---

## 9. Mental Model cần nhớ

### Read

```text
querySelector()
      ↓
Find DOM Element
```

### Create

```text
createElement()
      ↓
Create DOM Element
```

### Update

```text
textContent
      ↓
Change DOM Element
```

### Append

```text
appendChild()
      ↓
Put Element into DOM Tree
```

### Remove

```text
remove()
      ↓
Remove Element from DOM Tree
```

---

## 10. Những điều cần tránh hiểu sai

### `createElement()` không tự hiển thị element

```js
const task = document.createElement("p");
```

Element mới chưa nằm trong DOM tree.

Cần một thao tác như:

```js
taskList.appendChild(task);
```

để gắn nó vào tree.

### Biến không chứa HTML string

```js
const task = document.createElement("p");
```

`task` giữ reference tới DOM element, không phải string `"<p></p>"`.

### DOM Manipulation là imperative

Với JavaScript thuần, developer trực tiếp ra lệnh:

```text
tạo element
→ thay text
→ thêm element
→ xóa element
```

Khi UI lớn, việc tự đồng bộ nhiều DOM element có thể trở nên phức tạp.

Đây là một trong những vấn đề quan trọng cần hiểu trước khi học React.

---

## 11. Final Mental Model

```text
JavaScript
    ↓
DOM API
    ↓
Create / Read / Update / Remove
    ↓
DOM Tree thay đổi
    ↓
Browser cập nhật UI
    ↓
User nhìn thấy trạng thái mới
```
