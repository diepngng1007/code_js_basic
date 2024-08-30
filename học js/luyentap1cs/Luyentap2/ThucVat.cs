using System;
using System.Collections.Generic;
using System.Text;

namespace Luyentap1
{
    internal class ThucVat
    {
        private double ma;
        private string ten;
        private int thoiGianThuHoach;

        public ThucVat()
        {

        }
        public ThucVat(double ma, string ten, int thoiGianThuHoach)
        {
            this.Ma = ma;
            this.Ten = ten;
            this.ThoiGianThuHoach = thoiGianThuHoach;
        }

        public double Ma { get => ma; set => ma = value; }
        public string Ten { get => ten; set => ten = value; }
        public int ThoiGianThuHoach { get => thoiGianThuHoach; set => thoiGianThuHoach = value; }

        public void XuatThongTin()
        {
            Console.WriteLine("Ma la:{0} ", Ma);
            Console.WriteLine("Ten la:{0} ", Ten);
            Console.WriteLine("Thoi gian thu hoach la:{0} ", ThoiGianThuHoach);
            Console.WriteLine("Loai cay trong la:{0} ", GetLoaiCayTrong());

        }

        public string GetLoaiCayTrong()
        {
            if (ThoiGianThuHoach < 1)
            {
                return "Cay ngan han";
            }
            else if (ThoiGianThuHoach > 1)
            {
                return "Cay trung han";
            }
            else
            {
                return "Cay dai han";
            }
        }
    }
}