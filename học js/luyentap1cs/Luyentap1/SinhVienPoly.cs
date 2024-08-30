using System;
using System.Collections.Generic;
using System.Text;

namespace Luyentap
{
    internal class SinhVienPoly
    {
        //tạo chú thích
        //khai báo thuộc tính điểm có kiểu dữ liệu là double
        //khai báo thuộc tính tên có kiểu dữ liệu là string
        //khai báo thuộc tính chuyên ngành có kiểu dữ liệu là int
        private double diem;
       
        private string ten;
       
        private int chuyenNganh;

        public SinhVienPoly()
        {

        }

        public SinhVienPoly(double diem, string ten, int chuyenNganh)
        {
            this.Diem = diem;
            this.Ten = ten;
            this.ChuyenNganh = chuyenNganh;
        }

        public double Diem { get => diem; set => diem = value; }
        public string Ten { get => ten; set => ten = value; }
        public int ChuyenNganh { get => chuyenNganh; set => chuyenNganh = value; }

        public void XuatThongTin()
        {
            Console.WriteLine("Diem: {0}",Diem);
            Console.WriteLine("Ten: {0}", Ten);
            Console.WriteLine("Chuyen nganh: {0}", ChuyenNganh);
            Console.WriteLine("Hoc luc {0}", GetHocLuc());
        }

        public string GetHocLuc()
        {
            if(Diem < 5)
            {
                return "Yeu";
            }
            else if(Diem < 6.5)
            {
                return "Trung binh";
            }
            else if (Diem < 7.5)
            {
                return "Kha";
            }
            else if (Diem < 9)
            {
                return "Gioi";
            }
            else
            {
                return "Xuat sac";
            }
        }

    }

}
