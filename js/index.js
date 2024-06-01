/* CHẠY HÌNH */
// Lấy ra các phần tử cần thiết
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

// Biến đếm và kích thước của hình ảnh
let counter = 0; // Bắt đầu từ hình ảnh đầu tiên
const size = images[0].clientWidth;

// Chức năng chạy slide
function nextSlide() {
    if (counter < images.length - 1) {
        counter++;
    } else {
        counter = 0; // Quay lại hình ảnh đầu tiên
    }
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(${-size * counter}px)`;
}

// Tự động chạy slide sau một khoảng thời gian
setInterval(nextSlide, 2000); // Chạy slide mỗi 2 giây

//sidebar
        document.addEventListener('DOMContentLoaded', function () {
            const menuIcon = document.getElementById('menu-icon');
            const menu = document.querySelector('.box-menu');
        
            menuIcon.addEventListener('click', function () {
                menu.classList.toggle('open');
            });
        });


        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('form').addEventListener('submit', function (e) {
                var nameInput = document.getElementById('ten').value.trim();
                var emailInput = document.getElementById('email').value.trim();
                var messageInput = document.getElementById('message').value.trim();
                // Kiểm tra tên không chứa ký tự số
                if (/\d/.test(nameInput)) {
                    alert('Tên không được chứa ký tự số');
                    e.preventDefault();
                    return;
                }
    
                // Kiểm tra email bắt buộc
                if (!emailInput) {
                    alert('Vui lòng nhập địa chỉ email');
                    e.preventDefault();
                    return;
                }
    
                // Kiểm tra độ dài của nội dung
                if (messageInput.length < 20) {
                    alert('Nội dung phải có ít nhất 20 ký tự');
                    e.preventDefault();
                    return;
                }
            });
        });