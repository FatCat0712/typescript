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

### Type Inference and Type Annotation

- Trong TypeScript, type inference (suy luận kiểu) và type annotation (gán kiểu rõ ràng) là hai cách để xác định kiểu dữ liệu cho biến, hàm

#### Type Inference

- Ý nghĩa: TypeScript tự động suy ra kiểu dữ liệu dựa trên giá trị được gán
- Khi nào xảy ra: Khi bạn khai báo biến và gán giá trị ngay, TypeScript sẽ tự
  hiểu kiểu mà không cần bạn ghi rõ

```ts
let age = 25; // Typescript suy ra: age là number
age = "25"; // Lỗi! Typescript biết age phải là number
```

- Ưu điểm:
  Code ngắn gọn, ít lặp lại
  Tự động áp dụng khi TypeScript có đủ thông tin để suy ra kiểu
- Nhược điểm:
  Không kiểm soát được khi logic phức tạp hoặc TypeScript suy sai (hiếm)

#### Type Annotation

- Ý nghĩa: Bạn tự ghi rõ kiểu dữ liệu cho biến, tham số hoặc giá trị trả về
- Khi nào dùng: Khi bạn muốn đảm bảo kiểu rõ ràng hoặc TypeScript không thể
  suy ra đúng

```ts
let name: string = "John"; // Rõ ràng name là string
function greet(person: string): string {
  return `Hello, ${person}}`;
}
```

- Ưu điểm:
  Kiểm soát kiểu chặt chẽ, tránh sai sót
  Rõ ràng hơn khi đọc code, đặc biệt trong dự án lớn.
- Nhược điểm:
  Code dài hơn, đặc biệt nếu kiểu đã rõ ràng

#### Sử dụng sao cho hợp lý ?

- Để cân bằng giữa tính ngắn gọn và an toàn, hãy làm theo các nguyên tắc sau:

##### Nên dùng Type Inference khi

- Giá trị được gán ngày và kiểu rõ ràng

```ts
let count = 10; // Rõ ràng là number, không cần annotation
let user = { name: "Alice", age: 30 }; // TypeScript suy ra {name: string, age: number}
```

- Trong các hàm đơn giản, khi giá trị trả về dễ suy ra:

```ts
function add(a: number, b: number) {
  return a + b; // Typescript suy ra trả về number
}
```

- Lý do: Giảm lặp lại, giữ code gọn gàng mà vẫn an toàn

##### Nên dùng Type Annotation khi

- Khi khai báo biên mà chưa gán giá trị:

```ts
let username: string; // Chưa gán giá trị, cần annotation
username = "John"; // OK
```

- Trong tham số và giá trị trả về của hàm để rõ ràng ý đinh:

```ts
  function processData(data: string[]) string{
    return data.join(", ");
  }
```

- Khi làm việc với dữ liệu phức tạp (như API, đối tượng động):

```ts
interface User {
  id: number;
  name: string;
}
let user: User = { id: 1, name: "Alice" }; // Annotation giúp rõ ràng cấu trúc
```

- Khi muốn hạn chế kiểu cụ thể(ví dụ: tránh any hoặc unknown không rõ ràng)

```ts
let value: string | number; // Rõ ràng giới hạn chỉ là string hoặc number
```

#### Mẹo thực tế

- **Ưu tiên inference khi có thể**: Nếu TypeScript suy ra đúng kiểu, không cần annotation để tránh dư thừa.
- **Dùng annotation khi cần rõ ràng**: Đặc biệt với tham số hàm, giá trị trả về,
  hoặc khi làm việc với đội nhóm để code dễ đọc hơn.
- **Kết hợp với strict mode**: Bật strict trong tsconfig.json để TypeScript bắt lỗi
  chặt chẽ hơn, buộc dùng annotation khi cần.
- **Kiểm tra kiểu động**: Khi làm việc với unknown hoặc dữ liệu không rõ (như API), kết hợp inference và annotation để xử lý an toàn:

```ts
function handleData(data: unknown) {
  if (typeof data === "string") {
    // TypeScript sẽ suy ra data là string ở đây
    return data.toUpperCase();
  }
  return "Not a string";
}
```

##### Tóm lại

- **Type inference**: Dùng khi kiểu rõ ràng, giảm code thừa
- **Type Annotation**: Dùng khi cần kiểm soát chặt chẽ hoặc TypeScript không thể suy ra
- **Cân bằng**: Inference cho code đơn giản, annotation cho logic phức tạp hoặc khi cần rõ ràng. Điều này giúp code vừa ngắn gọn, vừa an toàn, dễ bảo trì!

### Bài 3: Object, Array, Tuple, Enum trong TypeScript

#### Object

- **Khái niệm**: Lưu trữ dữ liệu dạng cặp key-value, dùng để mô tả dữ liệu phức tạp, như một Task trong Dashboard App

#### Array

- Array dùng để quản lý danh sách, như danh sách Task trong dự án.

#### Tuple

- Tuple là mảng cố định, rất phù hợp để xử lý phản hồi API.

#### Enum

- Enum giúp quản lý trạng thái cố định, như trạng thái Task.

### Bài 4: Union, Intersection, Literal Types trong TypesScript

#### Union Types

**Khái niệm**: cho phép một biến thuộc nhiều kiểu

#### Intersection Types

**Khái niệm**: kết hợp nhiều type thành một

#### Literal Types

**Khái niệm**: giới hạn giá trị cụ thể (VD: chuỗi, số cố định)

### Bài 5: Type alias vs Interface trong TypeScript

**Type Alias**(từ khoá type): là cách đặt tên mới cho một loại dữ
liệu bất kỳ(primitive, object, union, ...). Nó như "bí danh"(alias) cho
type, không tạo type mới mà chỉ tham chiếu.

**Khai báo**
type tên=...;

**Ví dụ**

```ts
type Point = {
  x: number;
  y: number;
};
```

**Chức năng**

- Định nghĩa primitive, union, intersection, tuple, mapped types, conditional types.
- Kếp hợp với intersection (&) để "kế thừa".
- Sử dụng generics cho reusable types.
- Định nghĩa function types, recursive types.
- Implement bởi class (nếu là object type).

**Sự khác biệt với Interface**:

- Type Alias có thể là union/tuple(Interface không thể)
- Dùng & thay vì extends (Interface dùng extends nhanh hơn).

**Interface**: là cách định nghĩa cấu trúc của object hoặc class, giống
như "hợp đồng" mà code phải tuân thủ. chỉ dùng cho object shapes.

**Khai báo**
interface Tên {...}

**Chức năng**

- Định nghĩa object shapes, function types(call signatures)
- Kế thừa với extends (có thể nhiều interface).
- Hỗ trợ declaration merging (merge tự động nếu trùng tên).
- Sử dụng generics.
- Implement bởi class.
- Thêm optional/readonly properties, index signatures.

**Lưu ý**:

- Không định nghĩa union, tuple trực tiếp (phải mix với type)
- Không hỗ trợ mapped/conditional types trực tiếp.
- Không thể là non-object types(chỉ object).

**Sự khác biệt cơ bản**: Type Alias linh hoạt hơn (hỗ trợ nhiều loại type),
Interface dễ mở rộng hơn (hỗ trợ merging and extends).

#### Bảng so sánh Type Alias vs Interface

| Tiêu Chí                   | Type Alias (type)                           | Interface (interface)      | Sự Khác Biệt Và Khi Nào Sử Dụng                                             |
| -------------------------- | ------------------------------------------- | -------------------------- | --------------------------------------------------------------------------- |
| Định nghĩa primitive/union | Có thể (e.g., `type ID = string \| number`) | Không thể trực tiếp        | Type Alias nếu cần linh hoạt (e.g., ID đa dạng); Interface nếu chỉ object.  |
| Kế thừa                    | Dùng `&` (intersection)                     | Dùng `extends` (nhanh hơn) | Interface cho dự án lớn cần mở rộng nhanh; Type Alias cho kết hợp phức tạp. |
| Merging                    | Không (lỗi trùng tên)                       | Có (tự merge)              | Interface cho libs/third-party; Type Alias cho code đơn giản.               |
| Mapped/Conditional         | Có (ví dụ: mapped/conditional types)        | Không trực tiếp            | Type Alias cho advanced types (e.g., utility types).                        |
| Tuple                      | Có (e.g., `[number, number]`)               | Không                      | Type Alias cho dữ liệu có thứ tự cố định (e.g., mảng tọa độ).               |
| Error Messages             | Có thể dài (expand thành full type)         | Ngắn gọn (giữ tên)         | Interface cho trải nghiệm dev tốt hơn.                                      |
| Hiệu suất                  | Tốt, nhưng có thể chậm với `&` lớn          | Tốt hơn với `extends`      | Interface cho app lớn.                                                      |

### Bài 6: Function typing trong TypeScript

#### Phần 1

- 1: function cơ bản
- 2: tham số mặc định (default value)
- 3: tham số tuỳ chọn (optional param)

#### Phần 2

- Nâng cao: Union Types, Void, Never, và Function Overloading

- **Union types**: tham số hoặc return có thể thuộc nhiều kiểu.
- **Void**: hàm không trả về gì
- **Never**: hàm không bao giờ hoàn thành(ném lỗi hoặc vòng lặp vô hạn)
- **Function overloading**: định nghĩa nhiều chữ ký hàm cho cùng một hàm.
