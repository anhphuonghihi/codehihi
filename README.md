3.4.5.1 Bảng DeTai: Quản lý chi tiết các thông tin của đề tài
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDDeTai	int	Khóa chính
2	TenDeTai	Nvarchar(50)	Tên đề tài
3	ChuDeID	int	Liên kết với bảng ChuDe
4	SoSVThamGia 	int	Số sinh viên tham gia
5	BanMemDoAn	Nvarchar(50)	Bản mềm của đồ án
6	SourceCode	Nvarchar(50)	SourceCode đồ án
7	Nam	int	Năm thực hiện đồ án
8	NhanXetChung 	Nvarchar(50)	Nhận xét chung
9	HoiDongID	int	Liên kết với bảng hội đồng
Bảng 3.12 Bảng đề tài

3.4.5.2 Bảng ChuDe: Lưu thông tin các chủ đề của đề tài
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDChuDe	int	Khóa chính
2	TenChuDe	Nvarchar(50)	Tên chủ đề
2	GhiChu	Nvarchar(50)	Ghi chú chi tiết cho chủ đề đó.
Bảng 3.13 Bảng chủ đề







3.4.5.3 Bảng HuongDan: Lưu các thông tin và đánh giá của giảng viên hướng dẫn đề tài
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	DeTaiID	int	Liên kết với bảng DeTai
2	GiangVienID	int	Liên kết với bảng GiangVien
3	NhanXet 	Nvarchar(50)	Nhận xét của giảng viên hướng dẫn
4	DiemHuongDan	Float	Điểm của giảng viên hướng dẫn
Bảng 3.14 Bảng hướng dẫn

3.4.5.4 Bảng PhanBien: Lưu các thông tin và đánh giá của giảng viên phản biện đề tài
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	DeTaiID	int	Liên kết với bảng DeTai
2	GiangVienID	int	Liên kết với bảng GiangVien
3	NhanXet 	Nvarchar(50)	Nhận xét của giảng viên phản biện
4	DiemPhanBien	Float	Điểm của giảng viên phản biện
Bảng 3.15 Bảng phản biện

3.4.5.5 Bảng HoiDong: Lưu các thông tin và đánh giá của hội đồng chấm đề tài đó
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDHoiDong	int	Khóa chính
2	ChuTichHoiDong	Nvarchar(50)	Chủ tịch hội đồng chấm đề tài đó
3	SoThanhVien	int	Số thành viên của hội đồng chấm
4	NhanXet 	Nvarchar(50)	Nhận xét của hội đồng chấm
5	DiemHoiDong	Float	Điểm của hội đồng chấm
Bảng 3.16 Bảng hội đồng





3.4.5.6 Bảng GiangVien: Quản lý chi tiết các thông tin của giảng viên trong Khoa tham gia vào hướng dẫn và phản biện đề tài
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDGiangVien	int	Khóa chính
2	TenGiangVien	Nvarchar(50)	Tên giảng viên
3	GioiTinh	Nvarchar(50)	Giới tính
4	NamSinh  	Datetime	Năm sinh
5	Email	Nvarchar(50)	Email của giảng viên
6	SoDT	int	Số điện thoại
7	DiaChi	Nvarchar(50)	Địa chỉ của giảng viên
8	DonViID	int	Liên kết với bảng DonVi
9	KhoaID	int	Liên kết với bảng Khoa
10	HocVi	Nvarchar(50)	Học vị của giảng viên
11	ChucVu	Nvarchar(50)	Chức vụ của giảng viên
Bảng 3.17 Bảng giảng viên

3.4.5.7 Bảng DonVi: Quản lý chi tiết các thông tin của đơn vị mà giảng viên đang công tác
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDDonVi	int	Khóa chính
2	TenDonVi	Nvarchar(50)	Tên đơn vị
3	DiaChi	Nvarchar(50)	Địa chỉ của đơn vị
4	SoDT	int	Số điện thoại của đơn vị
5	TruongDonVi	Nvarchar(50)	Trưởng đơn vị
Bảng 3.18 Bảng đơn vị






3.4.5.8 Bảng HuongNghienCuu: Quản lý chi tiết các thông tin về hướng nghiên cứu của giảng viên
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDHuongNghienCuu	int	Khóa chính
2	TenHuongNghienCuu	Nvarchar(50)	Tên hướng nghiên cứu
2	GhiChu	Nvarchar(50)	Ghi chú hướng nghiên cứu
Bảng 3.19 Bảng hướng nghiên cứu

3.4.5.9 Bảng ThucHienNghienCuu: Quản lý chi tiết các thông tin về thực hiện nghiên cứu của giảng viên
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	GiangVienID	int	Liên kết với bảng GiangVien
2	HuongNghienCuuID	int	Liên kết với bảng HuongNghienCuu
3	SoLuongCongTrinhCongBo	Nvarchar(50)	Số lượng công trình đã công bố
Bảng 3.20 Bảng thực hiện nghiên cứu

3.4.5.10 Bảng Khoa: Quản lý chi tiết các thông tin về Khoa
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDKhoa	int	Khóa chính
2	TenKhoa	Nvarchar(50)	Tên khoa
3	TruongKhoa	Nvarchar(50)	Trưởng khoa
Bảng 3.21 Bảng Khoa






3.4.5.11 Bảng SinhVien: Quản lý chi tiết các thông tin của sinh viên làm đồ án
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDSinhVien	int	Khóa chính
2	TenSinhVien	Nvarchar(50)	Tên sinh viên
3	GioiTinh	Nvarchar(50)	Giới tính
4	NamSinh  	Datetime	Năm sinh
5	QueQuan	Nvarchar(50)	Quê quán của sinh viên
6	HoKhauThuongTru	Nvarchar(50)	Hộ khẩu thường trú
7	Email	Nvarchar(50)	Email của sinh viên
8	SoDT	int	Số điện thoại
9	LopID	int	Liên kết với bảng Lop
10	DeTaiID	int	Liên kết với bảng DeTai
Bảng 3.22 Bảng Sinh viên

3.4.5.12 Bảng Lop: Quản lý chi tiết các thông tin của lớp
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDLop	int	Khóa chính
2	TenLop	Nvarchar(50)	Tên lớp
3	SoSinhVien 	int	Số sinh viên
4	KhoaID	int	Liên kết với bảng Khoa
5	HeDaoTaoID	int	Liên kết với bảng HeDaoTao
6	BacDaoTaoID	int	Liên kết với bảng BacDaoTao
7	DiaDiemHocID	int	Liên kết với bảng DiaDiemHoc
8	KhoaDaoTaoID	int	Liên kết với bảng KhoaDaoTao
Bảng 3.23 Bảng lớp







3.4.5.13 Bảng BacDaoTao: Quản lý chi tiết các thông tin về bậc đào tạo
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDBacDaoTao	int	Khóa chính
2	TenBacDaoTao	Nvarchar(50)	Tên bậc đào tạo
Bảng 3.24 Bảng bậc đào tạo

3.4.5.14 Bảng HeDaoTao: Quản lý chi tiết các thông tin về hệ đào tạo.
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDHeDaoTao	int	Khóa chính
2	TenHeDaoTao	Nvarchar(50)	Tên hệ đào tạo
Bảng 3.25 Bảng hệ đào tạo

3.4.5.15 Bảng KhoaDaoTao: Quản lý chi tiết các thông tin về hệ đào tạo
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDKhoaDaoTao	int	Khóa chính
2	GhiChu	Nvarchar(50)	Ghi chú chi tiết cho khóa đào tạo
3	NienKhoa	Nvarchar(50)	Niên khóa
Bảng 3.26 Bảng khóa đào tạo

3.4.5.16 Bảng DiaDiemHoc: Quản lý chi tiết các thông tin về địa điểm học
STT	Tên trường	Kiểu dữ liệu	Mô tả
1	IDDiaDiemHoc	int	Khóa chính
2	TenDiaDiemHoc	Nvarchar(50)	Tên địa điểm học
3	DiaChi	Nvarchar(50)	Địa chỉ của địa điểm học
4	SoDT	int	Số điện thoại 
5	NguoiQuanLy	Nvarchar(50)	Người quản lý địa điểm học