# 💕 Trang Web Lời Mời Lãng Mạn 💕

Trang web đáng yêu với nhiều hiệu ứng để mời người yêu đi ăn lẩu hấp tại CLOUD POT Gold Tower.

## 🌟 Tính Năng

- ✨ **Hiệu ứng đẹp mắt**: Particles background, floating hearts, typing animation
- 💕 **Tương tác lãng mạn**: Click vào trái tim, nút yêu thương với hiệu ứng đặc biệt
- 📱 **Responsive design**: Tối ưu cho mọi thiết bị
- 🎨 **Thiết kế đáng yêu**: Gradient màu hồng, animation mượt mà
- 💌 **Thiết kế phong bì**: Layout như một lá thư tình thật sự

## 🚀 Cách Deploy Lên GitHub Pages

### Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào [GitHub.com](https://github.com)
2. Click **"New repository"** (nút xanh lá)
3. Đặt tên repository (ví dụ: `love-invitation` hoặc `romantic-dinner`)
4. Chọn **Public** (để GitHub Pages hoạt động miễn phí)
5. Click **"Create repository"**

### Bước 2: Upload Files Lên GitHub

**Cách 1: Upload trực tiếp trên GitHub**
1. Vào repository vừa tạo
2. Click **"uploading an existing file"**
3. Kéo thả 3 files: `index.html`, `style.css`, `script.js`
4. Viết commit message: "Add romantic invitation website"
5. Click **"Commit changes"**

**Cách 2: Sử dụng Git (nếu bạn biết Git)**
```bash
git init
git add .
git commit -m "Add romantic invitation website"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Bước 3: Kích Hoạt GitHub Pages

1. Vào repository → tab **"Settings"**
2. Cuộn xuống tìm **"Pages"** (hoặc **"Code and automation" → "Pages"**)
3. Trong phần **"Source"**, chọn **"Deploy from a branch"**
4. Chọn branch **"main"** và folder **"/ (root)"**
5. Click **"Save"**

### Bước 4: Truy Cập Website

- GitHub sẽ tự động build và deploy website
- Đợi 2-5 phút, sau đó truy cập: `https://yourusername.github.io/your-repo-name`
- Nếu repo tên `yourusername.github.io` thì URL sẽ là: `https://yourusername.github.io`

## 📝 Tùy Chỉnh Nội Dung

### Thay Đổi Thông Tin Nhà Hàng
Mở file `index.html` và tìm các dòng:
```html
<h3>🍲 CLOUD POT Gold Tower</h3>
<p>📍 Tầng 2, Tòa Gold Tower</p>
<p>📍 275 Nguyễn Trãi, P.Thanh Xuân Trung, Q.Thanh Xuân, TP.Hà Nội</p>
```

### Thay Đổi Ngày Giờ
Tìm và sửa:
```html
<h2>🗓️ Ngày: 11/10/2025</h2>
<h2>🕰️ Giờ: 7:30 tối</h2>
```

### Thay Đổi Lời Nhắn
Tìm phần:
```html
<p>Anh muốn mời em đi ăn lẩu hấp cùng anh vào buổi tối đặc biệt này...</p>
```

## 🎨 Tùy Chỉnh Giao Diện

### Thay Đổi Màu Sắc
Mở file `style.css` và tìm:
```css
background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
```
Thay đổi các mã màu hex để có màu khác.

### Thêm Ảnh
Thêm ảnh vào thư mục và cập nhật HTML:
```html
<img src="your-image.jpg" alt="Romantic photo" style="width: 200px; border-radius: 10px;">
```

## 🔧 Troubleshooting

### Website Không Hiển Thị
1. Kiểm tra repository có **Public** không
2. Đợi 5-10 phút sau khi enable GitHub Pages
3. Kiểm tra file `index.html` có trong root folder không

### Hiệu Ứng Không Hoạt Động
1. Mở Developer Tools (F12) để xem lỗi
2. Kiểm tra file `script.js` có được load không
3. Thử refresh trang

### Mobile Không Đẹp
1. Kiểm tra viewport meta tag trong HTML
2. Test trên nhiều kích thước màn hình khác nhau

## 💡 Tips

- **Thêm âm nhạc**: Uncomment phần audio trong `script.js`
- **Thêm ảnh**: Upload ảnh lên GitHub và link trong HTML
- **Custom domain**: Có thể dùng domain riêng thay vì github.io
- **Backup**: Luôn backup code trước khi thay đổi

## 📞 Hỗ Trợ

Nếu gặp vấn đề, hãy:
1. Kiểm tra console (F12) để xem lỗi
2. Đảm bảo tất cả files đã upload đúng
3. Thử tạo repository mới nếu cần

---

**Chúc bạn có buổi hẹn hò lãng mạn! 💕**
