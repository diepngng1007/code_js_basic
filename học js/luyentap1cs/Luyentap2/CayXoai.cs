using System;
using System.Collections.Generic;
using System.Text;

namespace Luyentap1
{
    internal class CayXoai : ThucVat
    {
        private double canNangTrungBinh;

        public CayXoai()
        {

        }
        public CayXoai(double canNangTrungBinh, double ma, string ten, int thoiGianThuHoach) : base (ma,ten,thoiGianThuHoach)
        {
            this.CanNangTrungBinh = canNangTrungBinh;
        }

        public double CanNangTrungBinh { get => canNangTrungBinh; set => canNangTrungBinh = value; }

        public void XuatThongTin()
        {
            base.XuatThongTin();
            Console.WriteLine("Can nang trung binh la: {0} ", CanNangTrungBinh);
        }
    }
}
