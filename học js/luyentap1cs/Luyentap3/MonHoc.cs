using System;
using System.Collections.Generic;
using System.Text;

namespace Luyentap3
{
    internal class MonHoc
    {
        private double ma;
        private string ten;
        private int soTinChi;

        public double Ma { get => ma; set => ma = value; }
        public string Ten { get => ten; set => ten = value; }
        public int SoTinChi { get => soTinChi; set => soTinChi = value; }

        public MonHoc()
        {

        }

        public MonHoc(double ma, string ten, int soTinChi)
        {
            this.Ma = ma;
            this.Ten = ten;
            this.SoTinChi = soTinChi;
        }

        public void XuatThongTin()
        {
            Console.WriteLine("Ma:{0} ", Ma);
            Console.WriteLine("Ten:{0} ", Ten);
            Console.WriteLine("So tin chi:{0} ", SoTinChi);
            Console.WriteLine("Hoc phi:{0} ", GetHocPhi());
        }
        public double GetHocPhi()
        {
            return 650 * SoTinChi;
        }
    }

}
