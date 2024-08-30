using System;
using System.Collections.Generic;
using System.Text;

namespace Luyentap3
{
    internal class MonHocIT : MonHoc
    {
        private string hinhThuc;
        public MonHocIT()
        {

        }

        public MonHocIT(string hinhThuc, double ma, string ten, int soTinChi) : base( ma, ten, soTinChi)
        {
            this.HinhThuc = hinhThuc;
        }

        public string HinhThuc { get => hinhThuc; set => hinhThuc = value; }

        public void XuatThongTin()
        {
            base.XuatThongTin();
            Console.WriteLine("Hinh thuc la:{0} ", HinhThuc);
        }
        public double GetHocPhi()
        {
           
            return 700 * SoTinChi;
        }
    }
}
