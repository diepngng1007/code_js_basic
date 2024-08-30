using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace Luyentap3
{
    internal class MonHocService
    {
        List<MonHoc> dsMonHoc = new List<MonHoc>();
        public void NhapDanhSach()
        {
            Console.WriteLine("Ban muon nhap bao nhieu sv? ");
            int n = Convert.ToInt32(Console.ReadLine());
            for(int i = 0; i < n; i++)
            {
                Console.WriteLine("Ma: ");
                double sMa = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Ten: ");
                string sTen = Console.ReadLine();
                Console.WriteLine("So tin chi: ");
                int sSoTinChi = Convert.ToInt32((Console.ReadLine()));

                MonHoc Mh = new MonHoc (sMa, sTen, sSoTinChi); 

                dsMonHoc.Add (Mh);
            }    

        }   
        public void XuatDanhSach()
        {
            for(int i = 0; i < dsMonHoc.Count; i++)
            {
                dsMonHoc[i].XuatThongTin();
            }
        }
        public void XuatDsTheoTinChi()
        {
            int a = Convert.ToInt32(Console.ReadLine());
            for(int i = 0; i < dsMonHoc.Count; i++)
            {
                if(a == dsMonHoc[i].SoTinChi)
                {
                    dsMonHoc[i].XuatThongTin();
                }
            }
        }
        public void SapXepHocPhiGiamDan()
        {
            dsMonHoc.Sort((a, b) => (int)(b.GetHocPhi() - a.GetHocPhi()));//sắp xếp theo thứ tự giảm dần
            for (int i = 0; i < dsMonHoc.Count; i++)
            {
                dsMonHoc[i].XuatThongTin();
            }
        }
        public void KeThua()
        {
            MonHocIT MhIT = new MonHocIT("tot", 30666, "diep", 3) ;
            MhIT.XuatThongTin();
        }
    }
}
