using System;
using System.Collections.Generic;
using System.Text;

namespace Luyentap
{
    internal class SinhVienTKTW : SinhVienPoly
    {
        private double diemPHP;
        private double diemJs;

        public SinhVienTKTW()
        {

        }
        //kế thừa constructor từ lớp cha
        public SinhVienTKTW(double diemPHP, double diemJs, double diem, string ten, int chuyenNganh) : base(diem, ten, chuyenNganh)
        {
            this.diemPHP = diemPHP;
            this.diemJs = diemJs;
        }
        //property
        public double DiemPHP { get => diemPHP; set => diemPHP = value; }
        public double DiemJs { get => diemJs; set => diemJs = value; }

        public void XuatThongTin()
        {
            base.XuatThongTin();
            Console.WriteLine("Diem cua PHP la: {0}", DiemPHP);
            Console.WriteLine("Diem cua Js la: {0}", DiemJs);
        }
        
    }
}
