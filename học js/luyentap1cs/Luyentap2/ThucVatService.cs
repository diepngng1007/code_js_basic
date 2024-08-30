using System;
using System.Collections.Generic;
using System.Text;

namespace Luyentap1
{
    internal class ThucVatService
    {
        List<ThucVat> dsTv = new List<ThucVat>();

        public void NhapDanhSach()
        {
            Console.WriteLine("Moi ban nhap danh sach doi tuong: ");
            int n = Convert.ToInt32(Console.ReadLine());

            for(int i = 0; i < n; i++)
            {
                Console.WriteLine("Moi ban nhap ma: ");
                double sCode = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Moi ban nhap ten: ");
                string sName = Console.ReadLine();
                Console.WriteLine("Moi ban nhap thoi gian thu hoach: ");
                int sTime = Convert.ToInt32(Console.ReadLine());

                ThucVat tv = new ThucVat(sCode, sName, sTime);
                dsTv.Add(tv);
            }
            
        }

        public void XuatDanhSach()
        {
            for (int i = 0; i < dsTv.Count; i++)
            {
                dsTv[i].XuatThongTin();
            }
        }

        public void XuatDanhSachTheoLoaiCayTrong()
        {
            Console.WriteLine("Moi ban nhap loai cay trong: ");
            string a = Console.ReadLine();

            for(int i = 0; i < dsTv.Count; i++)
            {
                if(string.Equals(a.ToLower(), this.dsTv[i].GetLoaiCayTrong().ToLower()))
                {
                    this.dsTv[i].XuatThongTin();
                }
            }
        }
        public void TimTheoMa()
        {
            Console.WriteLine("Moi ban nhap ma: ");
            double code = Convert.ToDouble(Console.ReadLine());

            for(int i = 0; i < this.dsTv.Count; i++)
            {
                if(code == this.dsTv[i].Ma)
                {
                    this.dsTv[i].XuatThongTin();
                }
            }
        }

        public void KeThua()
        {
            CayXoai cayXoai = new CayXoai(1.3,1,"abc",5);
            cayXoai.XuatThongTin();
        }
    }
}
