### Bài 1: Cài đặt môi trường

- typescript: compilier chính
- ts-node: chạy file .ts trực tiếp không cần buil ra .js
- @types/node: giúp TypeScript hiểu các hàm Node js (như console, process).

### Bài 2: Kiểu dữ liệu cơ bản trong TypeScript

#### Boolean là gì ?

- Boolean là kiểu dữ liệu cơ bản trong TypeScript(và JavaScript), chỉ nhận hai giá trị
  hoặc false

- Dùng để biểu diễn trạng thái logic (đúng/sai) trong lập trình.

### So sánh Null và Undefined

- null: chủ động gán để nói "giá trị rỗng"
- undefined: Thường là trạng thái mặc định khi biến chưa được gán
- Trong thực tế, null được dùng phổ biến hơn để biểu thị "không có giá trị"

### strictNullChecks

- Một tuỳ chọn trong tsconfig.json (khi bật, giá trị null và undefined không được tự đọng gán cho mọi kiểu dữ liệu )
