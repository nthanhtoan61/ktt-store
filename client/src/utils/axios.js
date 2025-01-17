import axios from 'axios';

// Tạo instance axios với cấu hình mặc định
const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Thêm interceptor cho request
instance.interceptors.request.use(
    (config) => {
        // Thêm token vào header
        const token = localStorage.getItem('adminToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Thêm interceptor cho response
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Xử lý lỗi chung
        if (error.response) {
            // Lỗi từ server (status code không phải 2xx)
            switch (error.response.status) {
                case 401:
                    // Token hết hạn hoặc không hợp lệ
                    localStorage.removeItem('adminToken');
                    window.location.href = '/admin/login';
                    break;
                case 403:
                    // Không có quyền truy cập
                    console.error('Không có quyền truy cập');
                    break;
                case 404:
                    // Không tìm thấy tài nguyên
                    console.error('Không tìm thấy tài nguyên');
                    break;
                case 500:
                    // Lỗi server
                    console.error('Lỗi server');
                    break;
                default:
                    console.error('Có lỗi xảy ra');
            }
        } else if (error.request) {
            // Không nhận được response
            console.error('Không thể kết nối đến server');
        } else {
            // Lỗi khi setup request
            console.error('Lỗi:', error.message);
        }
        return Promise.reject(error);
    }
);

export default instance;
